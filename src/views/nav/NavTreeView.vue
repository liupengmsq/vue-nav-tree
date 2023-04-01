<template>
  <div class="wrapper">
    <div class="main">
      <div class="nav_container">
        <input type="button" value="管理" @click="onClickManageNavTreeButton">
        <input type="button" value="返回" @click="onClickDisableManageNavTreeButton">
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
  <transition name="fade">
    <ConfirmDialog v-if="showConfirmDialog" 
      confirmDialogTitle="确认删除节点" 
      :confirmDialogDesc="confirmDeleteNodeDesc" 
      :confirmDialogInputValue="inputValueForConfirmDialog" 
      :onClickConfirmButtonInConfirmDialog="onClickConfirmButtonInConfirmDialog" 
      :onClickDismissButtonInConfirmDialog="onClickDismissButtonInConfirmDialog"
    />
  </transition>

  <transition name="fade">
    <MessageDialog v-if="showMessageDialog" 
      :messageDialogTitle="messageDialogInfo.title"
      :messageDialogDesc="messageDialogInfo.description"
      :messageDialogSucess="messageDialogInfo.success"
      :onClickOKButtonInMessageDialog="dismissMessageDialog"
    />
  </transition>

  <NavNodeCreationDialog v-if="true" />
</template>

<script>
import { useStore } from 'vuex';
import router from "@/router/index.js";
import { computed, onMounted, ref } from 'vue';
import * as nav_util from '../../utils/nav';
import ConfirmDialogComponent, { useConfirmDialogEffect } from '../../components/ConfirmDialogComponent.vue'
import MessageDialogComponent, { useMessageDialogEffect } from '../../components/MessageDialogComponent.vue'
import NavNodeCreationDialog from './NavNodeCreationDialog.vue'

export default {
  name: 'AboutView',
  components: {
    ConfirmDialog: ConfirmDialogComponent,
    MessageDialog: MessageDialogComponent,
    NavNodeCreationDialog: NavNodeCreationDialog
  },

  setup () {
    const store = useStore();

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

    // 删除节点的确认对话框
    const confirmDeleteNodeDesc = ref('');
    const { inputValueForConfirmDialog, showConfirmDialog, handleShowConfirmDialog, handleDismissConfirmDialog } = useConfirmDialogEffect();

    // 删除节点后显示结果的消息框
    const messageDialogInfo = {
      title: '',
      description: '',
      success: true
    }
    const { showMessageDialog, handleShowMessageDialog, handleDismissMessageDialog } = useMessageDialogEffect();

    const showDeleteNodeSuccessMessageDialog = (nodeIdToBeDeleted) => {
        messageDialogInfo.title= "完成节点删除";
        messageDialogInfo.description = `节点 ${nodeIdToBeDeleted} 被成功删除`;
        messageDialogInfo.success = true;
        handleShowMessageDialog();
    }

    const showDeleteNodeFailMessageDialog = (errorMessage) => {
      messageDialogInfo.title = "节点删除失败";
      messageDialogInfo.description = errorMessage;
      messageDialogInfo.success = false;
      handleShowMessageDialog();
    }

    // 节点树的HTML
    const finalHtml = computed(() => store.getters.getFinalRawHTML );

    // 初始化左侧导航栏
    onMounted(() => {
      store.dispatch('generateNavTree', { manageMode: false });
    });

    // 通过在vue的raw html的父节点上监控事件触发，来实现raw html的事件处理
    const onNodeClicked = (e) => {
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
          console.log("新建子节点", e.target.value);
        }
        if (e.target.value === "编辑") {
          console.log("编辑当前节点", e.target.value);
        }
        if (e.target.value === "删除") {
          confirmDeleteNodeDesc.value = "节点 " + e.target.id + " 将被删除！！";
          handleShowConfirmDialog(e.target.id);
        }
      }
    }

    // 点击确认删除节点按钮
    const onClickConfirmButtonInConfirmDialog = (nodeIdToBeDeleted) => {
      // 调用后端删除节点API
      nav_util.deleteNavTreeNode(nodeIdToBeDeleted).then((response)=> {
        if (response.Success) {
          // 删除成功
          onClickDismissButtonInConfirmDialog();
          showDeleteNodeSuccessMessageDialog(nodeIdToBeDeleted);
        } else { 
          //删除失败
          onClickDismissButtonInConfirmDialog();
          showDeleteNodeFailMessageDialog(response.Errors);
        }
      }).catch((error) => {
        //删除失败
        onClickDismissButtonInConfirmDialog();
        showDeleteNodeFailMessageDialog(error.Errors[0]);
      });
    }

    // 点击取消删除节点按钮
    const onClickDismissButtonInConfirmDialog = () => {
      handleDismissConfirmDialog();
    }

    // 点击消息框的确认按钮
    const dismissMessageDialog = () => {
      handleDismissMessageDialog();
      router.go(router.currentRoute);
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

    return {
      // 节点树的html
      finalHtml,

      // 点击节点树中任何元素的事件响应函数
      onNodeClicked,

      // 启动与关闭节点管理
      onClickManageNavTreeButton,
      onClickDisableManageNavTreeButton,

      // 删除节点的确认对话框
      confirmDeleteNodeDesc,
      inputValueForConfirmDialog,
      showConfirmDialog,
      handleShowConfirmDialog,
      onClickConfirmButtonInConfirmDialog,
      onClickDismissButtonInConfirmDialog,

      // 删除节点后的结果消息框
      messageDialogInfo,
      showMessageDialog,
      handleShowMessageDialog,
      dismissMessageDialog,
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
  border-radius: .04rem;
  font-size: .16rem;
  text-align: center;
}

.content {
  flex: 1;
  background-color: #FFF;
  padding-left: .1rem;
}

</style>
