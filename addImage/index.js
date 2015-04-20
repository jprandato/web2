function addImage(image, link, likes, caption){

	var $div = $("<div>");

	var $image = $("<img>").attr("src", image);

	var $link = $("<h4>").text(link);

	var $likes =$("<h5>").text(likes);

	var $caption = $("<h3>").text(caption);

	$div.append($image).append($link).append($likes).append($caption);

	$("#container").append($div);

}


addImage("pants1.jpg",
        "https://i.imgur.com/DgdY3nH.jpg",
        432, "A drawing of me");
        
addImage("safe.png",
        "https://i.imgur.com/tJiZIyV.png",
        432, "keeping us safe");
        
addImage("download.jpg",
        "https://i.imgur.com/XaoFge0.jpg",
        543, "downloading music");
        
addImage("cheese.gif",
        "http://http://i.imgur.com/G7CCC0q.gif",
        344, "Kraft Singles");


youtube exercise

  <!DOCTYPE html>
  <html>
    <head>
      <title>People</title>
      <style>
        .video{
          float:left;
          width:200px;
          margin:10px;
          height:200px;
          overflow:hidden;
        }
      
        .video h4{
          font-size:.9em;
          font-family:helvetica;
        }
        </style>
    </head>
    <body>
      <div class='container'></div>
    
      <script src='https://code.jquery.com/jquery-2.1.3.min.js'></script>
      <script src='youtube-load.js'></script>
      <script src="https://www.googleapis.com/youtube/v3/search?part=snippet&amp;q=kittens&amp;maxResults=30&amp;key=AIzaSyAB0-bh7U4jSH9Mknwe0ke693fNg3ZaBTc&amp;callback=loadYoutube"></script>
    </body>
  
  </html>
	  
	  function addVideo(video){
  
	    var title = video.snippet.title;
	    var thumbnail = video.snippet.thumbnails.default.url;
  
	    var $div = $("<div>").addClass("video");
	    var $title = $("<h4>").text(title);
	    var $image = $("<img>").attr("src",thumbnail);
  
	    $div.append($image).append($title);
	    $(".container").append($div);
	  }

	  function loadYoutube(videosData) {
	    for(var i=0;i<videosData.items.length;i++){
	      addVideo(videosData.items[i])
	    }

  
	  }
 	  
	  
	  
	  
	  
	  