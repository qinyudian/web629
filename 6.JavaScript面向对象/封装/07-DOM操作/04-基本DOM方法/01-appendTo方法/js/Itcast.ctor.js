(function ( window ) {

// 注意: 由于 核心模块应该首先执行, 因此在这里 Itcast 构造函数, I 函数等可以直接使用
var Itcast = window.Itcast,
    I = Itcast,
    arr = [],
    push = arr.push;
// 给 Itcast 的 原型增加一个属性, 以便可以容易的判断当前对象的类型
    Itcast.fn.type = 'Itcast';

var init = Itcast.fn.init = function ( selector ) {
    // 需要判断, 根据传入的数据不同而实现不同的功能
    if ( !selector ) return this;
    // 处理字符串
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
    // 处理 dom 元素: nodeType
    if ( selector.nodeType ) {
        // 如果是 DOM 元素, 应该将其包装成 一个 Itcast 的对象
        push.call( this , selector );
        return this;
    }
    // 处理 Itcast 元素
    if ( selector.type == 'Itcast' ) {
        push.apply( this , selector );
        return this;
    }
    // 处理 function 函数
    if ( typeof selector == 'function' ) {

    }
};

init.prototype = Itcast.fn;


})( window );