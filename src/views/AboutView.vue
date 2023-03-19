<template>
  <div>
    <div id="nav" class="nav" v-html="finalHtml" @click="onNodeClicked"></div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'AboutView',

  setup () {
    const store = useStore();
    const finalHtml = computed(() => store.getters.getFinalRawHTML );

    onMounted(() => {
      store.dispatch('printAllNodes');
    });

    // 通过在vue的raw html的父节点上监控事件触发，来实现raw html的事件处理
    const onNodeClicked = (e) => {

      // 处理当用户点击某个节点的文字
      if(e.target.tagName === 'A') {

        // 取消掉所有选中的node节点
        console.log('Clear selected item in nav list');
        const linkElements = document.getElementById('nav').getElementsByTagName('A');
        for (const link of linkElements) {
          if (link.classList.contains('nav-selected')) {
            link.classList.remove('nav-selected');
          }
        }

        // 将选中的节点标记为高亮
        console.log('Mark selected item in nav list');
        e.target.classList.add('nav-selected');
      }

      // 处理当用户点击某个节点文字前的展开或隐藏图标
      if(e.target.tagName === 'I') {
        const currentNode = e.target.parentElement;
        
        // 轮询被点击节点的儿子节点，将其显示或隐藏
        for (const child of currentNode.children) {
          if(child.tagName === 'DIV') {
            if (child.style.display === "none") {
              child.style.display = "block";
            } else {
              child.style.display = "none";
            }
          }
        }

        // 将选中的节点的展开或者折叠的图标更换
        if (e.target.classList.contains('icon-nodeexpand')) {
          e.target.classList.remove('icon-nodeexpand');
          e.target.classList.add('icon-expand');
        } else if (e.target.classList.contains('icon-expand')) {
          e.target.classList.remove('icon-expand');
          e.target.classList.add('icon-nodeexpand');
        }
      }
    }

    return {
      finalHtml,
      onNodeClicked
    }
  }
}
</script>

// 这里的css不能使用scoped局部样式，因为我们要应用到raw html上
<style lang="scss">
.nav {
  font-size: .1rem;
  line-height: .15rem;
  margin-left: .1rem;
}
.nav-selected {
  background: #00a8e6 !important;
  color: #fff !important;
}
</style>
