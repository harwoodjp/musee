const DEBUG = false
const colors = ["#adccff", "#b7fff9", "#c6b5ff", "#ffccfb", "#e8ffcc", "#ffe4cc"]
const rain = new Audio("./things/sound/rain.mp3")

const bodyEl = document.querySelector("body"),
  frameEl = document.querySelector(".frame"),
  goEls = document.querySelectorAll(".go")

const getRandomIndex = array => (
  Math.floor(Math.random() * array.length)
)

const getRandomColor = () => (
  colors[getRandomIndex(colors)]
)

const setBgColor = color => {
  bodyEl.style.backgroundColor = color
}

const getRandomSeeObj = () => {
  const possibleSeeObjs = [
    "./things/see/see1.png",
    "./things/see/see2.png",
    "./things/see/see3.png",
    "./things/see/see4.png",
    "./things/see/see5.png",
    "./things/see/see6.png",
    "./things/see/see7.png",
    "./things/see/see8.png",
    "./things/see/see9.png",
    "./things/see/see10.png",
  ]
  return possibleSeeObjs[getRandomIndex(possibleSeeObjs)]
}

const getRandomGoObj = () => {
  const possibleGoObjs = [
    "./things/go/go2.png",
    "./things/go/go3.png",
    "./things/go/go4.png",
    "./things/go/go5.png",
  ]
  return possibleGoObjs[getRandomIndex(possibleGoObjs)]
}


const setRandomRoomState = () => {
  const possibleRoomStates = [
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 1]
  ]
  roomState = possibleRoomStates[getRandomIndex(possibleRoomStates)]
}

const setHtmlForRoomState = () => {
  let newRoom = ""
  roomState.forEach(obj => {
    const isGoObj = !!obj
    isGoObj 
      ? newRoom += HTML.GO_OBJ(getRandomGoObj()) 
      : newRoom += HTML.SEE_OBJ(getRandomSeeObj())
  })
  frameEl.innerHTML = newRoom
}

const HTML = {
  INIT_GO_OBJ: `
    <img class="go" src="./things/go/go1.png" onclick=generateRoom()>  
  `,
  GO_OBJ: goObj => `
    <img class="go" src=${goObj} onclick=generateRoom()>  
  `,
  SEE_OBJ: seeObj => `
    <img class="see" src=${seeObj}>
  `
}

let roomState

const initializePage = () => {
  setBgColor(getRandomColor())
  frameEl.innerHTML = HTML.INIT_GO_OBJ
}

const generateRoom = () => {
  setBgColor(getRandomColor())
  setRandomRoomState()
  setHtmlForRoomState(roomState)
  // console.log(HTML.GO_OBJ(getRandomGoObj()))
}


bodyEl.addEventListener("DOMContentLoaded", initializePage())

bodyEl.addEventListener("click", () => {
  rain.play();
});


if (DEBUG) {
  const frame = document.querySelector(".frame")
  frame.style.border = "1px dashed red"
}