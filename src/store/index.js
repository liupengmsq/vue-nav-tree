import { createStore } from 'vuex';

//定义一个节点的类Node
function Node(id, depth, content) {
  this.id = id;
  // 当前节点在树中的深度
  this.depth = depth;
  // 节点附带的内容信息，这里使用超链接。用户点击此节点后，右侧应该显示对应的内容
  this.content = `<a href=# style="display:block">` + content + `</a>`;
  // 当前节点的子节点的集合
  this.childNodes = [];

  this.addChildNode = function(node) {
    this.childNodes.push(node);
  }

  // 判断当前节点是否为根节点
  this.isRoot = function() {
    return this.id === 0;
  }

  // 判断当前节点是否为叶子节点
  this.isLeaf = function() {
    return this.childNodes.length === 0;
  }
  
  // 当前节点的开始div的内容，拼出其属性与style的内容
  this.getStartTag = function() {
    var startTag = `<div id="${this.id}" style="position:relative; display:`;

    // 默认情况下，之显示根节点，与其直接子节点的内容，更深的节点隐藏起来
    if(depth > 1) {
      startTag += 'none';
    } else {
      startTag += 'block';
    }
    // 每个div都相对于其父节点的div向右边移动.05rem，显示出导航栏的层次结构
    startTag += `; margin-left:.05rem;">`;

    // 默认情况下，根节点是展开的，非叶子节点是折叠的，而叶子节点是没有展开折叠图标的。
    if(this.isRoot()) {
      startTag += `<i class="icon-nodeexpand"></i>`;
    } else {
      if(!this.isLeaf()) {
        startTag += `<i class="icon-expand"></i>`;
      }
    }

    return startTag;
  }

  // 当前节点的结束div
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
    // 生成新的节点树（测试用方法，需改成从后端API读取树的信息，然后在前端构造出一棵树）
    generateObjectTree(state) {
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

      // 用state全局对象保存树的根节点
      state.rootNode = root;
      // 将当前节点设置为树的根节点，以此为开始轮询整个树
      state.currentNode = root;
      // 轮询整个树，使用finalRawHtml将树的HMTL构造出来
      state.finalRawHtml = '';
    },
    // 递归调用此方法，打印以当前state.currentNode为根节点的树
    generateHTMLTree(state) {
      // 当前节点是空，说明当前节点是叶子节点，不用继续处理了。
      if(!state.currentNode) {
        return;
      }

      // 递归调用当前方法，拼出整个树对应的HTML： 每个树节点的开始HTML tag + 中间是递归的子节点的HTML tag + 结束HTML tag
      state.finalRawHtml += state.currentNode.getStartTag();
      state.finalRawHtml += state.currentNode.content;
      for(const child of state.currentNode.childNodes) {
        state.currentNode = child;
        this.commit('generateHTMLTree') //递归调用当前的generateHTMLTree(state)方法，打印以当前child为根节点的子树
      }
      state.finalRawHtml += state.currentNode.endTag;
    },
  },
  actions: {
    generateNavTree ({ commit }, payload) {
      commit('generateObjectTree', payload);
      commit('generateHTMLTree', payload);
    },
  },
  modules: {
  }
})
