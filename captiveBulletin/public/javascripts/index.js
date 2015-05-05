$(document).ready( function(){
  $("#save-post-button").click(function(){
    var data = { "title": $('#title').val(), "content" : $('#post-content').val() };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/posts",
      data: data,
      dataType: "text/json"
    });

  });

});
