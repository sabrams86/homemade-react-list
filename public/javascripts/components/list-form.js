function ListForm() {

}

ListForm.prototype.render = function (parent) {
  var textInput = document.createElement('input');
  textInput.id = 'text';
  textInput.type = 'text';
  textInput.name = 'item';
  textInput.placeholder = 'New item...';
  var btn = document.createElement('input');
  btn.type = 'submit'
  btn.value = 'Add Item';
  btn.addEventListener('click', ListForm.prototype.submitForm);
  parent.appendChild(textInput);
  parent.appendChild(btn);
}

ListForm.prototype.submitForm = function () {
  var content = document.getElementById('text').value;
  content.value = '';
  var newItem = new ListItem(content);
  v.addItem(newItem);
  v.render();
}
