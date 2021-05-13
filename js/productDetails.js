
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