let plus_icon=document.getElementById("plus-icon");
let plus_hover=document.getElementById("plus-hover");
let plus_hoverth=document.getElementById("plus-hoverth");

plus_hover.style.transform="translate(0px, 0px)"
plus_hoverth.style.transform="translate(0px, 0px)"


plus_icon.onclick=function() {
  if(plus_hover.style.transform=="translate(0px, 0px)") {
    plus_hover.style.transform="translate(0px, -256px)";
    plus_hoverth.style.transform="translate(0px, -256px)";
    plus_hover.style.transition="all 0.4s ease-in-out";
    plus_hoverth.style.transition="all 0.4s ease-in-out";
    plus_icon.style.transform="rotate(45deg)";
    plus_icon.style.transition="all 0.3s ease-in-out";

  } else {
    plus_hover.style.transform="translate(0px, 0px)";
    plus_hoverth.style.transform="translate(0px, 0px)";
    plus_icon.style.transform="rotate(0deg)";
    plus_icon.style.transition="all 0.3s ease-in-out";

  }
}