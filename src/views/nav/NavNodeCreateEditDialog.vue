<template>
  <base-dialog ref="baseDialog">
    <div class="content">
      <div class="content__title">
        <b>{{ title }}</b>
      </div>
      <div class="content__container">
        <div v-if="!forRootNode && !forEdit" class="content__container__group">
          <label><b>父节点ID：</b><span>{{ parentNodeId }}</span></label>
        </div>

        <div v-if="forEdit" class="content__container__group">
          <label><b>节点ID：</b><span>{{ currentNodeId }}</span></label>
        </div>

        <div class="content__container__group">
          <div class="content__container__label">
            <label><b>Wiki页面ID</b></label>
          </div>
          <input v-focus tabindex="1" v-model="navNodeURL" class="content__container__input" type="text" placeholder="输入链接" name="target" required>
          <p v-if="navNodeURLErrorMessage != ''" class="content__container__error"> {{ navNodeURLErrorMessage }}</p>
        </div>

        <div class="content__container__group">
          <div class="content__container__label">
            <label><b>节点标题</b></label>
          </div>
          <input tabindex="2"  v-model="navNodeTitle" class="content__container__input" type="text" placeholder="输入标题" name="title" required>
          <p v-if="navNodeTitleErrorMessage != ''" class="content__container__error"> {{ navNodeTitleErrorMessage }}</p>
        </div>
      </div>

      <div class="content__btns">
        <div tabindex="3" class="content__btns__btn content__btns__btn--first" @click="confirm"> {{ okButton }}</div>
        <div tabindex="4" class="content__btns__btn content__btns__btn--last" @click="cancel">{{ cancelButton }}</div>
      </div>
    </div>
  </base-dialog>
</template>

<script>
import { reactive, toRefs, ref } from 'vue';
import BaseDialog from '../../components/BaseDialog.vue'

export default {
  name: 'NavNodeCreateEditDialog',
  components: { BaseDialog },
  setup() {
    // Parameters that change depending on the type of dialogue
    const data = reactive({
      title: undefined,
      forRootNode: false,
      forEdit: false,
      parentNodeId: undefined,
      currentNodeId: undefined,
      navNodeURL: '',
      navNodeTitle: '',
      navNodeURLErrorMessage: '',
      navNodeTitleErrorMessage: '',
      okButton: '创建', 
      cancelButton: '取消', 
    })

    const returnMethods = {
      onClickOKButton: undefined,
      // Private variables
      resolvePromise: undefined,
      rejectPromise: undefined,
    }

    const baseDialog = ref(null);

    const show = (opts = {}) => {
      console.log('opts', opts);
      data.title = opts.title;
      data.forRootNode = opts.forRootNode;
      data.parentNodeId = opts.parentNodeId;
      data.forEdit = opts.forEdit;
      data.navNodeURL = '';
      data.navNodeTitle = '';

      // for edit
      if (opts.forEdit) {
        data.currentNodeId = opts.currentNodeId;
        data.navNodeURL = opts.navNodeURL;
        data.navNodeTitle = opts.navNodeTitle;
      }

      if (opts.okButton) {
        data.okButton = opts.okButton;
      }
      if (opts.cancelButton) {
        data.cancelButton = opts.cancelButton;
      }
      returnMethods.onClickOKButton = opts.onClickOKButton;
      console.log('data', data);

      // Once we set our config, we tell the popup modal to open
      baseDialog.value.open();

      // Return promise so the caller can get results
      return new Promise((resolve, reject) => {
        returnMethods.resolvePromise= resolve
        returnMethods.rejectPromise = reject
      })
    }

    const confirm = async ()=> {
      try {
        console.log("for root node:", data.forRootNode);
        // 输入验证
        let hasError = false;
        if (data.navNodeURL === '') {
          data.navNodeURLErrorMessage = '节点链接不能为空';
          hasError = true;
        } else {
          data.navNodeURLErrorMessage = '';
        }
        if (data.navNodeTitle === '') {
          data.navNodeTitleErrorMessage = '节点标题不能为空';
          hasError = true;
        } else {
          data.navNodeTitleErrorMessage = '';
        }
        if (hasError) {
          return;
        }
        const ret = await returnMethods.onClickOKButton(data.navNodeTitle, data.navNodeURL);
        baseDialog.value.close();
        returnMethods.resolvePromise(ret);
      } catch(error) {
        console.error(error);
        baseDialog.value.close();
        returnMethods.rejectPromise(error);
      }
    }

    const cancel = () => {
      baseDialog.value.close()
    }

    const { 
      title, 
      forRootNode,
      parentNodeId,
      currentNodeId,
      navNodeURL,
      navNodeTitle,
      navNodeURLErrorMessage,
      navNodeTitleErrorMessage, 
      okButton, 
      cancelButton ,
      forEdit
    } = toRefs(data);

    return {
      title,
      forRootNode,
      parentNodeId,
      currentNodeId,
      navNodeURL,
      navNodeTitle,
      navNodeURLErrorMessage,
      navNodeTitleErrorMessage, 
      okButton,
      cancelButton,
      forEdit,
      baseDialog,
      show,
      confirm,
      cancel
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    background: #FFF;
    border-radius: .04rem;
    width: 5rem;

  &__title {
    margin: .24rem 0 0 0;
    line-height: .26rem;
    font-size: .18rem;
    ;
    color: #333;
    text-align: center;
  }

  &__desc {
    margin: .08rem 0 0 0;
    font-size: .14rem;
    color: #666;
    text-align: center;
  }

  &__container {
    margin: 0 .4rem .16rem .4rem; // 设置外边距，将input div挤到中间居中
    padding: 0 .16rem; // 设置内边距，将里面的输入框content与外面的input div留出距离

    &__group {
      margin-top: .2rem;
    }

    &__label {
      margin-bottom: .1rem;
    }

    &__error {
      color: #af0c0c;
      background-color: #ffe0e0;
      padding: 8px;
    }

    &__input {
      width: 100%;
      margin-bottom: 20px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }

  &__btns {
    display: flex;
    margin: .24rem .58rem;

    &__btn {
      cursor: pointer;
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      // border-radius: .16rem;
      text-align: center;

      &--first {
        margin-right: .12rem;
        background-color: #4FB0F9;
        color: #FFF;
        transition-duration: 0.2s;
      }
      &--first:hover {
        background-color: #1c98f7;
      }

      &--last {
        margin-left: .12rem;
        border: .01rem solid #4FB0F9;
        background-color: #FFF;
        color: #4FB0F9;
        transition-duration: 0.2s;
      }
      &--last:hover {
        color: #0091ff;
      }

    }
  }
}
</style>