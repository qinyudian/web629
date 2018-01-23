(function ( window ) {

// 注意: 由于 核心模块应该首先执行, 因此在这里 Itcast 构造函数, I 函数等可以直接使用
var Itcast = window.Itcast,
    I = Itcast,
    arr = [],
    push = arr.push;


var init = Itcast.fn.init = function ( selector ) {
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
};

init.prototype = Itcast.fn;


})( window );