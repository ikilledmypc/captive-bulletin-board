function start(){


// $('#board').masonry()
//   .append( elem )
//   .masonry( 'appended', elem );
//   // no method is same as layout -> .masonry('layout')
//   .masonry();
   var $container = $("#board").masonry();

  for(var i=0;i<10 ; i++){
    var hRand = Math.random();
    var elem = document.createElement('div');
    var heightClass = hRand > 0.85 ? 'h4' : hRand > 0.6 ? 'h3' : hRand > 0.35 ? 'h2' : '';
    elem.className = 'item ' + heightClass;

    $container.append( elem ).masonry( 'appended', elem );
  }

}


  $( document ).ready(function() {
      start();
  });
