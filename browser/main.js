var form = document.getElementById('test-form');
var button = document.querySelector('paper-button');

console.log(form, button);

button.addEventListener('click', function(ev) {
  form.submit();
});

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  console.log(ev.target.elements);
});

form.addEventListener('input', function(ev) {
  ev.target.validate();
});

form.addEventListener('iron-form-submit', function(ev) {
  ev.preventDefault();
  console.log(arguments);
});

console.log("bla");
