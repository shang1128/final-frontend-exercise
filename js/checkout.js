let incrementButton = document.querySelectorAll('.add-quantity');
let decrementButton = document.querySelectorAll('.minus-quantity');
let quantityValue = document.querySelectorAll('.quantity');
let unitPriceValue = document.querySelectorAll('.unit-price');
let subTotalAmount = document.querySelector('.sub-total');
let totalAmount = document.querySelector('.total-price');
let deleteOrder = document.querySelectorAll('.items-list__item--name__delete');
let deleteItems = document.querySelectorAll('.items-list__item');

let counter = new Array(quantityValue.length); //[undefined,undefined]
let total=0;
counter.fill(0); //[0,0];

// console.log(incrementButton, decrementButton, quantityValue)

// console.log(incrementButton[0])
for(let i = 0; i<=incrementButton.length;i++){
    incrementButton[i].addEventListener('click', function(e){
        e.preventDefault();
        // console.log("efsedf");  
        counter[i]++;    
        quantityValue[i].value=counter[i];
        unitPriceValue[i].innerHTML=`$${calculateOrder(counter[i], 998)}`;
        total = total + 998;
        subTotalAmount.innerHTML = `$${total}`;
        totalAmount.innerHTML = total == 0 ? `$0` : `$${total+20}`;
    });
    decrementButton[i].addEventListener('click', function(e){
        e.preventDefault();
        if(quantityValue[i].value<=0){
            return;
        }
        counter[i]--;
        quantityValue[i].value=counter[i];
        unitPriceValue[i].innerHTML=`$${calculateOrder(counter[i], 998)}`;
        total = total - 998;
        subTotalAmount.innerHTML = `$${total}`;
        totalAmount.innerHTML = total == 0 ? `$0` : `$${total+20}`;
    })
    deleteOrder[i].addEventListener('click', function(){
        // console.log(deleteOrder);
        deleteItems[i].remove();
    })
}

function calculateOrder(c, srp){
    return c * srp;
}


