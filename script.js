
let data = []

window.onload = () =>{
    loopStep();
}

// controller
function loopStep(){
    updateDataArray();
    createBars(data);

    setTimeout(loopStep, 500);
}

// view
function createBar(value, parent){
    let newBar = document.createElement('div');
    newBar.classList.add("bar");
    newBar.style.height = value*2 + "vh";
    parent.appendChild(newBar);
}

function createBars(values){
    let parent = document.querySelector(".barContainer");
    parent.replaceChildren(...[]);
    console.log(parent);
    values.forEach(value => {
        createBar(value, parent);
    });
}

// model
function updateDataArray(){
    if (data.length >= 40){
        data.shift();
    }

    data.push(newCustomerCount());
}

function newCustomerCount(){
    return Math.floor(Math.random()*32);
}
