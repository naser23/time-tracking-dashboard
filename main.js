"use strict";

const nestedGrid = document.querySelector(".nested-grid");
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
  // have to break down each point in the array of objects to get the data from
  for (const piece of data) {
    console.log(piece);
    createDiv();
  }
}

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

// everything insde of current hours
function createCurrentHours() {
  const currentHours = document.createElement("div");
  currentHours.classList.add("current-hours");

  let a = "work";
  let t = "00hrs";

  let activity = createActivityHeader(a);
  let time = createTime(t);
  let currentHoursText = createCurrentHoursText();

  currentHoursText.appendChild(activity);
  currentHoursText.appendChild(time);
  currentHours.appendChild(currentHoursText);

  console.log(currentHours);
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

// everything inside previous hours
function createPreviousHours() {
  const previousHours = document.createElement("div");
  previousHours.classList.add("previous-hours");

  console.log(previousHours);
  return previousHours;
}

createPreviousHours();

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
