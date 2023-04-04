<template>
  <div class="mask">
    <div class="mask__content">
      <div class="mask__content__title">
        <b v-if="forRootNode">新建根节点</b>
        <b v-else>新建节点</b>
      </div>
      <div class="mask__content__container">

        <div v-if="!forRootNode" class="mask__content__container__group">
          <label><b>父节点ID：</b><span>{{ confirmDialogInputValue }}</span></label>
        </div>

        <div class="mask__content__container__group">
          <div class="mask__content__container__label">
            <label><b>节点链接</b></label>
          </div>
          <div class="mask__content__container__input">
            <input v-model="confirmDialogData.navNodeURL" class="mask__content__container__input__content" type="text" placeholder="输入链接" name="target" required>
          </div>
          <p v-if="confirmDialogData.navNodeURLErrorMessage != ''" class="mask__content__container__error"> {{ confirmDialogData.navNodeURLErrorMessage }}</p>
        </div>

        <div class="mask__content__container__group">
          <div class="mask__content__container__label">
            <label><b>节点标题</b></label>
          </div>
          <div class="mask__content__container__input">
            <input v-model="confirmDialogData.navNodeTitle" class="mask__content__container__input__content" type="text" placeholder="输入标题" name="title" required>
          </div>
          <p v-if="confirmDialogData.navNodeTitleErrorMessage != ''" class="mask__content__container__error"> {{ confirmDialogData.navNodeTitleErrorMessage }}</p>
        </div>
      </div>

      <div class="mask__content__btns">
        <div class="mask__content__btns__btn mask__content__btns__btn--first"
          @click="onClickCreateButtonInConfirmDialog(confirmDialogInputValue)">创建</div>
        <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="onClickDismissButtonInConfirmDialog">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import * as nav_util from '../../utils/nav';

export default {
  name: 'NavNodeCreationDialog',
  props: {
    confirmDialogInputValue: String,
    onClickDismissButtonInConfirmDialog: Function,
    forRootNode: Boolean
  },
  emits: ['createNodeSuceeded', 'createNodeFailed'],
  setup(props, { emit }) {
    const confirmDialogData = reactive({
      navNodeURL: '',
      navNodeTitle: '',
      navNodeURLErrorMessage: '',
      navNodeTitleErrorMessage: '',
    });

    const onClickCreateButtonInConfirmDialog = (parentId) => {
      console.log("for root node:", props.forRootNode);
      // 输入验证
      let hasError = false;
      if (confirmDialogData.navNodeURL === '') {
        confirmDialogData.navNodeURLErrorMessage = '节点链接不能为空';
        hasError = true;
      } else {
        confirmDialogData.navNodeURLErrorMessage = '';
      }
      if (confirmDialogData.navNodeTitle === '') {
        confirmDialogData.navNodeTitleErrorMessage = '节点标题不能为空';
        hasError = true;
      } else {
        confirmDialogData.navNodeTitleErrorMessage = '';
      }
      if (hasError) {
        return;
      }

      if (!props.forRootNode) {
        // 调用后端API，新建叶子节点
        nav_util.createNavTreeNode(parentId, confirmDialogData.navNodeTitle, confirmDialogData.navNodeURL).then((response) => {
          if (response.Success) {
            emit('createNodeSuceeded', response.Result.id);
          }
        }).catch((error) => {
          console.log('Errors when creating node', error.response.data.Errors[0]);
          emit('createNodeFailed', error.response.data.Errors[0]);
        });
      } else {
        // 调用后端API，新建根节点
        nav_util.createNavTreeNode(null, confirmDialogData.navNodeTitle, confirmDialogData.navNodeURL, true).then((response) => {
          if (response.Success) {
            emit('createNodeSuceeded', response.Result.id);
          }
        }).catch((error) => {
          console.log('Errors when creating node', error.response.data.Errors[0]);
          emit('createNodeFailed', error.response.data.Errors[0]);
        });
      }
    }

    return {
      onClickCreateButtonInConfirmDialog,
      confirmDialogData
    }
  }
}
export const useNavNodeCreationConfirmDialogEffect = () => {
  const confirmDialogData = reactive({
    showNavNodeCreationConfirmDialog: false,
    parentNavNodeIdForNavNodeCreation: '',
  });

  // 显示对话框
  const handleShowNavNodeCreationConfirmDialog = (parentId) => {
    console.log("Parent node id", parentId);
    confirmDialogData.parentNavNodeIdForNavNodeCreation = parentId;
    confirmDialogData.showNavNodeCreationConfirmDialog = true;
  }

  // 隐藏对话框
  const handleDismissNavNodeCreationConfirmDialog = () => {
    confirmDialogData.showNavNodeCreationConfirmDialog = false;
  }

  const { showNavNodeCreationConfirmDialog, parentNavNodeIdForNavNodeCreation } = toRefs(confirmDialogData);

  return {
    parentNavNodeIdForNavNodeCreation,
    showNavNodeCreationConfirmDialog,
    handleShowNavNodeCreationConfirmDialog,
    handleDismissNavNodeCreationConfirmDialog
  }
}
</script>

<style lang="scss" scoped>
.mask {
  // 设置整个对话框外的蒙层效果
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: rgba(0, 0, 0, 0.50);

  &__content {
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
        height: .48rem;
        padding: 0 .16rem; // 设置内边距，将里面的输入框content与外面的input div留出距离
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        // border-radius: 6px;  // 圆角
        &__content {
            line-height: .48rem;
            border: none;
            outline: none;
            width: 100%;
            background: none;
            font-size: .16rem;
            color: #777;
            &::placeholder { // 伪元素选择器，选择input中的placeholder的样式
                color: #777;
            }
        }
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
}</style>