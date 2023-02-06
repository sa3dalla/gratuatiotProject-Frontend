/** @format */

const text = document.getElementById("text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = document.querySelectorAll("span");
for (var i = 0; i < ele.length; i++) {
  ele[i].style.transform = "rotate(" + i * 15 + "deg)";
}
