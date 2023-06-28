function bclick(val){
    document.getElementById("screen").value+=val
}
function clearscreen(){
    document.getElementById("screen").value=''
}
function equalclick(){
    let t=document.getElementById("screen").value
    let re=eval(t)
    document.getElementById("screen").value=re
}