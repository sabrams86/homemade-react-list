function List(){
  this.items = [];
  this.domModel = new DomModel(this);
}

List.prototype.render = function () {
  console.log(this.domModel);
  if (document.getElementById('list')){
    var div = document.getElementById('list')
    div.innerHTML = '';
  } else {
    var div = document.createElement('div');
  }
  div.id = 'list'
  var ul = document.createElement('ul');
  this.items.forEach(function (e) {
    e.render(ul);
  });
  var form = new ListForm(div)
  form.render(div);
  div.appendChild(ul);
  document.body.appendChild(div);
}

List.prototype.addItem = function (item) {
  this.items.push(item);
}


var v = new List();
v.render();
