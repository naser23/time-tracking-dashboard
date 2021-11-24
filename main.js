"use strict";

const nestedGrid = document.querySelector(".nested-grid");
console.log(nestedGrid);

let url = "data.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

function heroImg() {
  const heroImg = document.createElement("div");
  heroImg.classList.add("hero-img");
  return heroImg;
}

function createContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  return content;
}

function createDiv() {
  const div = document.createElement("div");
  div.classList.add("row-sizing");

  let heroImage = heroImg();
  let content = createContent();

  div.appendChild(heroImage);
  div.appendChild(content);
  nestedGrid.appendChild(div);
}
createDiv();
