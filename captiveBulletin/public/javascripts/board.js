function start(){


// $('#board').masonry()
//   .append( elem )
//   .masonry( 'appended', elem );
//   // no method is same as layout -> .masonry('layout')
//   .masonry();
   var $container = $("#board").masonry();

  for(var i=0;i<10 ; i++){

    var hRand = Math.random() *100;

    var elem = document.createElement('div');
    elem.className = 'note panel panel-default';

    var header = document.createElement('div');
    header.className = 'panel-heading';
    $(header).append('this is a title');
    $(elem).append(header);

    var body = document.createElement('div');
    body.className = 'panel-body';
    $(elem).append(body);

    for(var word =0; word <hRand; word++){
      $(body).append(' bla ');
    }
    $container.append( elem ).masonry( 'appended', elem ).masonry();
    //$container.masonry( 'addItems', elem );
  }

}


  $( document ).ready(function() {
      start();
  });
