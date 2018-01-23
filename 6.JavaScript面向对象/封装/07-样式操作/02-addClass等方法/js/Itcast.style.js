(function ( window ) {

Itcast.fn.extend({
    css: function ( name, value ) {
        if ( value === undefined ) {
            // 一个参数
            if ( typeof name === 'string' ) {
                // 获得对应的样式
                return this[ 0 ].style[ name ] || window.getComputedStyle( this[ 0 ] )[ name ];
            } else {
                // 设置多个样式
                return this.each( function () {
                    // name 是一个对象
                    var that = this;
                    Itcast.each( name, function ( k, v ) {
                        that.style[ k ] = v;
                    });
                });
            }
        } else {
            // 设置一个样式
            return this.each(function () {
                this.style[ name ] = value;
            });
        }
    }/*,
    addClass: function ( name ) {
        return this.each(function () {
            if ( this.className ) {
                this.className += ' ' + name;
            } else {
                this.className = name;
            }
        });
    },
    removeClass: function ( name ) {
        // 将 this 中 的 className 属性中 与 name 同名的 样式去掉
        return this.each( function () {
            var names = this.className && this.className.split( ' ' ) || [];

            // filter 方法, map 方法
            // indexOf
            // var newNames = names.filter( function ( v, i ) {
            //     return v != name;
            // });

            var newNames = names.map( function ( v, i ) {
                if ( v != name ) {
                    return v;
                }
            });


            this.className = newNames.join( ' ' );
        });
    },
    hasClass: function ( name ) {
        // 判断 第 0 个元素是否含有
        var dom = this[ 0 ];
        var names = dom.className && dom.className.split( ' ' ) || [];
        for ( var i = 0; i < names.length; i++ ) {
            if ( names[ i ] == name ) {
                return true;
            }
        }
        return false;
    },
    toggleClass: function ( name ) {
        return this.each( function () {
            var iObj = Itcast( this );
            if ( iObj.hasClass( name ) ) {
                iObj.removeClass(  name );
            } else {
                iObj.addClass( name );
            }
        });
    }*/

});


})( window );