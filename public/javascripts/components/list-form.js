function ListForm() {

}

ListForm.prototype.render = function (parent) {
  var textInput = document.createElement('input');
  textInput.id = 'text';
  textInput.type = 'text';
  textInput.name = 'item';
  textInput.placeholder = 'New item...';
  var btn = document.createElement('button');
  btn.innerHTML = 'Add Item';
  btn.addEventListener('click', ListForm.prototype.submitForm);
  parent.appendChild(textInput);
  parent.appendChild(btn);
}

ListForm.prototype.submitForm = function () {
  var content = document.getElementById('text').value;
  var newItem = new ListItem(content);
  newItem.render(document.getElementsByTagName('ul')[0]);
}
