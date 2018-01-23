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

    init: function ( selector ) {
        // 需要判断, 根据传入的数据不同而实现不同的功能
        if ( !selector ) return this;



        if ( typeof selector == 'string' ) {
            // 判断是选择器 还是 html 字符串
            if ( selector.charAt( 0 ) == '<' && selector.charAt( selector.length - 1 ) == '>' ) {
                // HTML 标签
                push.apply( this, Itcast.parseHTML( selector ) );
                return this;
            } else {
                // 选择器
                push.apply( this, Itcast.select( selector ) ); 
                return this;
            }
        }

    },
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
    }
};

Itcast.fn.init.prototype = Itcast.fn;



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










// DOM 处理
function parseHTML ( htmlStr ) {
    var rest = [], i,
        div = document.createElement( 'div' ); 
    div.innerHTML = htmlStr; 
    for ( i = 0; i < div.childNodes.length; i++ ) {
        rest.push( div.childNodes[ i ] );
    }
    return rest
}
Itcast.parseHTML = parseHTML;






window.Itcast = window.I = Itcast; // 在 全局范围内 引入两个变量

})( window );

