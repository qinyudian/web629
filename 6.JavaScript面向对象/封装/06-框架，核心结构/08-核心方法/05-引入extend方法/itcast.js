/**
 * Created by panqiqin on 2017/11/7.
 */
(function( window ){

var arr = [],
    push = arr.push,
    slice = arr.slice;

function Itcast( selector ){
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    length : 0,
    init: function( selector ) {
        if ( !selector ) return this;
        var list = Itcast.select( selector );
        push.apply( this,list );
    },
    each : function( callback ) {
        return Itcast.each( this,callback );
    },
    map : function( callback ) {
        return Itcast.map( this , callback );
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
    },
    get : function( num ){
        // arguments 方法
        /*var arg = arguments,
            e = arguments[0],
            length = arguments.length;
            //console.log(length);
        if ( e === undefined ) {
            // 没有传参
            return this.toArray();
        }else { //console.log( e );
            if ( e >= 0 ){
                // 传入正数的参数
                //console.log(this);
                return this[ e ];
            }else if ( e < 0 ) {
                // 传入负数的参数
                //console.log( this.length + e );
                return this[ this.length + e ];
            }
        }
        return this;*/
        // 一般方法
        /*if ( num === undefined ) {
            return this.toArray();
         }else {
             if ( num >= 0 ) {
                return this[ num ];
             }else if ( num < 0 ) {
                return this[ this.length + num ];
             }
         }
         return this;*/
        // 优化一般方法
        return ( num != null ) ?
            ( num >= 0 ) ? this[ num ] : this[ this.length + num ]:
            slice.call(this);

    }
};
Itcast.fn.init.prototype = Itcast.fn;

// 封装是不是数组
Itcast.isArr = function (array) {
    var length = array && array.length;
    return typeof length == 'number' && length >= 0;
}

// 封装each方法
Itcast.each = function (array, callback) {
    var i, k;
    if (Itcast.isArr(array)) {
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
Itcast.map = function (array, callback) {
    var i,
        k,
        tmp,
        res = [];
    if (Itcast.isArr(array)) {
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
Itcast.select = function (selector) {
    return document.querySelectorAll(selector);
}


Itcast.extend = Itcast.fn.extend = function ( obj ) {
    for ( var k in obj ) {
        this[k] = obj[k];
    }
}


window.Itcast = window.I = Itcast; // 在 全局范围内 引入两个变量

})( window );