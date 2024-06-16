$(document).ready(function () {
  function adjustDivSizeAndPosition() {
    var size = {
      width:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      height:
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
    };

    $("#div2").css({
      height: (size.height * 7.5) / 10 + "px",
      width: (size.width * 9) / 10 + "px",
      left: (size.width * 1) / 20 + "px",
      top: (size.height * 2.8) / 20 + "px",
    });

    var $div2 = $("#div2");
    var $div2Image = $div2.find("img"); // 假设图片是div2的直接子元素
    var div2ImageTop = $div2Image.position().top; // 图片相对于div2的顶部位置
    var div2Top = $div2.position().top; // div2相对于视口的位置
    var imageTopToViewport = div2Top + div2ImageTop; // 计算图片顶部到视口顶部的距离

    var $div1 = $("#div1");
    var div1Height = $div1.height(); // 获取div1的当前高度
    var maxTop = imageTopToViewport - div1Height;
    var div1Top = imageTopToViewport - div1Height / 2;
    if (div1Top > maxTop) {
      div1Top = maxTop;
    }
    if (div1Top < 0) {
      // 确保div1不会超出屏幕顶部
      div1Top = 0;
    }

    $div1.css({
      width: (size.width * 7) / 10 + "px",
      top: div1Top - 12 + "px",
      left: (size.width * 3) / 20 + "px",
    });

    // 更新其他元素的尺寸和位置
    $("#sofa1").css({
      height: (size.height * 353) / 1800 + "px",
      width: (size.width * 973) / 2880 + "px",
      left: (size.width * 1400) / 2880 + "px",
      top: (size.height * 906) / 1800 + "px",
    });

    $("#sofa2").css({
      width: (size.width * 421) / 2880 + "px",
      left: (size.width * 152) / 2880 + "px",
      top: (size.height * 1020) / 1800 + "px",
    });

    $("#f").css({
      height: (size.height * 441) / 1800 + "px",
      width: (size.width * 423) / 2880 + "px",
      left: (size.width * 91) / 2880 + "px",
      top: (size.height * 750) / 1800 + "px",
    });

    $("#m").css({
      height: (size.height * 440) / 1800 + "px",
      width: (size.width * 319) / 2880 + "px",
      left: (size.width * 1939) / 2880 + "px",
      top: (size.height * 660) / 1800 + "px",
    });

    $("#c").css({
      height: (size.height * 309) / 1800 + "px",
      width: (size.width * 285) / 2880 + "px",
      left: (size.width * 1500) / 2880 + "px",
      top: (size.height * 805) / 1800 + "px",
    });

    $("#kt").css({
      height: (size.height * 204) / 1800 + "px",
      width: (size.width * 406) / 2880 + "px",
      left: (size.width * 48) / 2880 + "px",
      top: (size.height * 73) / 1800 + "px",
    });

    $("#deng").css({
      height: (size.height * 388) / 1800 + "px",
      width: (size.width * 300) / 2880 + "px",
      left: (size.width * 1587) / 2880 + "px",
      top: 0,
    });

    $("#zw").css({
      height: (size.height * 262) / 1800 + "px",
      width: (size.width * 200) / 2880 + "px",
      left: (size.width * 2400) / 2880 + "px",
      top: (size.height * 939) / 1800 + "px",
    });

    $("#hp").css({
      height: (size.height * 134) / 1800 + "px",
      width: (size.width * 152) / 2880 + "px",
      left: (size.width * 1150) / 2880 + "px",
      top: (size.height * 1023) / 1800 + "px",
    });

    $("#ws").css({
      height: (size.height * 164) / 1800 + "px",
      width: (size.width * 64) / 2880 + "px",
      left: (size.width * 935) / 2880 + "px",
      top: (size.height * 681) / 1800 + "px",
    });

    $("#men").css({
      height: (size.height * 867) / 1800 + "px",
      width: (size.width * 364) / 2880 + "px",
      left: (size.width * 750) / 2880 + "px",
      top: (size.height * 247) / 1800 + "px",
    });

    $("#div3").css({
      height: (size.height * 120) / 1800 + "px",
      width: (size.width * 2536) / 2880 + "px",
      left: (size.width * 172) / 2880 + "px",
      top: (size.height * 1600) / 1800 + "px",
    });

    $("#tip1").css({
      height: (size.height * 1) / 10 + "px",
      width: (size.width * 2.3) / 10 + "px",
      left: (size.width * 4.5) / 20 + "px",
      top: (size.height * 15.5) / 20 + "px",
    });

    $("#tip2").css({
      height: (size.height * 1) / 10 + "px",
      width: (size.width * 2.3) / 10 + "px",
      left: (size.width * 7.5) / 20 + "px",
      top: (size.height * 15.5) / 20 + "px",
    });

    $("#tip3").css({
      height: (size.height * 1) / 10 + "px",
      width: (size.width * 2.3) / 10 + "px",
      left: (size.width * 10.5) / 20 + "px",
      top: (size.height * 15.5) / 20 + "px",
    });

    $("#father").css({
      height: (size.height * 400) / 1800 + "px",
      width: (size.width * 600) / 2880 + "px",
      left: (size.width * 500) / 2880 + "px",
      top: (size.height * 600) / 1800 + "px",
    });

    $(".mo1").css({
      width: (size.width * 550) / 2880 + "px",
      left: (size.width * 2080) / 2880 + "px",
      top: (size.height * 700) / 1800 + "px",
    });

    $(".mo2").css({
      width: (size.width * 550) / 2880 + "px",
      left: (size.width * 2080) / 2880 + "px",
      top: (size.height * 580) / 1800 + "px",
    });

    $(".mo3").css({
      width: (size.width * 550) / 2880 + "px",
      left: (size.width * 2080) / 2880 + "px",
      top: (size.height * 650) / 1800 + "px",
    });

    $(".chi1").css({
      width: (size.width * 341) / 2880 + "px",
      left: (size.width * 1400) / 2880 + "px",
      top: (size.height * 900) / 1800 + "px",
    });

    $(".chi2").css({
      width: (size.width * 341) / 2880 + "px",
      left: (size.width * 1400) / 2880 + "px",
      top: (size.height * 880) / 1800 + "px",
    });

    $(".chi3").css({
      width: (size.width * 341) / 2880 + "px",
      left: (size.width * 1400) / 2880 + "px",
      top: (size.height * 880) / 1800 + "px",
    });

    $(".sfatxt").css({
      top: (size.height * 250) / 1800 + "px",
    });

    $(".smotxt").css({
      width: (size.width * 450) / 2880 + "px",
      left: (size.width * 2200) / 2880 + "px",
      top: (size.height * 780) / 1800 + "px",
    });

    $(".schitxt").css({
      width: (size.width * 400) / 2880 + "px",
      left: (size.width * 1300) / 2880 + "px",
      top: (size.height * 850) / 1800 + "px",
    });
  }

  // 初始调整
  adjustDivSizeAndPosition();

  // 监听窗口大小调整事件
  $(window).resize(function () {
    adjustDivSizeAndPosition();
  });

  // 隐藏弹出div并设置悬停事件
  function setupHoverTip(buttonId, tipId) {
    $(tipId).hide();
    $(buttonId).hover(
      function () {
        $(tipId).fadeIn("slow");
      },
      function () {
        $(tipId).fadeOut("slow");
      }
    );
  }

  setupHoverTip("#button1", "#tip1");
  setupHoverTip("#button2", "#tip2");
  setupHoverTip("#button3", "#tip3");

  // 设置软广动画
  $("#chat3 .bubble").each(function (i) {
    var bubble = $(this);
    setTimeout(function () {
      bubble.css("display", "flex");
      bubble.addClass("animate__animated animate__fadeInUpBig");
    }, i * 800); // 使用 i * 800 代替 delay
  });

  // 设置按钮点击事件和状态管理
  var clickCounts = { button1: 1, button2: 1, button3: 1 };

  function setupClickEvent(buttonId, clickCountKey) {
    $(buttonId).click(function () {
      clickCounts[clickCountKey]++;
      judge();
      if (clickCounts[clickCountKey] === 3) {
        $(buttonId).off("click").css("pointer-events", "none");
      }
    });
  }

  setupClickEvent("#button1", "button1");
  setupClickEvent("#button2", "button2");
  setupClickEvent("#button3", "button3");

  // 判定并处理按钮点击组合逻辑
  function judge() {
    var count1 = clickCounts.button1;
    var count2 = clickCounts.button2;
    var count3 = clickCounts.button3;

    // 定义展示和隐藏的逻辑
    function showHideElements(show, hide) {
      show.forEach(function (selector) {
        $(selector).fadeIn("slow");
      });
      hide.forEach(function (selector) {
        $(selector).hide();
      });
    }

    // 处理不同的点击组合情况
    var combinations = [
      {
        condition: count1 === 1 && count2 === 1 && count3 === 1,
        show: [".fa1", ".mo1", ".chi1"],
        hide: [
          ".fa2",
          ".mo2",
          ".chi2",
          ".fa3",
          ".mo3",
          ".chi3",
          ".sfatxt",
          ".smotxt",
          ".schitxt",
        ],
      },
      // ... 在这里添加更多的组合情况
    ];

    combinations.forEach(function (combo) {
      if (combo.condition) {
        showHideElements(combo.show, combo.hide);
      }
    });
  }

  judge();

  // 设置动画循环
  var fatxt = $(".fa1 .fatxt");
  var currentIndex = 0;

  function animateChild() {
    $(fatxt[currentIndex])
      .addClass("animated fadeInUpBig")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).removeClass("animated fadeInUpBig");
          currentIndex = (currentIndex + 1) % fatxt.length;
          animateChild();
        }
      );
  }

  animateChild();
});
