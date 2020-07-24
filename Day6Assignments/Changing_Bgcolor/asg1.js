
const el=document.getElementById('clr');

var i=0;
function bgColor(){
    var clrarr=['wheat','lightgreen','skyblue','coral','grey'];
    el.style.backgroundColor=clrarr[i];
    i=(i+1)%clrarr.length;
}
setInterval(bgColor,5000);