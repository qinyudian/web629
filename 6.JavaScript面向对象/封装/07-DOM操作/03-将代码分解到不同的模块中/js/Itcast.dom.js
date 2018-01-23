(function ( window ) {

// 注意: 由于 核心模块应该首先执行, 因此在这里 Itcast 构造函数, I 函数等可以直接使用
var Itcast = window.Itcast,
    I = Itcast;

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


// 其他


})( window );