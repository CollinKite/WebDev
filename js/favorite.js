console.log("Ah so you've found my Javascript huh");
$("header").append("<div class='glitch-window'></div>");
//fill div with clone of real header
$( "h1.glitched" ).clone().appendTo( ".glitch-window" );
$('#youtube').each(function() {
    var link = $(this).html();
    $(this).contents().wrap('<a href="https://youtube.com"></a>');
  });