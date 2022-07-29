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

// 모달창
let 모달 = false;

document
  .querySelector(".btn-close-diary")
  .addEventListener("click", function () {
    if (모달 == true) {
      document.querySelector(".modal-background-diary").style.display = "none";
      document.body.style.overflow = "unset";
      모달 = false;
    }
  });

document
  .querySelector(".btn-open-diary")
  .addEventListener("click", function () {
    if (모달 == false) {
      document.querySelector(".modal-background-diary").style.display = "flex";
      document.body.style.overflow = "hidden";
      모달 = true;
    }
  });

document
  .querySelector(".btn-close-personal")
  .addEventListener("click", function () {
    if (모달 == true) {
      document.querySelector(".modal-background-personal").style.display =
        "none";
      document.body.style.overflow = "unset";
      모달 = false;
    }
  });

document
  .querySelector(".btn-open-personal")
  .addEventListener("click", function () {
    if (모달 == false) {
      document.querySelector(".modal-background-personal").style.display =
        "flex";
      document.body.style.overflow = "hidden";
      모달 = true;
    }
  });
