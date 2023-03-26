import { get } from '../utils/request';

// 从后端API与localStorage构造出节点的树结构，并返回根节点
export const getNavTree = async () => {
  // 从后端API "GET /api/nav" 获取导航栏信息
  const result = await get(`/api/nav/tree`);
  console.log('Get from /api/nav', result);

  // 从localStorage获取节点展开状态、选中与显示状态的信息
  /*  nodeStatusList的结构如下所示：
  {
    nodeId1: { 
      expanded: true, 
      shown: false, 
      selected: false
    },
    nodeId2: { 
      expanded: false, 
      shown: true, 
      selected: false
    },
    ...
  }
  */
  let nodeStatusList = {};
  if (localStorage.nodeStatusList) {
    //如果存在，将local storage中的信息读入nodeStatusList中
    nodeStatusList = JSON.parse(localStorage.nodeStatusList);
  } else { 
    //如果不存在，初始化每个节点状态到local storage中保存
    for (const node of result) {
      nodeStatusList[node.id] = {
        expanded: node.root,
        shown: node.depth <= 1,
        selected: false
      }
    }
    localStorage.nodeStatusList = JSON.stringify(nodeStatusList);
  }

  // 使用后端API的节点信息与localStorage中存放的节点信息构造出Node对象
  const nodeList = {};
  for(const node of result) {
    nodeList[node.id] = new Node(node.id, 
      node.depth, 
      node.content, 
      node.root, 
      node.parentId,
      nodeStatusList[node.id]?.shown, 
      nodeStatusList[node.id]?.expanded, 
      nodeStatusList[node.id]?.selected);
  }

  // 构造出Node对象代表的节点彼此的父子关系，并将根节点返回
  var root = null;
  for(const node of result) {
    if (!node.root) {
      if(nodeList[node.parentId]) {
        nodeList[node.parentId].addChildNode(nodeList[node.id])
      }
    }
    if(node.root) {
      root = nodeList[node.id];
    }
  }
  return root;
}

//定义一个节点的类Node
function Node(id, depth, content, isRoot, parentId, shown=false, expanded=false, selected=false) {
  this.id = id;
  this.parentId = parentId;

  // 当前节点在树中的深度
  this.depth = depth;

  // 判断当前节点是否为根节点
  this.isRoot = isRoot;

  // 当前节点的子节点的集合
  this.childNodes = [];

  this.addChildNode = function(node) {
    this.childNodes.push(node);
  }

  // 当前节点是否显示的
  this.shown = shown;
  // 当前节点是否是展开的
  this.expanded = expanded;

  // 当前节点是否是选中的
  this.selected = selected;

  // 节点附带的内容信息，这里使用超链接。用户点击此节点后，右侧应该显示对应的内容
  this.content = `<a id="${this.id}" href="http://localhost:8080/about" style="display:block" `;
  if (this.selected) {
    this.content +=  `class="nav-selected"`;
  }
  this.content += ` >` + content + `</a>`;

  // 判断当前节点是否为叶子节点
  this.isLeaf = function() {
    return this.childNodes.length === 0;
  }
  
  // 当前节点的开始div的内容，拼出其属性与style的内容
  this.getStartTag = function() {
    var startTag = `<div id="${this.id}" parendId="${this.parentId}" depth="${this.depth}" style="position:relative; display:`;

    // 默认情况下，只显示根节点与其直接子节点的内容，更深的节点隐藏起来
    if(depth > 1) {
      if (this.shown) {
        startTag += 'block';
      } else {
        startTag += 'none';
      }
    } else {
      startTag += 'block';
    }
    // 每个div都相对于其父节点的div向右边移动.05rem，显示出导航栏的层次结构
    startTag += `; margin-left:.05rem;">`;

    // 默认情况下，根节点是展开的，非叶子节点是折叠的，而叶子节点是没有展开折叠图标的。
    if(this.isRoot) {
      startTag += `<i id="${this.id}" class="icon-expanded"></i>`;
    } else {
      if(!this.isLeaf()) {
        if (this.expanded) {
          startTag += `<i  id="${this.id}" class="icon-expanded"></i>`;
        } else {
          startTag += `<i  id="${this.id}" class="icon-collapsed"></i>`;
        }
      }
    }

    return startTag;
  }

  // 当前节点的结束div
  this.endTag = `</div>`;
}

// 将nodeId指定的节点, 在localStorage中存放的shown状态更改为true 
export const show_nav_tree_node = (nodeId) => {
    set_shown_status(nodeId, true);
}

// 将nodeId指定的节点, 在localStorage中存放的shown状态更改为false 
export const unshow_nav_tree_node = (nodeId) => {
    set_shown_status(nodeId, false);
}

const set_shown_status = (nodeId, status) => {
  if (localStorage.nodeStatusList) {
    const nodeStatusList = JSON.parse(localStorage.nodeStatusList);
    if (nodeStatusList[nodeId]) {
        nodeStatusList[nodeId].shown = status;
    } else {
        console.log('No node id in local storage:', nodeId);
    }
    // 将更改的数据存放回localStorage
    localStorage.nodeStatusList = JSON.stringify(nodeStatusList);
  } else {
    console.log('No node id in local storage:', nodeId);
  }
}

// 将nodeId指定的节点, 在localStorage中存放的expended状态更改为true 
export const expand_nav_tree_node = (nodeId) => {
    set_expanded_status(nodeId, true);
}

// 将nodeId指定的节点, 在localStorage中存放的expended状态更改为false
export const collapse_nav_tree_node = (nodeId) => {
    set_expanded_status(nodeId, false);
}

const set_expanded_status = (nodeId, status) => {
  if (localStorage.nodeStatusList) {
    const nodeStatusList = JSON.parse(localStorage.nodeStatusList);
    if (nodeStatusList[nodeId]) {
        nodeStatusList[nodeId].expanded = status;
    } else {
        console.log('No node id in local storage:', nodeId);
    }
    // 将更改的数据存放回localStorage
    localStorage.nodeStatusList = JSON.stringify(nodeStatusList);
  } else {
    console.log('No node id in local storage:', nodeId);
  }
}

// 将nodeId指定的节点, 在localStorage中存放的selected状态更改为true, 并将其他节点的selected更改为false
export const select_nav_tree_node = (nodeId) => {
  if (localStorage.nodeStatusList) {
    const nodeStatusList = JSON.parse(localStorage.nodeStatusList);
    if (nodeStatusList[nodeId]) {
        // 将当前节点置为选中状态
        nodeStatusList [nodeId].selected = true;

        // 将其他节点置为非选中状态
        const nodeIds = Object.keys(nodeStatusList);
        nodeIds.forEach(nodeIdInStorage => {
            if (nodeIdInStorage != nodeId) {
                nodeStatusList[nodeIdInStorage].selected = false;
            }
        })
    } else {
        console.log('No node id in local storage:', nodeId);
    }
    // 将更改的数据存放回localStorage
    localStorage.nodeStatusList = JSON.stringify(nodeStatusList);
  } else {
    console.log('No node id in local storage:', nodeId);
  }
}