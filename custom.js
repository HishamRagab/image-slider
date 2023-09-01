let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slider = document.querySelector(".slider");
let bullets = document.querySelectorAll(".bullet");
let num = 0;

left.onclick = function () {
  num--;
  action();
};
right.onclick = function () {
  num++;
  action();
};

bullets.forEach(function (b) {
  b.onclick = function () {
    num = b.dataset.num - 1;
    action();
  };
});

let action = function () {
  bullets.forEach((b) => b.classList.remove("active"));
  bullets[num].classList.add("active");

  left.classList.remove("stop");
  right.classList.remove("stop");
  if (num === 0) {
    left.classList.add("stop");
  } else if (num === 7) {
    right.classList.add("stop");
  }

  if (window.innerWidth > 500) {
    slider.scrollLeft = 600 * num;
  } else {
    slider.scrollLeft = 400 * num;
  }
};
