const light1 = document.querySelector("#lightbulb1");
const light2 = document.querySelector("#lightbulb2");
const light3 = document.querySelector("#lightbulb3");
const subtitle = document.querySelector(".subtitle");
let count = 0;

light1.addEventListener("click", function(){

    const counter = document.querySelector(".subtitle");
    const likeCount = Number(counter.innerHTML.split(" ")[4]);
    const newLikeCount = likeCount + 1;
    counter.innerHTML = `You've clicked the lights ${newLikeCount} times`;
    light1.classList.toggle("active");
    light1.classList.toggle("inactive");
})

light2.addEventListener("click", function(){
    const counter = document.querySelector(".subtitle");
    const likeCount = Number(counter.innerHTML.split(" ")[4]);
    const newLikeCount = likeCount + 1;
    counter.innerHTML = `You've clicked the lights ${newLikeCount} times`;
    light2.classList.toggle("active");
    light2.classList.toggle("inactive");
})

light3.addEventListener("click", function(){
    const counter = document.querySelector(".subtitle");
    const likeCount = Number(counter.innerHTML.split(" ")[4]);
    const newLikeCount = likeCount + 1;
    counter.innerHTML = `You've clicked the lights ${newLikeCount} times`;
    light3.classList.toggle("active");
    light3.classList.toggle("inactive");
})
