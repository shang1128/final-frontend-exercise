

let popupCloseBtn = document.querySelector('.close');

let title = document.querySelector('.title h1');

title.addEventListener("click",()=>{
    document.querySelector('.newsletter').style.display = "flex";
});

popupCloseBtn.addEventListener("click", ()=>{
    document.querySelector('.newsletter').style.display = "none";
});
