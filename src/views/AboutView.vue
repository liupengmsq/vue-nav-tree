<template>
  <div>
    <div>
      <input type="button" value="管理" @click="enableManageNavTreeMode">
      <input type="button" value="返回" @click="disableManageNavTreeMode">
    </div>
    <div id="nav" class="nav" v-html="finalHtml" @click="onNodeClicked"></div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import * as nav_util from '../utils/nav';

export default {
  name: 'AboutView',

  setup () {
    const store = useStore();
    const router = useRouter();

    const finalHtml = computed(() => store.getters.getFinalRawHTML );

    // 初始化左侧导航栏
    onMounted(() => {
      store.dispatch('generateNavTree', { manageMode: false });
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

        // 状态保存到localStorage中
        nav_util.select_nav_tree_node(e.target.id);
      }

      // 处理当用户点击某个节点文字前的展开或隐藏图标
      if(e.target.tagName === 'I') {
        const currentNode = e.target.parentElement;
        
        // 轮询被点击节点的儿子节点，将其显示或隐藏
        for (const child of currentNode.children) {
          if(child.tagName === 'DIV') {
            if (child.style.display === "none") {
              child.style.display = "block";
              nav_util.show_nav_tree_node(child.id);
            } else {
              child.style.display = "none";
              nav_util.unshow_nav_tree_node(child.id);
            }
          }
        }

        // 将选中的节点的展开或者折叠的图标更换
        if (e.target.classList.contains('icon-expanded')) {
          e.target.classList.remove('icon-expanded');
          e.target.classList.add('icon-collapsed');
          nav_util.collapse_nav_tree_node(e.target.id);

        } else if (e.target.classList.contains('icon-collapsed')) {
          e.target.classList.remove('icon-collapsed');
          e.target.classList.add('icon-expanded');
          nav_util.expand_nav_tree_node(e.target.id);
        }
      }

      if(e.target.tagName === 'INPUT') {
        console.log(e.target.id);
        if (e.target.value === "新建") {
          console.log("新建子节点", e.target.value);
        }
        if (e.target.value === "编辑") {
          console.log("编辑当前节点", e.target.value);
        }
        if (e.target.value === "删除") {
          console.log("删除当前节点", e.target.value);
          nav_util.deleteNavTreeNode(e.target.id);
          router.go();
        }
      }
    }

    const enableManageNavTreeMode = ()=> {
      console.log('Enable manange mode');
      store.dispatch('generateNavTree', { manageMode: true });
    }

    const disableManageNavTreeMode = ()=> {
      console.log('Disable manange mode');
      store.dispatch('generateNavTree', { manageMode: false});
    }

    return {
      finalHtml,
      onNodeClicked,
      enableManageNavTreeMode,
      disableManageNavTreeMode
    }
  }
}
</script>

// 这里的css不能使用scoped局部样式, 因为我们要应用到raw html上
<style lang="scss">
.nav {
  font-size: .16rem;
  line-height: .26rem;
  margin-left: .2rem;
}
.nav-selected {
  background: #00a8e6 !important;
  color: #fff !important;
}
.manage_button {
  margin: .01rem 0 .01rem .05rem;
  border-radius: .04rem;
  font-size: .16rem;
  text-align: center;
}
</style>
