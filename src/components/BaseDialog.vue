<template>
  <transition name="fade">
    <div class="mask" v-if="isVisible">
      <div class="mask__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'BaseDialog',
  setup() {
    const isVisible = ref(false);
    const open = () => {
      isVisible.value = true;
    }

    const close = () => {
      isVisible.value = false;
    }

    return {
      isVisible, 
      open, 
      close
    }
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
  }
}
</style>