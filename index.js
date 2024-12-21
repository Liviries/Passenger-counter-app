
let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

let peopleEnt = 0

function increment() {
    peopleEnt += 1
    countEl.textContent = peopleEnt
    console.log(peopleEnt);
}

function decrement() {
    peopleEnt -= 1;
    countEl.textContent = peopleEnt;
    console.log(peopleEnt);
}

function save() {
    let prevEntries = peopleEnt + " - "
    saveEl.textContent += prevEntries;
    countEl.textContent = 0
    peopleEnt = 0
    console.log(prevEntries);
}