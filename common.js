/**
*获取下一个兄弟元素的兼容问题
* @param element
* @returns {*}
*/
//兼容问题处理  nextSibling
function nexntElementSibling(element) {
    if ( element.nextElementSibling ) {
        return element.nextElementSibling;
    }else {
        var next = element.nextSibling;
        while ( next && next.nodeType !== 1 ) {
            next = next.nextSibling;
        }
        return next;
    }
}
/**
 *获取上一个兄弟元素的兼容问题
 * @param element
 * @returns {*}
 */
//兼容问题处理  previousSibling
function previousElementSibling(element) {
    if ( element.previousElementSibling ) {
        return element.previousElementSibling;
    }else {
        var previous = element.previousSibling;
        while ( previous && next.nodeType !== 1 ) {
            previous = previous.previousSibling;
        }
        return previous;
    }
}
/********************** 缓动效果 begin***************************************************/
/**
 * 缓动效果
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
/**
 * 获取元素的样式
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
/********************** 缓动效果 end***************************************************/
/**
 * 获取id
 * @param element
 * @returns {Element}
 */
function $(element){
    return document.getElementById(element);
}
/**
 * 获取网页可视的宽度和高度
 * @returns {{width: (*|number), height: (Number|number)}}
 */
function client(){
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
}
/**
 * 清除选中文字
 * @returns {*}
 */
function getSelection(){
    //清除选中文字
    return window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}
/**
 * trim方法兼容函数封装
 * @param str
 * @returns {string|XML|void}
 */
function trim(str){
    return str.replace( /^\s+|\s+$/g ,'' );
}
/**
 * 把关于事件的封装兼容函数否放在 eventUtils 的对象中
 * 好处：1.方便统一管理；2.全局作用域减轻
 * 调用方式：对象.对象属性(event)--如：eventUtils.getEvent(event)
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, getTarget: Function, stopPropagetion: Function, addEvent: Function, removeEvent: Function}}
 */
var eventUtils = {
    //获取事件对象的兼容函数
    getEvent: function ( event ){
        return event || window.event;
    },
    //获取鼠标在页面上的水平坐标的兼容方式
    getPageX: function ( event ){
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    //获取鼠标在页面上的垂直坐标的兼容方式
    getPageY: function ( event ){
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    //获取事件目标的函数
    getTarget: function ( event ){
        return event.target || event.srcElement;
    },
    //阻止冒泡事件函数
    stopPropagetion: function (event){
        if ( event.stopPropagation ){
            return event.stopPropagation();//主流浏览器
        }else{
            return event.cancelBubble = true;//ie678
        }
    },
    //兼容所有浏览器的添加事件的函数 element:要绑定事件的元素对象,eventName:是字符串而且不加on,listener:事件处理函数
    addEvent: function ( element , eventName , listener ){
        if ( element.addEventListener ) {
            element.addEventListener( eventName , listener , false ); //主流浏览器
        } else if( element.attachEvent ) {
            element.attachEvent( 'on' + eventName , listener );//ie678
        }else {
            element[ 'on' + eventName] = listener;//ie5以上
        }
    },
    //兼容所有浏览器的移除事件的函数 element:要绑定事件的元素对象,eventName:是字符串而且不加on,listener:事件处理函数
    removeEvent: function ( element , eventName , listener ){
        if( element.removeEventListener ) {
            element.removeEventListener( eventName , listener , false );
        }else if ( element.detachEvent ) {
            element.detachEvent( 'on' + eventName , listener );
        }else {
            element[ 'on' + eventName ] = null ;
        }
    }
};








