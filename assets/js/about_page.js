
var x = require('../../public/about.html');

function emptyHtml(e){
  e.preventDefault();

  $('#view').empty();

   if ($(this).attr('id') === 'about'){
     $('#view').html(x);
   }

};

$('#about').on('click', emptyHtml)
