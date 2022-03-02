var FormData = require('form-data');

var form = new FormData();
form.append('my_field', 'my value');
form.append('my_field', undefined);
console.log(form);