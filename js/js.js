/**
 * Created by Administrator on 2016/5/30.
 */
window.onscroll=function(){
    var t=document.body.scrollTop;
    console.log(t);
    var nav=document.querySelector('.nav');
    if(t>=730){
        nav.style.position="fixed";
    }else{
        nav.style.position="absolute";
    }
    if(nav.style.position=="fixed"){
        nav.style.top=105+"px";
    }else{
        nav.style.top=730+"px";
    }
}