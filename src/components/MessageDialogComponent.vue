<template>
  <div class="mask">
    <div class="mask__content">
      <template v-if="messageDialogSucess">
        <div class="iconfont mask__content__icon--success">&#xe663;</div>
      </template>
      <template v-else>
        <div class="iconfont mask__content__icon--fail">&#xe63f;</div>
      </template>

      <div class="mask__content__title">{{ messageDialogTitle }}</div>
      <p class="mask__content__desc">{{ messageDialogDesc }}</p>
      <div class="mask__content__btns">
        <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="onClickOKButtonInMessageDialog">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  props: {
    messageDialogTitle: String,
    messageDialogDesc: String,
    messageDialogSucess: Boolean,
    onClickOKButtonInMessageDialog: Function
  }
}
export const useMessageDialogEffect = () => {
  const messageDialogData = reactive({
    showMessageDialog: false,
  });

  const handleShowMessageDialog = () => {
    messageDialogData.showMessageDialog = true;
  }

  const handleDismissMessageDialog = () => {
    messageDialogData.showMessageDialog = false;
  }

  const { showMessageDialog } = toRefs(messageDialogData);

  return {
    showMessageDialog,
    handleShowMessageDialog,
    handleDismissMessageDialog
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
    transform: translate(-50%, -200%);
    width: 3rem;
    background: #FFF;
    border-radius: .04rem;
    ;

    &__icon {
      &--success {
        position: absolute;
        float: left;
        top: .4rem;
        left: .2rem;
        color: #333;
        font-size: .5rem;
      }

      &--fail {
        position: absolute;
        float: left;
        top: .21rem;
        left: .2rem;
        color: #ff0505;
        font-size: .5rem;
      }
    }

    &__title {
      margin: .24rem 0 0 0;
      line-height: .26rem;
      font-size: .18rem;
      ;
      color: #333;
      text-align: center;
    }

    &__desc {
      margin: 0.08rem 0.1rem 0.08rem 0.1rem;
      font-size: .14rem;
      ;
      color: #666;
      text-align: center;
      word-break: normal;
      white-space: normal;
    }

    &__btns {
      display: flex;
      margin: .24rem .58rem;

      &__btn {
        cursor: pointer;
        flex: 1;
        width: .8rem;
        line-height: .32rem;
        border-radius: .16rem;
        text-align: center;

        &--first {
          margin-right: .12rem;
          border: .01rem solid #4FB0F9;
          color: #4FB0F9;
        }

        &--last {
          margin-left: .12rem;
          background-color: #4FB0F9;
          color: #FFF;
        }
      }
    }
  }
}
</style>