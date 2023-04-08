<template>
  <base-dialog ref="baseDialog">
    <div class="content__title">{{ title }} </div>
    <p class="content__desc"> {{ message }} </p>
    <div class="content__btns">
      <div class="content__btns__btn content__btns__btn--first" @click="confirm">{{ okButton }}</div> 
      <div class="content__btns__btn content__btns__btn--last" @click="cancel">{{ cancelButton }}</div>
    </div>
  </base-dialog>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
import BaseDialog from './BaseDialog.vue'

export default {
  name: 'ConfirmDialog',
  components: { BaseDialog },

  setup() {
    // Parameters that change depending on the type of dialogue
    const data = reactive({
      title: undefined,
      message: undefined, // Main text content
      okButton: '确认', // Text for confirm button; leave it empty because we don't know what we're using it for
      cancelButton: '取消', // text for cancel button
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
      data.message = opts.message;
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
        const ret = await returnMethods.onClickOKButton();
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

    const { title, message, okButton, cancelButton } = toRefs(data);

    return {
      title,
      message,
      okButton,
      cancelButton,
      baseDialog,
      show,
      confirm,
      cancel
    }
  }
}
</script>

<style lang="scss" scoped>
.content__title {
  margin: .24rem 0 0 0;
  line-height: .26rem;
  font-size: .18rem;
  ;
  color: #333;
  text-align: center;
}
.content__desc {
  margin: .08rem 0 0 0;
  font-size: .14rem;
  ;
  color: #666;
  text-align: center;
}
.content__btns {
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
    }
    &--first:hover {
      background-color: #1c98f7;
    }

    &--last {
      margin-left: .12rem;
      border: .01rem solid #4FB0F9;
      background-color: #FFF;
      color: #4FB0F9;
    }
    &--last:hover {
      color: #0091ff;
    }
  }
}
</style>