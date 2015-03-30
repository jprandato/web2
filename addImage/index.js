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
