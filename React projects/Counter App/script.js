let value = 0;

const counteElement = document.getElementById("counter");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const reset = document.getElementById("reset");

function render() {
    counteElement.textContent = value;
    if(value > 0) counteElement.style.color = "green";
    else if(value < 0) counteElement.style.color = "red";
    else counteElement.style.color = "white";
}

inc.addEventListener('click', () => {
    value++;
    render();
});

dec.addEventListener('click', () => {
    value--;
    render();
});

reset.addEventListener('click', () => {
    value = 0;
    render();
});