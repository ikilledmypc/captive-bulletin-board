function start(){
  var $container = $("#board").masonry();



  loadPosts();

}

function loadPosts(){

  $.getJSON("/posts", function(result){
      $.each(result,function(i,v){
        addPost(v)
      });
      $("#loadingPrompt").prop("hidden",true);
  });

}

function addPost(v){
  var $container = $("#board").masonry();
  var elem = document.createElement('div');
  elem.className = 'note panel panel-default';

  var header = document.createElement('div');
  header.className = 'panel-heading';
  $(header).append(v.title);
  $(elem).append(header);

  var body = document.createElement('div');
  body.className = 'panel-body';
  var content = document.createElement("p");
  $(content).append(v.content);
  $(body).append(content);
  $(elem).append(body);
  $container.append( elem ).masonry('appended', elem ).masonry();
  $('#board').masonry("reloadItems");
  $('#board').masonry();

}


  $( document ).ready(function() {
      start();
  });
