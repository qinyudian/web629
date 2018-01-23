(function ( window ) {

Itcast.fn.extend({
    attr: function ( name, value ) {
        if  ( value === undefined ) {
            return this[ 0 ].getAttribute( name );
        } else {
            return this.each( function () {
                this.setAttribute( name, value );
            });
        }
    },
    prop: function ( name, value ) {
        if  ( value === undefined ) {
            return this[ 0 ][ name ];
        } else {
            return this.each( function () {
                this[ name ] = value;
            });
        }
    }
});


Itcast.each( {
    html: 'innerHTML',
    text: 'innerText',
    val: 'value'
    }, function ( k, v ) {
    Itcast.fn[ k ] = function ( value ) {
        if ( value === undefined ) {
            return this[ 0 ][ v ];
        } else {
            return this.each( function () {
                this[ v ] = value;
            });
        }
    };
});


})( window );