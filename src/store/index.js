import { createStore } from 'vuex';

//定义一个节点的类Node
function Node(id, depth, content) {
  this.id = id;
  this.depth = depth;
  this.content = `<a href=# style="display:block">` + content + `</a>`;
  this.childNodes = [];
  this.addChildNode = function(node) {
    this.childNodes.push(node);
  }

  this.isRoot = function() {
    return this.id === 0;
  }
  this.isLeaf = function() {
    return this.childNodes.length === 0;
  }
  
  this.getStartTag = function() {
    var startTag = `<div id="${this.id}"`;
    if (!this.isLeaf()) {
      if(this.isRoot()) {
        startTag += ` expand="true"`;
      } else {
        startTag += ` expand="false"`;
      }
    }
    startTag += ` style="position:relative; display:`;

    if(depth > 1) {
      startTag += 'none';
    } else {
      startTag += 'block';
    }
    startTag += `; margin-left:.05rem;">`;
    if(this.isRoot()) {
      startTag += `<i class="icon-nodeexpand"></i>`;
    } else {
      if(!this.isLeaf()) {
        startTag += `<i class="icon-expand"></i>`;
      }
    }

    return startTag;
  }
  this.endTag = `</div>`;
}

export default createStore({
  state: {
    // 代表节点的树根
    rootNode: null,
    // 代表递归调用的当前节点
    currentNode: null,
    // 代表以上面的rootNode为根的树的html字符串
    finalRawHtml: ''
  },
  getters: {
    getFinalRawHTML (state) {
      return state.finalRawHtml;
    },
  },
  mutations: {
    // 生成新的节点树
    generateTree(state) {
      const root = new Node(0, 0, '这里是根节点');
      const node1 = new Node(1, 1, '这里是节点1');
      const node2 = new Node(2, 1, '这里是节点2');
      const node3 = new Node(3, 2, '节点3');
      const node4 = new Node(4, 3, '哈哈哈测试节点4');
      const node5 = new Node(5, 3, '节点5');
      const node6 = new Node(6, 3, '这里是节点6');
      const node7 = new Node(7, 4, '节点7');
      node2.addChildNode(node3)
      root.addChildNode(node1);
      root.addChildNode(node2);
      node3.addChildNode(node4);
      node3.addChildNode(node5);
      node3.addChildNode(node6);
      node6.addChildNode(node7);

      state.rootNode = root;
      state.currentNode = root;
      state.finalRawHtml = '';
    },
    // 递归调用此方法，打印以当前state.currentNode为根节点的树
    printNode(state) {
      if(!state.currentNode) {
        return;
      }
      state.finalRawHtml += state.currentNode.getStartTag();
      state.finalRawHtml += state.currentNode.content;
      for(const child of state.currentNode.childNodes) {
        state.currentNode = child;
        this.commit('printNode') //递归调用当前的printNode(state)方法，打印以当前state.currentNode = child为根节点子树
      }
      state.finalRawHtml += state.currentNode.endTag;
    },
  },
  actions: {
    printAllNodes ({ commit }, payload) {
      commit('generateTree', payload);
      commit('printNode', payload);
    },
  },
  modules: {
  }
})
