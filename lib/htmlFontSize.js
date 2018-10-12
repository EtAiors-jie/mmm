
getHtmlFontSize();
window.onresize=function(){
    getHtmlFontSize();
}
function getHtmlFontSize(){
    //设计稿宽度
    var projectWidth=640;
    //基础值
    var baseWidth=100;
    //获取当前屏幕宽度
    var screenWdith=document.querySelector("html").offsetWidth;
    //算出html的字体大小
    var htmlFontSize=baseWidth*screenWdith/projectWidth;
    console.log(htmlFontSize);
    //设置html的fontsize
    document.querySelector("html").style.fontSize=htmlFontSize+"px";
}