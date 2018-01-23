(function ( window ) {

// 注意: 由于 核心模块应该首先执行, 因此在这里 Itcast 构造函数, I 函数等可以直接使用
var Itcast = window.Itcast,
    I = Itcast,
    arr = [],
    push = arr.push;

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
    appendTo: function ( selector ) {
        var iObj = Itcast( selector ),
            // 准备一个空的新的 Itcast 对象( 容器 )
            iNewObj = Itcast(),
            tmp, // 存储临时的数据
            rest = [],
            len = iObj.length,
            i;

        this.each(function () {
            
            for ( i = 0; i < len; i++ ) {
                tmp =i == len - 1 ? this : this.cloneNode( true );
                iObj[ i ].appendChild( tmp );
                rest.push( tmp );
            }

        }); 

        push.apply( iNewObj, rest );


        return this.pushStack( iNewObj );
    },
    append: function ( selector ) {
        
    }


});




Itcast.extend({
    unique: function ( iObj ) {
        var tmp = [],
            newIOIbj = Itcast();
        for ( var i = 0; i < iObj.length; i++ ) {
            if ( tmp.indexOf( iObj[ i ] ) == -1 ) {
                tmp.push( iObj[ i ] );
            }
        }
        push.apply( newIOIbj, tmp );
        return newIOIbj;
    }
});



Itcast.fn.extend( {
    parent: function () {
        var iObj = Itcast();

        push.apply( iObj, this.map(function ( v ) {
            return v.parentNode;
        }));
        // 去除重复
        iObj = Itcast.unique( iObj );

        return this.pushStack( iObj );
    }
});




})( window );