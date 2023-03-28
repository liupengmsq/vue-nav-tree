<template>
    <div class="mask">
        <div class="mask__content">
            <div class="mask__content__title">{{ confirmDialogTitle }} </div>
            <p class="mask__content__desc"> {{ confirmDialogDesc  }} </p>
            <div class="mask__content__btns">
                <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="handleConfirm(confirmDialogInputValue)">确认</div>
                <div class="mask__content__btns__btn mask__content__btns__btn--first" @click="handleDismissConfirm">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    props: {
        confirmDialogTitle: String,
        confirmDialogDesc: String,
        confirmDialogInputValue: String,
        handleConfirm: Function,
        handleDismissConfirm: Function
    }
}
export const useConfirmDialogEffect = () => {
    const confirmDialogData = reactive({
        showConfirmDialog: false,
        inputValueForConfirmDialog: ''
    });

    const handleShowDialog = (inputValue) => {
      console.log("inputValue", inputValue);
      confirmDialogData.showConfirmDialog = true;
      confirmDialogData.inputValueForConfirmDialog= inputValue;
      console.log('inputValueForConfirmDialog', confirmDialogData.inputValueForConfirmDialog);
    }

    const handleDismissConfirmDialog = () => {
      confirmDialogData.showConfirmDialog = false;
    }

    const { showConfirmDialog, inputValueForConfirmDialog } = toRefs(confirmDialogData);

    return {
      inputValueForConfirmDialog,
      showConfirmDialog,
      handleShowDialog,
      handleDismissConfirmDialog
    }
}
</script>

<style lang="scss" scoped>
.mask {
    // 设置整个对话框外的蒙层效果
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.50);
    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3rem;
        height: 1.56rem;
        background: #FFF;
        border-radius: .04rem;;
        &__title {
            margin: .24rem 0 0 0;
            line-height: .26rem;
            font-size: .18rem;;
            color: #333;
            text-align: center;
        }
        &__desc {
            margin: .08rem 0 0 0;
            font-size: .14rem;;
            color: #666;
            text-align: center;
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
