console.log("Hello world!");

const btn = document.querySelector("#colorBtn");
let isBlue = false;
btn.addEventListener("click", () => {
    let h1 = document.querySelector("h1");
    if(isBlue){
        h1.style.background = "red";
        isBlue = false
    } else {
        h1.style.background = "blue";
        isBlue = true;
    }
})