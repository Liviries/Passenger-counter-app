
let countEl = document.getElementById("count-el");

let peopleEnt = 0

function increment() {
    peopleEnt = peopleEnt + 1
    countEl.innerText = peopleEnt
    console.log(peopleEnt)
}