
document.getElementsByClassName('black')[0].addEventListener('click', function(){
    document.getElementById('imageChanges').src="../Beats-earphone/beats__3.png";
})
document.getElementsByClassName('red')[0].addEventListener('click', function(){
    document.getElementById('imageChanges').src="../Beats-earphone/beat-red.png";
})
document.getElementsByClassName('blue')[0].addEventListener('click', function(){
    document.getElementById('imageChanges').src="../Beats-earphone/beats__4.png";
    
})

// document.getElementsByClassName('yellow')[0].addEventListener('click', function(){
//     document.getElementById('imageChanges').src="Beats-earphone/beat-red.png";
// })

document.getElementsByClassName('white')[0].addEventListener('click', function(){
    document.getElementById('imageChanges').src="../Beats-earphone/beats__2.png";
})
document.getElementsByClassName('peach')[0].addEventListener('click', function(){
    document.getElementById('imageChanges').src="../Beats-earphone/beats__1.png";
})





let counter=0;

document.getElementsByClassName('numOrder--add')[0].addEventListener('click', function(){
    counter++
    document.getElementsByClassName('numOrder--value')[0].innerHTML=counter;
})

document.getElementsByClassName('numOrder--sub')[0].addEventListener('click', function(){
if (counter <= 0) return;
counter--
document.getElementsByClassName('numOrder--value')[0].innerHTML=counter;
})



let addToCart = document.getElementById('#addCartproductDetails');
let description = document.querySelector('.items-left-details-h2');
let quantity = document.querySelector('.numOrder--value');
let price = document.querySelector('.bs-category-gallery--one--box--price--enabled price-bolder-red');
let productImage = document.querySelector('.items-left-details--productImages--largeView');

addToCart.addEventListener('click', function(){
    addingToCart();
});




// function addingToCart(src, title, price){

//     let itemslistItem = document.createElement('section');
//     itemslistItem.classList.add('items-list__item');
//     let itemslistItemName = document.createElement('section');
//     itemslistItemName.classList.add('items-list__item--name');
//     let itemslistItemNameDelete = document.createElement('section');
//     itemslistItemNameDelete.classList.add('items-list__item--name__delete');
//     let delIcon = document.createElement('i');
//     delIcon.classList.add('fas', 'fa-times');
//     let span = document.createElement('span');
//     span.classList.add('background');
//     let imageContainer = document.createElement('section');
//     imageContainer.classList.add('image-container');
//     let img = document.createElement('img');
//     img.setAttribute('src', src);
//     let description = document.createElement('h1');
//     description.innerHTML = title;
//     let srp = document.createElement('h1');
//     srp.innerHTML = price;
//     let hiddenPrice = document.createElement('input');
//     hiddenPrice.classList.add('price');
//     hiddenPrice.setAttribute('type', 'hidden');
//     hiddenPrice.setAttribute('value', '998');
//     let itemslistItemquantity = document.createElement('section');
//     itemslistItemquantity.classList.add('items-list__item--quantity');
//     let form = document.createElement('form');
//     let minusQuantity = document.createElement('button');
//     minusQuantity.classList.add('minus-quantity');
//     let minusIcon = document.createElement('i');
//     minusIcon.classList.add('fa', 'fa-minus');
//     let quantityValue = document.createElement('input');
//     quantityValue.classList.add('quantity');
//     quantityValue.setAttribute('type', 'number');
//     quantityValue.setAttribute('name', 'quantity');
//     quantityValue.setAttribute('min', "0");
//     quantityValue.setAttribute('value', '0');
//     let addQuantity = document.createElement('button');
//     addQuantity.classList.add('add-quantity');
//     let addIcon = document.createElement('i');
//     addIcon.classList.add('fa', 'fa-plus');
//     let unitPriceHidden = document.createElement('input');
//     unitPriceHidden.classList.add('unit-price-hidden');
//     unitPriceHidden.setAttribute('value', '0');
//     unitPriceHidden.setAttribute('type', 'hidden');
//     let uPrice = document.createElement('h1');
//     uPrice.classList.add('unit-price');

//     itemslistItemNameDelete.append(delIcon);
//     itemslistItemNameDelete.append(span);
//     imageContainer.append(img);
//     itemslistItemName.append(itemslistItemNameDelete);
//     itemslistItemName.append(imageContainer);
//     itemslistItemName.append(description);
//     minusQuantity.append(minusIcon);
//     addQuantity.append(addIcon);
//     form.append(minusQuantity);
//     form.append(quantityValue);
//     form.append(addQuantity);
//     itemslistItemquantity.append(form);
//     itemslistItem.append(itemslistItemName);
//     itemslistItem.append(srp);
//     itemslistItem.append(hiddenPrice);
//     itemslistItem.append(itemslistItemquantity);
//     itemslistItem.append(unitPriceHidden);
//     itemslistItem.append(uPrice);

// }