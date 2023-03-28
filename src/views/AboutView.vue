<template>
  <div>
    <div>
      <input type="button" value="管理" @click="enableManageNavTreeMode">
      <input type="button" value="返回" @click="disableManageNavTreeMode">
    </div>
    <div id="nav" class="nav" v-html="finalHtml" @click="onNodeClicked"></div>
  </div>

  <ConfirmDialog v-if="showConfirmDialog" 
    confirmDialogTitle="确认删除节点" 
    confirmDialogDesc="节点将被永久删除" 
    :confirmDialogInputValue="inputValueForConfirmDialog" 
    :handleConfirm="handleConfirm" 
    :handleDismissConfirm="handleDismissConfirm"
  />

  <div v-if="showMessageDialog" class="mask">
    <div class="mask__content">
        <div class="mask__content__title">完成节点删除</div>
        <p class="mask__content__desc">节点{{ nodeIdForMessage }}成功被删除</p>
        <div class="mask__content__btns">
            <div class="mask__content__btns__btn mask__content__btns__btn--last" @click="handleDismissMessageDialog">确认</div>
        </div>
    </div>
  </div>
  <Toast v-if="show" :message="toastMessage" />
</template>

<script>
import { useStore } from 'vuex';
import router from "@/router/index.js";
import { computed, onMounted, ref } from 'vue';
import * as nav_util from '../utils/nav';
import ToastComponent, { useToastEffect } from '../components/ToastComponent.vue'
import ConfirmDialogComponent, { useConfirmDialogEffect } from '../components/ConfirmDialogComponent.vue'


// 控制是否显示确认对话框
const useMessageDialogEffect = () => {
    const showMessageDialog = ref(false);
    const nodeIdForMessage = ref('');

    const handleShowMessageDialog = (selectNodeId) => {
      nodeIdForMessage.value = selectNodeId;
      showMessageDialog.value = true;
    }

    const handleDismissMessageDialog = () => {
      showMessageDialog.value = false;
      router.go(router.currentRoute);
    }

    return {
      nodeIdForMessage,
      showMessageDialog,
      handleShowMessageDialog,
      handleDismissMessageDialog
    }
}

export default {
  name: 'AboutView',
  components: {
    Toast: ToastComponent,
    ConfirmDialog: ConfirmDialogComponent
  },

  setup () {
    const store = useStore();
    const { show, toastMessage } = useToastEffect();
    let { inputValueForConfirmDialog, showConfirmDialog, handleShowDialog, handleDismissConfirmDialog } = useConfirmDialogEffect();
    const { nodeIdForMessage, showMessageDialog, handleShowMessageDialog, handleDismissMessageDialog } = useMessageDialogEffect();

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
          handleShowDialog(e.target.id);
        }
      }
    }

    const handleConfirm = (nodeIdToBeDeleted) => {
      nav_util.deleteNavTreeNode(nodeIdToBeDeleted).then((i)=> {
        console.log("节点成功删除", i);
        handleDismissConfirm();
        handleShowMessageDialog(nodeIdToBeDeleted);
      });
    }

    const handleDismissConfirm = () => {
      console.log('handleDismissConfirm');
      handleDismissConfirmDialog();
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
      finalHtml,
      onNodeClicked,
      enableManageNavTreeMode,
      disableManageNavTreeMode,

      show,
      toastMessage,

      inputValueForConfirmDialog,
      showConfirmDialog,
      handleShowDialog,
      handleConfirm,
      handleDismissConfirm,

      nodeIdForMessage,
      showMessageDialog,
      handleShowMessageDialog,
      handleDismissMessageDialog
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
