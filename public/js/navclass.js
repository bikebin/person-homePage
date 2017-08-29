/*
* @Author: ASUS
* @Date:   2017-08-24 15:54:40
* @Last Modified by:   ASUS
* @Last Modified time: 2017-08-24 15:54:44
*/
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,  //设置或返回当前页面相对于窗口显示区左上角的 Y 位置
            top: window.pageYOffset   //设置或返回当前页面相对于窗口显示区左上角的 Y 位置
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}