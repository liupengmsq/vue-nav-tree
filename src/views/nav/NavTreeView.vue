<template>
  <div class="wrapper">
    <div class="main">
      <div class="nav_container">
        <input type="button" value="管理" @click="onClickManageNavTreeButton">
        <input type="button" value="返回" @click="onClickDisableManageNavTreeButton">
        <input type="button" value="新建根节点" @click="onClickCreateNavTreeRootNodeButton">
        <div id="nav" class="nav" v-html="finalHtml" @click="onNodeClicked"></div>
      </div>
      <div id="content" class="content">
        <h1>这里是标题</h1>
        <p>
          这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，这里是内容，
        </p>
      </div>
    </div>
  </div>

  <confirm-dialog ref="confirmDialog"></confirm-dialog>
  <message-dialog ref="messageDialog"></message-dialog>
  <nav-node-create-dialog ref="nodeCreationDialog"></nav-node-create-dialog>
</template>

<script>
import { useStore } from 'vuex';
import router from "@/router/index.js";
import { computed, onMounted, ref } from 'vue';
import * as nav_util from '../../utils/nav';

import ConfirmDialog from '../../components/ConfirmDialog.vue'
import MessageDialog from '../../components/MessageDialog.vue'
import NavNodeCreateDialog from './NavNodeCreateDialog.vue'

export default {
  name: 'AboutView',
  components: {
    ConfirmDialog: ConfirmDialog,
    MessageDialog: MessageDialog,
    NavNodeCreateDialog: NavNodeCreateDialog,
  },

  setup () {
    const store = useStore();
    const confirmDialog = ref(null);
    const messageDialog = ref(null);
    const nodeCreationDialog = ref(null);

    const onClickLinkOnNavNode = (e) => {
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

    const onClickExpandIconOnNavNode = (e) => {
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

    // 节点树的HTML
    const finalHtml = computed(() => store.getters.getFinalRawHTML );

    // 初始化左侧导航栏
    onMounted(() => {
      store.dispatch('generateNavTree', { manageMode: false });
    });

    // 通过在vue的raw html的父节点上监控事件触发，来实现raw html的事件处理
    const onNodeClicked = async (e) => {
      // 处理当用户点击某个节点的文字
      if(e.target.tagName === 'A') {
        onClickLinkOnNavNode(e);
      }
      // 处理当用户点击某个节点文字前的展开或隐藏图标
      if(e.target.tagName === 'I') {
        onClickExpandIconOnNavNode(e);
      }
      // 处理点击新建，编辑与删除的按钮
      if(e.target.tagName === 'INPUT') {
        console.log(e.target.id);
        if (e.target.value === "新建") {
          onClickCreateNavTreeNodeButton(e.target.id);
        }
        if (e.target.value === "编辑") {
          console.log("编辑当前节点", e.target.id);
        }
        if (e.target.value === "删除") {
          onClickDeleteNavTreeNodeButton(e.target.id);
        }
      }
    }

    // 点击管理按钮
    const onClickManageNavTreeButton = ()=> {
      nav_util.enableManageMode();
      store.dispatch('generateNavTree');
    }

    // 点击返回按钮
    const onClickDisableManageNavTreeButton = ()=> {
      nav_util.disableManageMode();
      store.dispatch('generateNavTree');
    }

    // 点击新建根节点按钮
    const onClickCreateNavTreeRootNodeButton = ()=> {
      onClickCreateNavTreeNodeButton(null, true);
    }

    const onClickCreateNavTreeNodeButton = async (parentNodeId, forRootNode=false) => {
      try {
        const confirmResult = await nodeCreationDialog.value.show({
          title: '新建节点',
          forRootNode: forRootNode,
          parentNodeId: parentNodeId,
          onClickOKButton: async function (nodeTitle, nodeURL) {
            if(forRootNode) {
              return nav_util.createNavTreeNode(null, nodeTitle, nodeURL, true);
            } else {
              return nav_util.createNavTreeNode(parentNodeId, nodeTitle, nodeURL);
            }
          }
        });
        console.log('confirm dialog result:', confirmResult);
        if (confirmResult.Success) {
          // 创建成功
          await messageDialog.value.show({
            title: '节点创建成功',
            message: `节点 ${confirmResult?.Result?.id} 创建成功！`,
            success: true,
          });
          // 刷新页面
          router.go(router.currentRoute);
        } else {
          // 创建失败
          await messageDialog.value.show({
            title: '节点创建失败',
            message: confirmResult.Errors[0],
            success: false,
          })
        }
      } catch (error) {
        console.error(error);
        // 创建失败
        await messageDialog.value.show({
          title: '节点创建失败',
          message: error,
          success: false,
        })
      }
    }

    // 处理删除节点的逻辑
    const onClickDeleteNavTreeNodeButton = async (nodeId) => {
      try {
        const confirmResult = await confirmDialog.value.show({
          // 确认对话框的标题
          title: '确认删除节点',
          // 确认对话框的消息
          message: `节点 ${nodeId} 将被删除！`,
          // 点击确认按钮后执行的方法
          onClickOKButton: async function () {
            // 调用后端删除节点API
            return await nav_util.deleteNavTreeNode(nodeId);
          }
        })
        console.log('confirm dialog result:', confirmResult);
        if (confirmResult.Success) {
          // 删除成功
          await messageDialog.value.show({
            title: '节点删除成功',
            message: `节点 ${nodeId} 删除成功！`,
            success: true,
          });
          // 刷新页面
          router.go(router.currentRoute);
        } else {
          // 删除失败
          await messageDialog.value.show({
            title: '节点删除失败',
            message: confirmResult.Errors[0],
            success: false,
          })
        }
      } catch (error) {
        // 删除失败
        await messageDialog.value.show({
          title: '节点删除失败',
          message: error.response.data.Errors[0],
          success: false,
        })
      }
    }

    return {
      // 节点树的html
      finalHtml,

      // 点击节点树中任何元素的事件响应函数
      onNodeClicked,

      // 启动与关闭节点管理
      onClickManageNavTreeButton,
      onClickDisableManageNavTreeButton,
      onClickCreateNavTreeRootNodeButton,

      confirmDialog,
      messageDialog,
      nodeCreationDialog,
    }
  }
}
</script>
// 这里的css不能使用scoped局部样式, 因为我们要应用到raw html上
<style lang="scss">
.wrapper {
  // 背景图片
  background-color: #2d76c8;
  background-image: url('~@/assets/shadow_light.png'), url('~@/assets/pixels.png');
  background-position: 0 0, 0 0;
  background-repeat: repeat;
}
.main {
  display: flex;
  max-width: 1760px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: .5rem;
}
.nav_container {
  background-color: #FFF;
  border-right: 1px solid #dddddd;
}
.nav {
  font-size: .16rem;
  line-height: .26rem;
  padding: 0 .2rem 0 .2rem;
  width: 316px;
  box-sizing: border-box;
}
.nav-selected {
  background: #00a8e6 !important;
  color: #fff !important;
}
.manage_button {
  margin: .01rem 0 .01rem .05rem;
  // border-radius: .04rem;
  font-size: .16rem;
  text-align: center;
}

.content {
  flex: 1;
  background-color: #FFF;
  padding-left: .1rem;
}

</style>
