function init () {
    document.getElementById('1').onclick = count(1);
}

function count (x) {
    console.log(x);
}

window.onload = init;