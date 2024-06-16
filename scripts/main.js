$document.ready(function () {
  var targetTop = $("#thisisp2").offset().top - 400;
  var targetTop2 = $("#p3").offset().top;
  console.log("Target top value:", targetTop);
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
      console.log("Q1 clicked");
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
      $("#chat4 .bubble").fadeOut(1000);
    });
  }
  nxtbtn2();

  function loader() {
    // 动态加载 CSS 文件
    function loadCSS(file, id) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = file;
      link.id = id;
      document.head.appendChild(link);
    }

    // 动态加载 JS 文件
    function loadJS(file, id) {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = file;
      script.id = id;
      document.body.appendChild(script);
    }

    // 在特定的 div 中加载特定的 CSS 和 JS 文件
    loadCSS("style/my-test.css", "my-test-css");
    loadJS("scripts/my-test.js", "my-test-js");

    // 移除不需要的CSS和JS文件
    $("#nxt-button2").click(function () {
      $("#my-test-css").remove();
      $("#my-test-js").remove();

      loadCSS("style/index-part3.css", "index-part3-css");
      loadJS("scripts/index-part3.js", "index-part3-js");
    });

    $("#container4-1").mouseover(function () {
      $("#my-test-css").remove();
      $("#my-test-js").remove();

      $("#index-part3-css").remove();
      $("#index-part-js").remove();

      loadCSS("style/index-part4.css", "index-part4-css");
      loadJS("scripts/index-part4.js", "index-part4-js");
    });
  }
  loader();
});
