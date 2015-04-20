$(".scrolling").scrollFlight();

// Add a class of on-page when #container1 arrives
$("page h1").on("arrived",function(e) {
  $(this).addClass("appear");
});