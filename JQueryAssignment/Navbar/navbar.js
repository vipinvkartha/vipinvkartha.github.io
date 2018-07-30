$(document).ready(function () {
  let win_width = $(window).width();
  let tog = true;
  $(".icon").hide();
  $("a").hover(function () {
    $(this).css("background-color", "#4CAF50");
    $(this).css("color", "black");
  }, function () {
    $(this).css("background-color", "#785BE0");
    $(this).css("color", "#B0B17E");
  });
  $(window).resize(function () {
    win_width = $(this).width();
    //console.log(win_width);
    if (win_width <= 600) {

      $("a:not(:first-child):not(:last-child)").hide();
      $(".icon").show();
      $("#myicon").unbind().click(function () {
        $("#mynav").addClass("responsive");
        //console.log("toggle1");
        $("a:not(:first-child):not(:last-child)").toggle();
        //console.log("toggle2");
      });

    }
    else {
      $("#mynav").removeClass("responsive");
      $(".icon").hide();
      $("a:not(:first-child):not(:last-child)").show();
     
      tog = true;
    }

  });
});