var toggler = false;
document.querySelector('.menu').onclick = function(){
    if (toggler == false){
    document.querySelector('.mobile').style.display ="flex";
    toggler = true;
    } else {
    document.querySelector('.mobile').style.display ="none";
    toggler = false;
    }
}
function widthChecker(){
    if(window.innerWidth > 768){
        document.querySelector('.mobile').style.display ="none";
    }
}
setInterval(widthChecker,5);
