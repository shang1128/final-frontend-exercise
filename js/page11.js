
let quantityInput = document.querySelectorAll('.quantity');
let upQuantity = document.querySelectorAll('.add-quantity');
let downQuantity = document.querySelectorAll('.minus-quantity');

upQuantity.forEach((elem, index) => {
    elem.addEventListener("click", (e)=>{
        e.preventDefault();
        quantityInput[index].value++;
    });
});

downQuantity.forEach((elem, index) => {
    elem.addEventListener("click", (e)=>{
        e.preventDefault();
        if(quantityInput[index].value > 0)
            quantityInput[index].value--;
    });
});

let itemDelete = document.querySelectorAll('.items-list__item--name__delete');

let items = document.querySelectorAll('.items-list__item');
let hr = document.querySelectorAll('hr');

itemDelete.forEach((elem,index)=>{
    elem.addEventListener("click", ()=>{
        items[index].style.display = "none";
        hr[index].style.display = "none";
    });
});