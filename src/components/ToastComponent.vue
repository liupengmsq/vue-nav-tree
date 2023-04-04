<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  });

  const showToast = (message) => {
    // 显示提示框
    toastData.show = true;
    // 设置显示的内容
    toastData.toastMessage = message;

    // 三秒后提示框小时
    setTimeout(() => {
      toastData.show = false;
      toastData.toastMessage = '';
    }, 3000);
  }

  const { show, toastMessage } = toRefs(toastData);

  return { show, toastMessage, showToast };
}

</script>

<style lang="scss" scoped>
.toast {
  // 水平与垂直居中
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  padding: .1rem;
  background: rgba(0, 0, 0, .35); // rgba中的a是透明度的设置
  // border-radius: .05rem;
  color: #F5F5F5;
}
</style>
