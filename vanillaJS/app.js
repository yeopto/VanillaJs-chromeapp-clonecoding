const title = document.querySelector(".hello h1");

function handleTitleclick() {
    title.style.color = "blue";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleclick);
title.addEventListener("mouseleave", handleMouseLeave);