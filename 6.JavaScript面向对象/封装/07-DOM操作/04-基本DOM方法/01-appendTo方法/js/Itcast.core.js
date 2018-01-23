(function ( window ) {

var arr = [],
    push = arr.push,
    slice = arr.slice;

function Itcast( selector ) {
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,

    length: 0,

    each: function ( callback ) {
        return Itcast.each( this, callback );
    },
    map: function ( callback ) {
        return Itcast.map( this, callback );
    },
    toArray: function () {

        return slice.call( this );
    }, 
    get: function ( index ) {
        // arguments.length == 0 
        if ( index === undefined ) {
            // 没有传参
            return this.toArray();
        } else {
            // 传入了参数
            if ( index >= 0 ) {
                return this[ index ];
            } else if ( index < 0 ) {
                return this[ this.length + index ];
            }
        }
        return this; // 如果传入的既不是正数, 也不是负数, 也不是没有传参
    },
    // 增加 end 方法
    end : function(){
        return this.prevObj || this;
    },
    // 链破坏操作封装成 方法
    pushStack : function( newObj ){
        newObj.prevObj = this;
        return newObj;
    }
};


Itcast.isArrayLike = function ( array ) {  
    var length = array && array.length;

    return typeof length === 'number' && length >= 0;

}
Itcast.each = function ( array, callback ) {
    var i, k;
    if ( Itcast.isArrayLike( array ) ) {
        // 使用 for 循环
        for ( i= 0; i < array.length; i++ ) {
            if( callback.call( array[ i ], i, array[ i ] ) === false ) break;
        }
    } else {
        // 使用 for-in 循环
        for ( k in array ) {
            if( callback.call( array[ i ], k , array[ k ] ) === false ) break;
        }
    }
    return array; 
}


Itcast.map = function ( array, callback ) {
    var i, k,
        res = [],
        tmp;
    if ( Itcast.isArrayLike( array ) ) {
        // 使用 for 循环
        for ( i= 0; i < array.length; i++ ) {
            tmp = callback( array[ i ], i );
            if ( tmp !== undefined ) {
                res.push( tmp );
            }
        }
    } else {
        // 使用 for-in 循环
        for ( k in array ) {
            tmp = callback( array[ k ], k );
            if ( tmp !== undefined ) {
                res.push( tmp );
            }
        }
    }
    return res; 
}
Itcast.select = function ( selector ) {
    return document.querySelectorAll( selector );
}



Itcast.extend = Itcast.fn.extend = function ( obj ) {
    for ( var k in obj ) {
        this[ k ] = obj[ k ];
    }
};






window.Itcast = window.I = Itcast; // 在 全局范围内 引入两个变量

})( window );

