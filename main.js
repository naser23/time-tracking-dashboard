"use strict";

const dailyButton = document.querySelector(".daily");
const weeklyButton = document.querySelector(".weekly");
const monthlyButton = document.querySelector(".monthly");
const rowSizing = document.querySelectorAll(".row-sizing");
const heroImg = document.querySelectorAll(".hero-img");
const timeText = document.querySelectorAll(".time-text");
const p = document.getElementsByTagName("p");

const nestedGrid = document.querySelector(".nested-grid");
const heroImgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

// pulling the data from the json file

fetch("data.json")
  .then(function (response) {
    // returns the pending promise to use in the second chain
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (piece) {
      let index = data.indexOf(piece);
      startApplication(piece, index);
    });
  });

function startApplication(piece, index) {
  let background = setBackground(piece.title);
  heroImgBackground(piece, index, background);
  dailyTime();
}

// for setting the correct background image for heroImg
function setBackground(source) {
  let specificBackgroundUrl = `/time-tracking-dashboard/images/icon-${source
    .replace(/\s+/g, "-")
    .toLowerCase()}.svg`;

  return specificBackgroundUrl;
}

// setting the background of the heroImg elements
function heroImgBackground(piece, index, background) {
  heroImg[index].style.backgroundColor = heroImgColors[index];
  heroImg[index].style.backgroundImage = `url('${background}')`;
  heroImg[index].style.backgroundPosition = "right 10% top 60%";
  heroImg[index].style.backgroundRepeat = "no-repeat";
}

// functionallity for changing time
dailyButton.addEventListener("click", dailyTime);
weeklyButton.addEventListener("click", weeklyTime);
monthlyButton.addEventListener("click", monthlyTime);

function dailyTime() {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (piece) {
        let yesterday = `yesterday - ${piece.timeframes.daily.previous}hrs`;
        let index = data.indexOf(piece);

        timeText[index].textContent = `${piece.timeframes.daily.current}hrs`;
        p[index].textContent = yesterday;
      });
    });
}
function weeklyTime() {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (piece) {
        let lastWeek = `Last Week - ${piece.timeframes.weekly.previous}hrs`;
        let index = data.indexOf(piece);

        timeText[index].textContent = `${piece.timeframes.weekly.current}hrs`;
        p[index].textContent = lastWeek;
      });
    });
}
function monthlyTime() {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.forEach(function (piece) {
        let lastMonth = `Last Month - ${piece.timeframes.monthly.previous}hrs`;
        let index = data.indexOf(piece);

        timeText[index].textContent = `${piece.timeframes.monthly.current}hrs`;
        p[index].textContent = lastMonth;
      });
    });
}
