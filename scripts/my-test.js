var jsonData = [
  {
    name: "评论员",
    describe: "只要喜欢都会互动，不按兴趣决定是否看完，偶尔点「不感兴趣」",
    hobby: 14,
    ad: 2,
    promotion: 2,
    unfriendly: 1,
    polarize: 0,
    financially: 4,
    knowledge: 3,
    amusement: 18,
    info: "NA",
    id: 313,
  },
  {
    name: "挑剔派",
    describe: "只要喜欢的都互动，不按兴趣决定是否看完，都不点「不感兴趣」",
    hobby: 23,
    ad: 1,
    promotion: 0,
    unfriendly: 0,
    polarize: 0,
    financially: 3,
    knowledge: 2,
    amusement: 10,
    info: "推送的旅游信息和电视剧推荐掺杂在一起，不知道是不是因为我其他平台经常浏览相关的电视剧",
    id: 213,
  },
];
$(document).ready(function () {
  const vobox = $(".vo-box");
  const notebook = $(".notebook");
  //$("html, body").css("overflow", "hidden");
  var targetTop = $("#thisisp2").offset().top - 400;
  var targetTop2 = $("#p3").offset().top;
  console.log("Target top value:", targetTop);

  /* PLUSING BINARY BG */
  /*   function plusing() {
    var canvas = $("canvas")[0],
      ctx = canvas.getContext("2d");
    canvas.width = $(window).width();
    canvas.height = $(window).height();
    var letters =
      "A comfortable, smooth, reasonable, democratic unfreedom prevails in advanced industrial civilization, a token of technical progress. Indeed, what could be more rational than the suppression of individuality in the mechanization of socially necessary but painful performances; the concentration of individual enterprises in more effective, more productive corporations; the regulation of free competition among unequally equipped economic subjects; the curtailment of prerogatives and national sovereignties which impede the international organization of resources. That this technological order also involves a political and intellectual coordination may be a regrettable and yet promising development.";
    letters = letters.split("");
    var fontSize = 10,
      columns = canvas.width / fontSize;
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    function draw() {
      ctx.fillStyle = "rgba(249, 249, 249, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#008cff";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
    setInterval(draw, 40);
    $(window).resize(function () {
      canvas.width = $(window).width();
      canvas.height = $(window).height();
      columns = canvas.width / fontSize;
      drops = [];
      for (var i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    });
  }
  plusing(); */
  /* CURSOR */
  function cursor() {
    const cursor = $("#cursor");
    let cursorSvg = cursor.find("svg");
    $(document).mousemove(function (e) {
      gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY,
      });
      //console.log("Mouse position: ", e.clientX, e.clientY);
    });
    $(document).mousedown(function () {
      gsap.to(cursorSvg, {
        duration: 0.3,
        scale: 1.4,
        ease: "power2.out",
      });
    });
    $(document).mouseup(function () {
      gsap.to(cursorSvg, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out",
      });
    });
    gsap.to(cursor, {
      duration: 1,
      autoAlpha: 1,
    });
  }
  cursor();

  function textshadow(s) {
    $(s).addClass("text-shadow");
  }
  textshadow(".user-name");
  textshadow(".user-detail");
  textshadow(".cnt-chge-button p ");
  function boxshadow(s) {
    $(s).addClass("box-shadow");
  }
  boxshadow(".question");

  /* PART0 */

  /* TYPE MACHINE ANIMATION */
  function typeMachine() {
    const typeMachineSpeed = 40; //待会改
    function writeText(element, text, idx, callback) {
      element.text(text.slice(0, idx));
      idx++;
      if (idx <= text.length) {
        setTimeout(
          () => writeText(element, text, idx, callback),
          typeMachineSpeed
        );
      } else {
        if (callback) callback();
      }
    }
    function typemachine(elements, index, finalCallback) {
      if (index >= elements.length) {
        if (finalCallback) finalCallback();
        return;
      }
      const element = $(elements[index]);
      const text = element.text();
      element.text("");
      element.show();
      writeText(element, text, 1, () => {
        if (element.attr("id") === "prgmerin") {
          setTimeout(() => {
            $(".coder-box")
              .css("display", "block")
              .addClass(
                "animate__animated animate__fadeIn animate__fadeInCustom"
              );
          }, 0);
        }
        if (element.attr("id") === "ntbin") {
          setTimeout(() => {
            $(".notebook-box")
              .css("display", "inline-flex")
              .addClass(
                "animate__animated animate__fadeIn animate__fadeInCustom"
              );
          }, 0);
        }
        typemachine(elements, index + 1, finalCallback);
      });
    }

    const votexts = $(".vo-text");
    typemachine(votexts, 0, () => {
      part0();
    });
  }
  typeMachine();
  function part0() {
    vobox.animate({ width: "500px" }, 800);
  }
  part0();
  /* PART1 */
  function part1() {
    $(".notebook1").on("click", function () {
      let isScrolled = false;
      let ntbclick = 0;
      if ($(this).hasClass("notebook1")) {
        ntbclick++;
        if (ntbclick === 1 && !isScrolled) {
          $("html, body").animate(
            {
              scrollTop: $("#p1").offset().top - 20,
            },
            4000
          );
          setTimeout(function () {
            $("#title1")
              .css("display", "inline-flex")
              .addClass("animate__animated animate__fadeIn");
          }, 1000);
          isScrolled = true;
          var delay = 0;
          $("#chat1 .bubble").each(function (i) {
            var bubble = $(this);
            setTimeout(function () {
              bubble.css("display", "flex");
              bubble.addClass("animate__animated animate__fadeInUpBig");
            }, delay);
            delay += 800;
          });
          console.log("go to p1");
        }
      }
    });
  }
  part1();
  function user() {
    var localCount = 0;
    $(".user-list-item").each(function () {
      var selectedValue = parseInt($(this).val(), 10);
      localCount += selectedValue;
    });
    count = localCount;
    return count;
  }
  user();
  function next() {
    $("#button-next").click(function () {
      user();
      //console.log("user  " + count);
      $("#chat1 .bubble").fadeOut(1000);
      $(".p1-box").animate({ left: "0px", top: "5vh" }, 1000);
      $(".hint-boxbox").animate(
        { width: "0px", padding: "0px" },
        1000,
        function () {
          $(this).fadeOut(0);
        }
      );
      //$(".hint-boxbox").fadeOut(1000);
      //$(".hint-boxbox").animate({ width: "0px" }, 1000);
      $(".cntboxbox").animate({ opacity: 1 }, 1000);
      //$(".cntboxbox").fadeIn(1000);
      $(".user-infobox").animate(
        { height: "0px", padding: "0px" },
        1000,
        function () {
          $(this).fadeOut(0);
        }
      );
      jsonData.forEach(function (item) {
        if (item.id === count) {
          var cntboxItem = $(".cntbox-item");
          cntboxItem.empty();

          for (var i = 0; i < item.hobby; i++) {
            var delay = i * 20;
            cntboxItem.append(
              '<img src="../pic/chge/star.svg" style="animation-delay: ' +
                delay +
                'ms;" class="animated animate__bounceIn" />'
            );
          }

          for (var j = 0; j < 50 - item.hobby; j++) {
            var delay = (item.hobby + j) * 20;
            cntboxItem.append(
              '<img src="../pic/chge/basic.svg" style="animation-delay: ' +
                delay +
                'ms;" class="animated animate__bounceIn" />'
            );
          }
        }
      });
      //原来如此……
      setTimeout(function () {
        var delay = 0;
        $("#chat2 .bubble").each(function (i) {
          var bubble = $(this);
          setTimeout(function () {
            bubble.css({
              position: "absolute",
              display: "flex",
              bottom: "-183px",
              left: "185px",
            });
            bubble.addClass("animate__animated animate__fadeInUpBig");
            console.log("show bubble");
          }, delay);
          delay += 800;
        });
      }, 1000);
    });
  }
  next();

  function chgebutton() {
    $(".cnt-chge-button").hover(
      function () {
        var memoId = "#cnt-chge-memo" + this.id.slice(-1);
        $(memoId).css({
          visibility: "visible",
          height: "auto",
          opacity: 1,
        });
        $(memoId).addClass("underline"); // 在显示时添加underline类
      },
      function () {
        var memoId = "#cnt-chge-memo" + this.id.slice(-1);
        $(memoId).css({
          visibility: "hidden",
          height: "0",
          opacity: 0,
        });
        $(memoId).removeClass("underline"); // 在隐藏时移除underline类
      }
    );
  }

  chgebutton();

  /* PART2 */
  function top2() {
    $("#chat2").on("click", function () {
      $("#chat2").fadeOut(function () {
        $("html, body").animate(
          {
            scrollTop: targetTop,
          },
          4000
        );
        let delay = 0;
        $("#chat3 .bubble").each(function (i) {
          var bubble = $(this);
          setTimeout(function () {
            bubble.css("display", "flex");
            bubble.addClass("animate__animated animate__fadeInUpBig");
          }, delay);
          delay += 800;
        });
        setTimeout(function () {
          $("#title1")
            .addClass("animate__animated animate__fadeOut")
            .css("display", "none");
        }, 1000);
        setTimeout(function () {
          $(".notebook2").css("display", "flex");
          $(".notebook2").addClass(
            "animate__animated animate__fadeIn animate__fadeInCustom"
          );
        }, 1000);
      });
    });
  }
  top2();

  function ntb2() {
    $(".notebook2").click(function () {
      // 1. 对#chat3进行fadeOut动画
      $("#chat3").fadeOut(1000);

      // 2. 在1秒后显示#title2，并添加animate__fadeIn动画
      setTimeout(function () {
        $("#title2")
          .css("display", "inline-flex")
          .addClass("animate__animated animate__fadeIn");
      }, 1000);

      // 保留现有的动画逻辑
      $(".comment-boxbox").animate({ opacity: 1 }, 1000);
      //console.log("show comment");
      $(".p2-box").animate({ left: "0", top: "5vh" }, 1000);
      $("#ntb2").animate({ width: "0px", padding: "0px" }, 1000, function () {
        $("#ntb2").fadeOut(0);
      });
    });
  }

  // 调用函数!
  ntb2();

  function choose() {}
  choose();

  /* PART3 */
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

  /* AOS */
  AOS.init();
});

/*   function getuserpst(topr, leftr, whois) {
    var topget = topr.offset();
    var hintTop = topget.top;
    var hintLeft = leftr.left - whois.outerWidth() - 30;
    whois.css({
      position: "absolute",
      top: hintTop,
      left: hintLeft,
    });
  }
  getuserpst($(".user-filebox-title"),$(".user-card"),$("#hint1")) */
