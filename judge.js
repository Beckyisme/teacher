//首先判断pc端还是移动端。
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
  return flag;
}

//判断用户移动端使用的系统平台
var u = navigator.userAgent;
if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    //安卓手机
} else if (u.indexOf('iPhone') > -1) {
    //苹果手机
} else if (u.indexOf('Windows Phone') > -1) {
    //winphone手机
}

//判断用户是否在微信中打开
function isWeiXin(){ 
    var ua = navigator.userAgent.toLowerCase(); 
    if(ua.indexOf('micromessenger') != -1) { 
        return true; 
    } else { 
        return false; 
    } 
}

//是否是iphoneX
function isIphonex(){
    if (typeof window !== 'undefined' && window) {
        return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
    }
    return false;
}

//强制横屏方法
function checkScreenDirection(dom, screen_w, screen_h) {
    let $wrapper = $(dom);

    if (screen_w >= screen_h) {
        console.log('横屏')
        $wrapper.css({
            'width':  `${screen_w}px`,
            'height': `${screen_h}px`,
            'transform':  `rotate(0)`,
            'transform-origin': `0 0`
        })
    }
    else { // 竖屏
        console.log('竖屏')
        $wrapper.css({
            'width':  `${screen_h}px`,
            'height': `${screen_w}px`,
            'transform':  `rotate(90deg)`,
            'transform-origin': `${screen_w / 2}px ${screen_h / 2}px`
        })
    }
}

