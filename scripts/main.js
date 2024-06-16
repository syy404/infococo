$document.ready(function () {
  var targetTop = $("#thisisp2").offset().top - 400;
  var targetTop2 = $("#p3").offset().top;
  console.log("Target top value:", targetTop);
});
/* to PART3 */
function top3() {
  let q1Clicked = false,
    q2Clicked = false,
    q3Clicked = false;

  $("#q1").click(function () {
    $(this).css("color", "#A31616");
    $(".phone-text").addClass("animate__animated animate__flash");
    q1Clicked = true;
    checkAllClicked();
  });

  $("#q2").click(function () {
    $(this).css("color", "#1165B1");
    $(".blue").css("background-color", "#E0EBFF");
    q2Clicked = true;
    checkAllClicked();
  });

  $("#q3").click(function () {
    $(this).css("color", "#C08E0C");
    $(".yellow").css("background-color", "#FFF6D6");
    q3Clicked = true;
    checkAllClicked();
  });

  function checkAllClicked() {
    if (q1Clicked && q2Clicked && q3Clicked) {
      setTimeout(function () {
        $(".question").addClass("animate__animated animate__bounce");
      }, 1000);
      // Show bubbles with animation
      let delay = 0;
      $("#chat4 .bubble").each(function (i) {
        var bubble = $(this);
        setTimeout(function () {
          bubble.css("display", "flex");
          bubble.addClass("animate__animated animate__fadeInUpBig");
        }, delay);
        delay += 800;
      });
      $("#nxt-button2").addClass("hvr-pulse");
    }
  }
}
top3();
function nxtbtn2() {
  $("#nxt-button2").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: targetTop2,
      },
      4000
    );
  });
}
nxtbtn2();

