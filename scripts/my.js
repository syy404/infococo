/*PARAMETERS*/
const speed = 50;
let chpt0count = 0;
let chpt1count = 1;
let chpt2count = 1;
let chpt3count = 1;
let chpt4count = 1;


/*FUNCTIONS*/
//TYPE MACHINE
function writeText(element, text, idx, callback) {
  element.text(text.slice(0, idx));
  idx++;
  if (idx <= text.length) {
    setTimeout(() => writeText(element, text, idx, callback), speed);
  } else {
    if (callback) callback();
  }
}
function startTypingAnimation(elements, index) {
  if (index >= elements.length) return;
  const element = $(elements[index]);
  const text = element.text();
  element.text("");
  element.show();
  writeText(element, text, 1, () => {
    startTypingAnimation(elements, index + 1);
  });
}

$(document).ready(function () {
  // Init AOS
  AOS.init();
  const votexts = $(".vo-text");

  startTypingAnimation(votexts, 0);
  //delay for each element
  let delay = 0;
  $(".vo-box [data-aos]").each(function () {
    $(this).attr("data-aos-delay", delay);
    delay += 1;
  });
});
