/**
 * Created by panqiqin on 2017/11/7.
 */
(function( window ){

var arr = [],
    push = arr.push;

function Itcast( selector ){
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    init: function( selector ) {
        var list = select( selector );
        push.apply( this,list );
    },
    each : function( callback ) {
        return each( this,callback );
    },
    map : function( callback ) {
        return map( this , callback );
    },
    toArray : function(){
        // 返回数组 each 方法
        /*var array = [];
        this.each(function(){
            array.push(this);
        });
        return array;*/
        // 返回数组 map方法
        /*return this.map(function(v){
            // v 是当前伪数组中的每一个元素
            return v;
        });*/
        // 返回数组 开始的索引到结束的索引，结束的索引娶不到
        return arr.slice.call( this );
    }
};
Itcast.fn.init.prototype = Itcast.fn;

// 封装是不是数组
function isArr(array) {
    var length = array && array.length;
    return typeof length == 'number' && length >= 0;
}

// 封装each方法
function each(array, callback) {
    var i, k;
    if (isArr(array)) {
        for (i = 0; i < array.length; i++) {
            if (callback.call(array[i], i, array[i]) === false) break;
        }
    } else {
        for (k in array) {
            if (callback.call(array[k], k, array[k])) break;
        }
    }
    return array;
}

// map方法
function map(array, callback) {
    var i,
        k,
        tmp,
        res = [];
    if (isArr(array)) {
        for (i = 0; i < array.length; i++) {
            tmp = callback(array[i], i);
            if (tmp !== undefined) {
                res.push(tmp);
            }
        }
    } else {
        for (k in array) {
            tmp = callback(array[k], k);
            if (tmp !== undefined) {
                res.push(tmp);
            }
        }
    }
    return res;
}

// 获取元素
function select(selector) {
    return document.querySelectorAll(selector);
}

window.Itcast = window.I = Itcast; // 在 全局范围内 引入两个变量

})( window );