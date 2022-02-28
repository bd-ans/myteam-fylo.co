let plus_icon=document.getElementById('plus_icon');
let plus_hover=document.getElementById('plus_hover')

function clickFunction(){
    if(plus_hover.style.transform== "translate(0px, 0px)"){
        plus_hover.style.transform="translate(0px, -100px)";
    }else{
        plus_hover.style.transform="translate(0px, 0px)";
    }
}