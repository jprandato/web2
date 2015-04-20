function addVideo(video){
  
  var title = video.snippet.title;
  var thumbnail = video.snippet.thumbnails.default.url;
  
  var $div = $("<div>").addClass("video");
  var $title = $("<h4>").text(title);
  var $image = $("<img>").attr("src",thumbnail);
  
  $div.append($image).append($title);
  $(".container").append($div);
}



function showModal(video) {
   $(".modal").empty();
   
   var title = video.snippet.title;
   var description = video.snippet.description;
  
   var $div = $("<div>").addClass("video");
   var $title = $("<h4>").text(title);
   var $description = $("<p>").text(description);
   var $iframe = $("<iframe>").attr("src","htt"thumbnail"");
   
   $div.append($title).append($description);
   $(".modal").append($div);
   
   $(".overlay").show();
   $(".modal").show();

}

function hideModal() {
  $(".overlay").hide();
  $(".modal").hide();
}

function loadYoutube(videos){

showModal(videos.items[0]);

}