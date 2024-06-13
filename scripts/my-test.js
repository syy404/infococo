$(document).ready(function () {
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
      ctx.fillStyle = "rgba(255, 255, 255, .1)";
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
      console.log("Mouse position: ", e.clientX, e.clientY);
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

  /* TYPE MACHINE ANIMATION */
  function typeMachine() {
    const typeMachineSpeed = 40;
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
    const votexts = $(".vo-text");
    startTypingAnimation(votexts, 0, () => {});
    let delay = 0;
    $(".vo-box [data-aos]").each(function () {
      $(this).attr("data-aos-delay", delay);
      delay += 1;
    });
  }
  typeMachine();
  /* AOS */
  AOS.init();
});
