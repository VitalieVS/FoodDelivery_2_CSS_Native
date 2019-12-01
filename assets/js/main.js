$(document).ready(function(){

    $( ".content-item" ).click(function() {
        alert( "Handler for .click() called." );
    });

    $( function() {
        $( document ).tooltip();
    } );

    $('.item-price').click(function () {
      alert($(this).attr("data-value")*1);
    });

});
