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
  $("html, body").css("overflow", "hidden");
  let ntbclick = 0;
  let isScrolled = false;
  /* PLUSING BINARY BG */
  function plusing() {
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
  plusing();

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

  /* PART0 */
  function part0() {
    vobox.animate({ width: "500px" }, 800);
  }
  /* TYPE MACHINE ANIMATION */
  function typeMachine() {
    const typeMachineSpeed = 1; //待会改
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
            $(".notebook")
              .css("display", "block")
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

  /* PART1 */
  function part1() {
    $(".notebook").on("click", function () {
      ntbclick++;
      console.log("ntbclick: ", ntbclick);
      if (ntbclick === 1 && !isScrolled) {
        $("body").animate(
          {
            scrollTop: $("#p1").offset().top - 20,
          },
          4000
        );
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
  });

  $(".cnt-chge-button").hover(
    function () {
      // 获取对应的 memo 元素ID
      var memoId = "#cnt-chge-memo" + this.id.slice(-1);
      // 显示对应的 memo 元素
      $(memoId).css({
        visibility: "visible",
        height: "auto",
        opacity: 1,
      });
    },
    function () {
      // 获取对应的 memo 元素ID
      var memoId = "#cnt-chge-memo" + this.id.slice(-1);
      // 隐藏对应的 memo 元素
      $(memoId).css({
        visibility: "hidden",
        height: "0",
        opacity: 0,
      });
    }
  );
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

  /* AOS */
  AOS.init();
});
