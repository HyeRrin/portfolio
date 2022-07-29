// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 타이핑 효과
const content = "안녕하세요 :)\n개발꿈나무 주혜린입니다.";
const $txt = document.querySelector(".txt-title");
let index = 0;

let typing = function () {
  let tmp = content[index++];
  $txt.innerHTML += tmp === "\n" ? "<br />" : tmp;
  if (index > content.length) {
    $txt.textContent = "";
    index = 0;
  }
};

setInterval(typing, 200);

// 이미지 슬라이드
let imgIndex = 0;
let position = 0;
const IMG_WIDTH = 438;
const $btnPrev = document.querySelector(".btn-prev");
const $btnNext = document.querySelector(".btn-next");
const $slideImgs = document.querySelector(".slide-images");

let prev = function () {
  if (imgIndex > 0) {
    $btnNext.removeAttribute("disabled");
    position += IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    $btnPrev.setAttribute("disabled", "true");
  }
};

let next = function () {
  if (imgIndex < 5) {
    $btnPrev.removeAttribute("disabled");
    position -= IMG_WIDTH;
    $slideImgs.style.transform = `translateX(${position}px)`;
    $slideImgs.style.transition = "transform .5s ease-out";
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 4) {
    $btnNext.setAttribute("disabled", "true");
  }
};

let init = function () {
  $btnPrev.setAttribute("disabled", "true");
  $btnPrev.addEventListener("click", prev);
  $btnNext.addEventListener("click", next);
};

init();

// 모달
const $modalBg = document.getElementsByClassName("modal-background");
const $btnOpen = document.getElementsByClassName("btn-open");
const $btnClose = document.getElementsByClassName("btn-close");
let funcs = [];

function modal(num) {
  return function () {
    $btnOpen[num].onclick = function () {
      $modalBg[num].style.display = "flex";
      document.body.style.overflow = "hidden";
    };
    $btnClose[num].onclick = function () {
      $modalBg[num].style.display = "none";
      document.body.style.overflow = "unset";
    };
  };
}

for (let i = 0; i < $btnOpen.length; i++) {
  funcs[i] = modal(i);
}

for (let i = 0; i < $btnOpen.length; i++) {
  funcs[i]();
}

// 스크롤바
let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("bar-ing")[0];
};

window.addEventListener(
  "scroll",
  function () {
    scrollTop = document.documentElement.scrollTop;
    let per = Math.ceil(
      (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
    );
    bar.style.width = per + "%";
  },
  false
);
