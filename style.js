function numdisplay(num){
    input=document.getElementById('result')
    input.value+=num;
}

function clearnum(){
    result.value=''
}

function evaluatenum(){
    exp=result.value
    output=eval(exp)
    result.value=output
}

function clearone(){
    result.value=result.value.slice(0,-1)
}