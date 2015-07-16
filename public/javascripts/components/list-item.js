function ListItem(content) {
  this.content = content;
}

ListItem.prototype.render = function (parent) {
  li = document.createElement('li');
  li.innerHTML = this.content;
  parent.appendChild(li);
}
