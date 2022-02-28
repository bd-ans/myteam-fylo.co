let plus_icon=document.getElementById("plus-icon");
let plus_hover=document.getElementById("plus-hover");
let plus_hoverth=document.getElementById("plus-hoverth");

plus_hover.style.transform="translate(0px, 0px)"
// plus_hoverth.style.transform="translate(0px, 0px)"

plus_icon.onclick=function() {
  if(plus_hover.style.transform=="translate(0px, 0px)") {
    plus_hover.style.transform="translate(0px, -100px)";

  } else {
    plus_hover.style.transform="translate(0px, 0px)";
  }
}