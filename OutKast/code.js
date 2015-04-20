console.log("shit")

$(".scrolling").scrollFlight();
$(".left").on("arrived",function(e) {
  $(this).addClass("appear");
});

$(".scrolling").scrollFlight();
$(".left").on("departing",function(e) {
  $(this).removeClass("appear");
});

$(".scrolling").scrollFlight();
$(".left").on("rearriving",function(e) {
  $(this).addClass("appear");
});

$(".scrolling").scrollFlight();
$(".left").on("redeparting",function(e) {
  $(this).removeClass("appear");
});

$(".scrolling").scrollFlight();
$(".type").on("arriving",function(e) {
  $(this).addClass("appear");
});

$(".big").on("update",function(e,pos) {
    $(".type").each(function() {
      var amt = pos * $(this).data("rate");
      $(this).css({ transform: "translate(0%," + -amt + "px)" });
    });
});

$(".big").on("update",function(e,pos) {
    $(".type3").each(function() {
      var amt = pos * $(this).data("rate");
      $(this).css({ transform: "translate(0%," + -amt + "px)" });
    });
});

$(".scrolling").scrollFlight();
$(".centered").on("arrived",function(e) {
  $(this).addClass("moveDown");
});

$(".scrolling").scrollFlight();
$(".lefty").on("arrived",function(e) {
  $(this).removeClass("third");
  $(this).addClass("split");
});

$(".scrolling").scrollFlight();
$(".lefty").on("arrived",function(e) {
  $(this).removeClass("second");
  $(this).addClass("split");
});

$(".scrolling").scrollFlight();
$(".lefty").on("departing",function(e) {
  $(this).removeClass("split");
});

$(".scrolling").scrollFlight();
$(".lefty").on("departing",function(e) {
  $(this).removeClass("split");
});

$(".new").on("update",function(e,pos) {
    $(".type").each(function() {
      var amt = pos * $(this).data("rate");
      $(this).css({ transform: "translate(0%," + -amt + "px)" });
    });
});


$(".scrolling").scrollFlight();
$(".centered").on("departing",function(e) {
  $(this).removeClass("moveDown");
});

$(".scrolling").scrollFlight();
$(".centered").on("rearriving",function(e) {
  $(this).addClass("moveDown");
});


