<template>
  <div class="mask">
    <div class="mask__content">
      <div class="mask__content__title">新建节点</div>
      <div class="mask__content__container">

        <div class="mask__content__container__group">
          <label>父节点ID：123</label>
        </div>

        <div class="mask__content__container__group">
          <div>
            <label>节点链接：</label>
          </div>
          <div class="mask__content__container__input">
            <input class="mask__content__container__input__content" type="text" placeholder="输入链接" name="target" required>
          </div>
        </div>

        <div class="mask__content__container__group">
          <div>
            <label>节点标题：</label>
          </div>
          <div class="mask__content__container__input">
            <input class="mask__content__container__input__content" type="text" placeholder="输入标题" name="title" required>
          </div>
        </div>

        <div class="mask__content__container__group">
          <label>创建根节点：</label> <input type="checkbox" name="isRoot">
        </div>

      </div>
      <div class="mask__content__btns">
        <div class="mask__content__btns__btn mask__content__btns__btn--first"
          @click="onClickConfirmButtonInConfirmDialog(confirmDialogInputValue)">确认</div>
        <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="onClickDismissButtonInConfirmDialog">
          取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavNodeCreationDialog',
  props: {
    confirmDialogInputValue: String,
    onClickConfirmButtonInConfirmDialog: Function,
    onClickDismissButtonInConfirmDialog: Function
  },
  setup() {

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
        margin-top: .1rem;
      }
      
      &__input {
        height: .48rem;
        padding: 0 .16rem; // 设置内边距，将里面的输入框content与外面的input div留出距离
        background: #F9F9F9;
        border: .01rem solid rgba(0,0,0,0.10);
        border-radius: 6px;  // 圆角
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
        border-radius: .16rem;
        text-align: center;

        &--first {
          margin-right: .12rem;
          background-color: #4FB0F9;
          color: #FFF;
        }

        &--last {
          margin-left: .12rem;
          border: .01rem solid #4FB0F9;
          background-color: #FFF;
          color: #4FB0F9;
        }
      }
    }
  }
}</style>