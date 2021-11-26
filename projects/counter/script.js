var countEl = document.getElementById('count-el');
var inputField = document.getElementById('addNum');
var count = 0;

function add1() {
    count++;
    countEl.innerText = count;
}
function addNumber() {
    countEl.innerText = inputField;
}
function reset() {
    count = 0;
    countEl.innerText = count;
}