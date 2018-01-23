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
Itcast.fn.extend({
    // 把左边的元素追加到右边元素的内部
    appendTo : function( selector ) {
        var iObj = Itcast( selector),
            iNewObj = Itcast(), // 准备一个新的 itcast 对象（容器）
            tmp, // 用来存储临时的数据
            rest = [],
            len = iObj.length,
            i;
        this.each( function() {
            for( i = 0 ; i < len ; i++ ) {
                tmp = i === len-1 ? this : this.cloneNode(true);
                iObj[i].appendChild( tmp );
                rest.push( tmp );
            }
        });
        push.apply( iNewObj,rest );
        return this.pushStack( iNewObj );
    },
    // 把右边的元素追加到左边元素的内部
    /*append : function(){
        var iObj = Itcast( selector),
            iNewObj = Itcast(), // 准备一个新的 itcast 对象（容器）
            tmp, // 用来存储临时的数据
            rest = [],
            len = iObj.length,
            i;
        this.each( function() {
            for( i = 0 ; i < len ; i++ ) {
                tmp = i === len-1 ? this : this.cloneNode(true);
                iObj[i].appendChild( tmp );
                rest.push( tmp );
            }
        });
        push.apply( iNewObj,rest );
        return this.pushStack( iNewObj );
    }*/
});



})( window );