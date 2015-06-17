

$( document ).ready(function() {
    console.log( "ready!" );
});

// Show menu

$('#list').click (function() {
   // alert("click!!!");
   $( '#menu' ).removeClass('hidden');
   $( '#menu' ).addClass('showMenu');
   $( '.articles' ).addClass('articlesShift');
});

// Hide menu on list click

$('#menu a').click (function() {
   // alert("click!!!");
   $( '#menu' ).addClass('hidden');
   $( '#menu' ).removeClass('showMenu');
   $( '.articles' ).removeClass('articlesShift');
});

