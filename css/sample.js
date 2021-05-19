
function assignedGrade(score){
    if(score>="90"&&score<="95"){
        score="A";
        return score;
    }
    if(score>="80"&&score<="89"){
        score="B";
        return score;
    }
    if(score>="75"&&score<="79"){
        score="C";
        return score;
    }
    if(score>="70"&&score<="74"){
        score="D";
        return score;
    }
    if(score<="69"){
        score="F";
        return score;
    }
 
}
console.log(assignedGrade(63));


// document.getElementsByClassName('blue')[0].addEventListener('click', function(){
//     document.getElementsByClassName('items-left-details--productImages--largeView')[0].style="background-color:blue";
// })
// document.getElementsByClassName('red')[0].addEventListener('click', function(){
//     document.getElementsByClassName('items-left-details--productImages--largeView')[0].style="background-color:red";
// })
// document.getElementsByClassName('black')[0].addEventListener('click', function(){
//     document.getElementsByClassName('items-left-details--productImages--largeView')[0].style="background-color:black";
// })
// document.getElementsByClassName('yellow')[0].addEventListener('click', function(){
//     document.getElementsByClassName('items-left-details--productImages--largeView')[0].style="background-color:yellow";
// })




