const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navBar = document.getElementById("navBar");

if (bar) {
  bar.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}

const list = document.getElementById("list");
const product2 = document.getElementById("product2");
const product = document.getElementById("product");

if (list) {
  list.addEventListener("click", () => {
    product2.classList.add("active");
    product.classList.remove("active");
  });
}

var imageMain = document.getElementById("imageMain");
var smallPic = document.getElementsByClassName("smallPic");

smallPic[0].onclick = function () {
  imageMain.src = smallPic[0].src;
};
smallPic[1].onclick = function () {
  imageMain.src = smallPic[1].src;
};
smallPic[2].onclick = function () {
  imageMain.src = smallPic[2].src;
};
smallPic[3].onclick = function () {
  imageMain.src = smallPic[3].src;
};
