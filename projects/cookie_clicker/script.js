// alerts client
/*
let alertSent = false;
while(alertSent == false) {
    alert('This site does not save progress, if you refresh the page your progress will be gone!');
    alertSent = true;
}
*/

var btn = document.getElementById('add1');
var reset = document.getElementById('reset');
var count = 1;

// adds cookie
btn.addEventListener('click', async event => {
    count++;
    btn.innerText = count + ' cookies!';
});

// resets cookie count
reset.addEventListener('click', async event => {
    count = 1;
    btn.innerText = count + ' cookie!';
})