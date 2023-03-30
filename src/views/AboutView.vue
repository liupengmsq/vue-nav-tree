<template>
  <div class="wrapper">
    <div>
      <input type="button" value="管理" @click="enableManageNavTreeMode">
      <input type="button" value="返回" @click="disableManageNavTreeMode">
    </div>
    <div class="main">
      <div id="nav" class="nav" v-html="finalHtml" @click="onNodeClicked"></div>
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
      :handleConfirm="handleConfirm" 
      :handleDismissConfirm="handleDismissConfirm"
    />
  </transition>

  <transition name="fade">
    <MessageDialog v-if="showMessageDialog" 
      :messageDialogTitle="messageDialogTitle"
      :messageDialogDesc="messageDialogDesc"
      :messageDialogSucess="messageDialogSucess"
      :handleDismissMessage="handleDismissMessage"
    />
  </transition>

  <!-- <transition name="fade">
    <div v-if="showMessageDialog" class="mask">
      <div class="mask__content">
        <div class="iconfont mask__content__icon--fail">&#xe63f;</div>
        <div class="mask__content__title">完成节点删除</div>
        <p class="mask__content__desc">节点{{ nodeIdForMessage }}成功被删除</p>
        <div class="mask__content__btns">
            <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="handleDismissMessageDialog">确认</div>
        </div>
      </div>
    </div>
  </transition> -->
</template>

<script>
import { useStore } from 'vuex';
import router from "@/router/index.js";
import { computed, onMounted, ref } from 'vue';
import * as nav_util from '../utils/nav';
import ConfirmDialogComponent, { useConfirmDialogEffect } from '../components/ConfirmDialogComponent.vue'
import MessageDialogComponent, { useMessageDialogEffect } from '../components/MessageDialogComponent.vue'

export default {
  name: 'AboutView',
  components: {
    ConfirmDialog: ConfirmDialogComponent,
    MessageDialog: MessageDialogComponent
  },

  setup () {
    const store = useStore();

    // 删除节点的确认对话框
    const confirmDeleteNodeDesc = ref('');
    const { inputValueForConfirmDialog, showConfirmDialog, handleShowDialog, handleDismissConfirmDialog } = useConfirmDialogEffect();

    // 删除节点后显示结果的消息框
    const messageDialogTitle = ref('');
    const messageDialogDesc = ref('');
    const messageDialogSucess = ref(true);
    const { showMessageDialog, handleShowMessageDialog, handleDismissMessageDialog } = useMessageDialogEffect();


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
          confirmDeleteNodeDesc.value = "节点 " + e.target.id + " 将被删除！！";
          handleShowDialog(e.target.id);
        }
      }
    }

    const handleConfirm = (nodeIdToBeDeleted) => {
      nav_util.deleteNavTreeNode(nodeIdToBeDeleted).then((response)=> {
        if (response.Success) {
          console.log("节点成功删除", response);
          handleDismissConfirm();

          messageDialogTitle.value = "完成节点删除";
          messageDialogDesc.value = `节点 ${nodeIdToBeDeleted} 被成功删除`;
          messageDialogSucess.value = true;
          handleShowMessageDialog();
        } else {
          handleDismissConfirm();
          messageDialogTitle.value = "节点删除失败";
          messageDialogDesc.value = response.Errors;
          messageDialogSucess.value = false;
          handleShowMessageDialog();
        }
      }).catch((error) => {
        handleDismissConfirm();
        messageDialogTitle.value = "节点删除失败";
        messageDialogDesc.value = error.Errors[0];
        messageDialogSucess.value = false;
        handleShowMessageDialog();
      });
    }

    const handleDismissConfirm = () => {
      console.log('handleDismissConfirm');
      handleDismissConfirmDialog();
    }

    const handleDismissMessage = () => {
      console.log('handleDismissMessage');
      handleDismissMessageDialog();
      router.go(router.currentRoute);
    }

    const enableManageNavTreeMode = ()=> {
      console.log('Enable manange mode');
      nav_util.enableManageMode();
      store.dispatch('generateNavTree');
    }

    const disableManageNavTreeMode = ()=> {
      console.log('Disable manange mode');
      nav_util.disableManageMode();
      store.dispatch('generateNavTree');
    }

    return {
      // 节点树的html
      finalHtml,

      // 点击节点树中任何元素的事件响应函数
      onNodeClicked,

      // 启动与关闭节点管理
      enableManageNavTreeMode,
      disableManageNavTreeMode,

      // 删除节点的确认对话框
      confirmDeleteNodeDesc,
      inputValueForConfirmDialog,
      showConfirmDialog,
      handleShowDialog,
      handleConfirm,
      handleDismissConfirm,

      // 删除节点后的结果消息框
      messageDialogSucess,
      messageDialogTitle,
      messageDialogDesc,
      showMessageDialog,
      handleShowMessageDialog,
      handleDismissMessage,
    }
  }
}
</script>
// 这里的css不能使用scoped局部样式, 因为我们要应用到raw html上
<style lang="scss">
// .icon_font_color {
//   color: #00a8e6;
// }
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
.nav {
  font-size: .16rem;
  line-height: .26rem;
  padding: 0 .2rem 0 .2rem;
  background-color: #FFF;
  border-right: 1px solid #dddddd;
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
  padding-left: .05rem;
}

</style>
