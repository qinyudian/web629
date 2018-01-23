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










