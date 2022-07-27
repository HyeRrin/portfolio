// 맨 위로 이동 버튼
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

// 타이핑 효과
const content = "안녕하세요 :)\n개발꿈나무 주혜린입니다.";
const txt = document.querySelector(".txt-title");
let index = 0;

let typing = function () {
  let tmp = content[index++];
  txt.innerHTML += tmp === "\n" ? "<br />" : tmp;
  if (index > content.length) {
    txt.textContent = "";
    index = 0;
  }
};

setInterval(typing, 200);
