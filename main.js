"use strict";

const nestedGrid = document.querySelector(".nested-grid");
const heroImgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];
console.log(nestedGrid);

// pulling the data from the json file
fetch("data.json")
  .then(function (response) {
    // returns the pending promise to use in the second chain
    return response.json();
  })
  .then(function (data) {
    startApplication(data);
  });

function startApplication(data) {
  // have to break down each point in the array of objects to get the data from them
  for (const piece of data) {
    // creating the div
    let heroImage = heroImg(
      `/time-tracking-dashboard/images/icon-${piece.title
        .replace(/\s+/g, "-")
        .toLowerCase()}.svg`,
      // to find the matching index point and display the background colors for hero img
      heroImgColors[data.indexOf(piece)]
    );

    let content = createContent();
    let div = createDiv();

    // current Hours
    let currentHoursText = createCurrentHoursText();
    let activityHeader = createActivityHeader(piece.title);
    let time = createTime(`${piece.timeframes.daily.current}hrs`);
    let currentHours = createCurrentHours();

    currentHoursText.appendChild(activityHeader);
    currentHoursText.appendChild(time);
    currentHours.appendChild(currentHoursText);

    // appending all of them to div
    content.appendChild(currentHours);
    div.appendChild(heroImage);
    div.appendChild(content);
    nestedGrid.appendChild(div);

    console.log(piece.timeframes.daily.previous);
  }
}

function heroImg(source, color) {
  const heroImg = document.createElement("div");
  heroImg.classList.add("hero-img");
  heroImg.style.backgroundImage = `url("${source}")`;
  heroImg.style.backgroundPosition = "right 10% top 60%";
  heroImg.style.backgroundRepeat = "no-repeat";
  heroImg.style.backgroundColor = color;
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
  return div;
}

// everything insde of current hours //
function createCurrentHours() {
  const currentHours = document.createElement("div");
  currentHours.classList.add("current-hours");

  return currentHours;
}

function createCurrentHoursText() {
  const currentHoursText = document.createElement("div");
  currentHoursText.classList.add("current-hours-text");
  return currentHoursText;
}

function createActivityHeader(text) {
  const activity = document.createElement("h3");
  activity.textContent = text;
  return activity;
}

function createTime(text) {
  const time = document.createElement("h2");
  time.textContent = text;
  return time;
}

// everything inside previous hours //
function createPreviousHours() {
  const previousHours = document.createElement("div");
  previousHours.classList.add("previous-hours");

  console.log(previousHours);
  return previousHours;
}

function createPreviousHoursText() {
  const previousHoursText = document.createElement("div");
  previousHoursText.classList.add("previous-hours-text");
  return previousHoursText;
}

function createDotImg() {
  const img = document.createElement("img");
  img.src = "/time-tracking-dashboard/images/icon-ellipsis.svg";
  return img;
}

function createP(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function testing() {}
