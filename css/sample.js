
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