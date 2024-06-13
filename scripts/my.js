// my.js
const typeMachineSpeed = 40;
let chpt0count = 0;
let chpt1count = 0;
let chpt2count = 0;
let chpt3count = 0;
let chpt4count = 0;

// TYPE MACHINE
function writeText(element, text, idx, callback) {
  element.text(text.slice(0, idx));
  idx++;
  if (idx <= text.length) {
    setTimeout(() => writeText(element, text, idx, callback), typeMachineSpeed);
  } else {
    if (callback) callback();
  }
}

function startTypingAnimation(elements, index, finalCallback) {
  if (index >= elements.length) {
    if (finalCallback) finalCallback();
    return;
  }
  const element = $(elements[index]);
  const text = element.text();
  element.text("");
  element.show();
  writeText(element, text, 1, () => {
    startTypingAnimation(elements, index + 1, finalCallback);
  });
}

$(document).ready(function () {
  const votexts = $(".vo-text");

  const cursor = $("#cursor");
  let cursorSvg = cursor.find("svg");

  // 鼠标移动事件
  $(document).mousemove(function (e) {
    gsap.to(cursor, {
      duration: 0.1,
      x: e.clientX,
      y: e.clientY,
    });
  });

  // 鼠标点击事件
  $(document).mousedown(function () {
    gsap.to(cursorSvg, {
      duration: 0.3,
      scale: 1.5,
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

  // 页面加载时的动画
  gsap.to(cursor, {
    duration: 1,
    autoAlpha: 1,
  });

  startTypingAnimation(votexts, 0, () => {
    $(".glassbox2").animate({ height: "0" }, 1000, () => {
      $(".phone-box").css("display", "flex").hide().fadeIn(500);
    });
  });

  // Delay for each element
  let delay = 0;
  $(".vo-box [data-aos]").each(function () {
    $(this).attr("data-aos-delay", delay);
    delay += 1;
  });

  // Init AOS
  AOS.init();

  // Carousel
  $(".phone-content").each(function () {
    let carouselIndex = 0;
    const carousel = $(this).find("img");
    const totalImages = carousel.length;
    function showNextImage() {
      const currentImage = carousel.eq(carouselIndex);
      const nextIndex = (carouselIndex + 1) % totalImages;
      const nextImage = carousel.eq(nextIndex);

      currentImage
        .removeClass("active")
        .addClass("prev")
        .css("display", "none");

      nextImage.css("top", "100%").css("display", "block").addClass("active");
      setTimeout(() => {
        nextImage.css("top", "0%");
      }, 10);

      carouselIndex = nextIndex;
    }

    carousel
      .eq(carouselIndex)
      .addClass("active")
      .css("top", "0")
      .css("display", "block");

    setInterval(showNextImage, 2000);
  });
});
