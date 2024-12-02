const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
//creating some element

const ul = document.createElement("ul");
box.appendChild(ul);

btn.addEventListener("click", function () {
  let li = `<li class="boxItem"><span class="boxItemspan">${input.value}</span></li>`;
  ul.innerHTML += li;
  input.value = "";
});
