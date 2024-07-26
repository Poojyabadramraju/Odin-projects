const container = document.querySelector(".flex-container");
let isRandomActive = false;
let currentEventType = "mouseover";
let currentColor = "red";
function resizeGrid(numOfSquares = 16) {
    let square = numOfSquares * numOfSquares;
    if (container.children.length > 0) {
        container.replaceChildren();
    }
    for (let i = 1; i <= square; i++) {
        const flexItem = document.createElement("div");
        flexItem.classList.add("flex-item");
        flexItem.style.width = `calc(100%/${numOfSquares})`;
        flexItem.style.height = `calc(100%/${numOfSquares})`
        container.appendChild(flexItem);
    }

    applyEventListeners();
    toggleBorders();
}

resizeGrid();

function applyEventListeners() {
    const flexItems = document.querySelectorAll(".flex-item");
    flexItems.forEach((flexItem) => {
        flexItem.removeEventListener("mouseover", handleEvent);
        flexItem.removeEventListener("click", handleEvent);
        if(currentEventType==="mouseover"){
            flexItem.addEventListener("mouseover", handleEvent);
        }else{
            flexItem.addEventListener("click", handleEvent);
        }
    });
}

function handleEvent(e){
    const target=e.target
    if(isRandomActive){
        target.style.background=clrGen();
    }else{
        target.style.background=currentColor;
    }
}

const resizeBtn = document.querySelector(".resize");
function getNum() {
    let newResize = prompt("Enter number of squares per side (max limit-100)");
    resizeGrid(newResize);
}
resizeBtn.addEventListener("click", () => {
    getNum();
})

function toggleBorders() {
    const flexItems = document.querySelectorAll(".flex-item");
    const inputChecked = document.querySelector("#check");
    if (inputChecked.checked) {
        flexItems.forEach((flexItem) => {
            flexItem.style.border = "1px solid #000";
        });
    } else {
        flexItems.forEach((flexItem) => {
            flexItem.style.border = "none";
        });
    }
}

const inputChecked = document.querySelector("#check");
inputChecked.addEventListener("change", toggleBorders);

function clrGen() {
    const code = "0123456789ABCDEF";
    let clr = '#'
    for (let i = 0; i < 6; i++) {
        clr += code[Math.floor(Math.random() * 16)];
    }
    return clr;
}

function disableRandomActive() {
    isRandomActive = false;
}

function changeRandomBtn() {
    isRandomActive = true;
    applyEventListeners();
    const randomClrBtn = document.querySelector(".random");
    randomClrBtn.style.background = clrGen();
}

function clearFlexItemBg() {
    const flexItems = document.querySelectorAll(".flex-item");
    flexItems.forEach((flexItem) => {
        if (flexItem.style.background) {
            flexItem.style.background = 'none';
        }
    });
}

const randomClrBtn = document.querySelector(".random");
randomClrBtn.addEventListener("click", changeRandomBtn);
const clearBtn = document.querySelector(" .clear");
clearBtn.addEventListener("click", clearFlexItemBg);
const flexItemBgColorInput = document.querySelector("#flexitembgcolor");
flexItemBgColorInput.addEventListener("change", (e) => {
    currentColor=e.target.value;
    disableRandomActive();
    applyEventListeners();
})
const flexItemEventInput = document.querySelector("#choose-event");
flexItemEventInput.addEventListener("change", (e) => {
    currentEventType=e.target.value;
    applyEventListeners();
})

