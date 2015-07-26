function Node(parent, tagName, depth, nodeId) {
  this.nodeId = nodeId || null;
  this.tagName = tagName || null;
  this.content = '';

  this.depth = depth || parent.depth + 1;
  this.parent = parent || null;
  this.nextSibling = null;
  this.children = [];

  if (this.parent){
    parent.children.push(this);
  }
}

var addChild = function (node, ) {
// should also update parent as side affect

}

var domTree = function (node) {
  ...
  ...
  domTree()
  //recursively call itself?
}




var traverseDepth = function (node, cb) {
  if(cb){
    cb(node);
  }
  node.children.forEach(function (child) {
    traverse(child, cb);
  })
}

var traverseBreadth = function (node, cb) {
  var q = [node];
  while(q.length > 0){
    node = q.shift();
    if(cb){
      cb(node);
    }
    node.children.forEach(function (child) {
      q.push(child);
    });
  }
}

var traverseBreadthRecursive = function (set, cb) {
  if(typeof(set) != 'array'){
    set = [set];
  }
  var children = [];
  set.forEach(function (node) {
    node.children.forEach(function (child) {
      children.push(child);
    });
    if (cb){
      cb(node);
    }
  });
  traverse(children, cb);
}

var compareTrees = function (dom, virtualDom) {
  if (typeof(dom) != 'array'){
    dom = [dom];
  }
  if (typeof(virtualDom) != 'array'){
    virtualDom = [virtualDom];
  }
  var domChildren = [];
  var virtualChildren = [];
  dom.forEach(function (node) {
    node.children.forEach(function (child) {
      domChildren.push(child);
    });
  });
  virtualDom.forEach(function (node) {
    node.children.forEach(function (child) {
      virtualChildren.push(child);
    });
  });
  for(var i = 0; i < domChildren.length; i++){
    if(domChildren !== virtualChildren) {

    }
  }
  traverse(domChildren, virtualChildren);
}

Node.prototype.searchByTag = function (tagName) {
  return this.children.map(function (e) {
    return e.tagName.concat(e.children.searchByTag(tagName));
  })
}

module.exports = Node;


/*
node = new Node()

Set upon creation:
depth = parent.depth + 1;
parent = parent
tagName = elementType

nodeId = ?

add to parent upon creation
parent.children.push(this.node);

*/
