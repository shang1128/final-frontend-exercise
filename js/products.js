
let image = document.querySelector(".items-left-details--productImages--largeView img");

let colors = document.querySelectorAll(".color-option");

colors.forEach( (elem,index)=>{
    elem.addEventListener("click", ()=>{
        let color;
        switch(index){
            case 0: color = "#2078f9";break;
            case 1: color = "#f83f38";break;
            case 2: color = "#171717";break;
            case 3: color = "#fce83e";break;
        }
        image.style.background = color;
    }); 
});

let heart = document.querySelector(".buttonCartheart-heart");

heart.addEventListener("click",()=>{
    if(heart.style.color == "red"){
        heart.style.color = "#33A0FF";
    }else{
        heart.style.color = "red";
    }
    
});