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
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}










