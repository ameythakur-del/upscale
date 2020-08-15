function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
     $("myTopnav").click(function () {
        windowsize = $(window).width();

        if (windowsize < 440) {
            $(".navbar-header").css({"background-color": "#ffffff", "-webkit-box-shadow": "0px 1px 4px 0px rgba(180, 180, 180, 0.5)", "-moz-box-shadow": "0px 1px 4px 0px rgba(180,180,180, 0.5)", "box-shadow": "0px 1px 4px 0px rgba(180,180,180, 0.5)"});
        }
    });
  } else {
    x.className = "topnav";
     $("myTopnav").click(function () {
        windowsize = $(window).width();

        if (windowsize < 440) {
            $(".navbar-header").css({"background-color": "#ffffff", "-webkit-box-shadow": "0px 1px 4px 0px rgba(180, 180, 180, 0.5)", "-moz-box-shadow": "0px 1px 4px 0px rgba(180,180,180, 0.5)", "box-shadow": "0px 1px 4px 0px rgba(180,180,180, 0.5)"});
        }
    });
  }
} 