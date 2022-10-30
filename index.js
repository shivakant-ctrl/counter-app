let count = document.getElementById("counter-count")
let decrease = document.getElementById("decrease-button")
let reset = document.getElementById("reset-button")
let increase = document.getElementById("increase-button")

let cnt = 0;

function decreaseCount() {
  cnt = cnt - 1
  count.innerHTML = cnt
}

function resetCount() {
  cnt = 0
  count.innerHTML = cnt
}

function increaseCount() {
  cnt = cnt + 1
  count.innerHTML = cnt
}