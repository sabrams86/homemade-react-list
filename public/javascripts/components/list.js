function List(){
  this.items = [];
}

List.prototype.render = function () {
  var div = document.createElement('div');
  var ul = document.createElement('ul');
  this.items.forEach(function (e) {
    e.render(ul);
  });
  var form = new ListForm(div)
  div.appendChild(ul);
  form.render(div);
  document.body.appendChild(div);
}

List.prototype.addItem = function (item) {
  this.items.push(item);
}
var v = new List();
var li1 = new ListItem('Hey');
var li2 = new ListItem('WORKING');
v.items.push(li1);
v.items.push(li2);
v.render();
