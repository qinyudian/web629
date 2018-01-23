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
    }

});


})( window );