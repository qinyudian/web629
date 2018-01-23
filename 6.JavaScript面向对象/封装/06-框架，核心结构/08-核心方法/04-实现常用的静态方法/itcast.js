/**
 * Created by panqiqin on 2017/11/7.
 */
(function( window ){

var arr = [],
    push = arr.push,
    slice = arr.slice;

function Itcast( selector ){
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    length : 0,
    init: function( selector ) {
        if ( !selector ) return this;
        var list = Itcast.select( selector );
        push.apply( this,list );
    },
    each : function( callback ) {
        return Itcast.each( this,callback );
    },
    map : function( callback ) {
        return Itcast.map( this , callback );
    },
    toArray : function(){
        // �������� each ����
        /*var array = [];
        this.each(function(){
            array.push(this);
        });
        return array;*/
        // �������� map����
        /*return this.map(function(v){
            // v �ǵ�ǰα�����е�ÿһ��Ԫ��
            return v;
        });*/
        // �������� ��ʼ������������������������������Ȣ����
        return arr.slice.call( this );
    },
    get : function( num ){
        // arguments ����
        /*var arg = arguments,
            e = arguments[0],
            length = arguments.length;
            //console.log(length);
        if ( e === undefined ) {
            // û�д���
            return this.toArray();
        }else { //console.log( e );
            if ( e >= 0 ){
                // ���������Ĳ���
                //console.log(this);
                return this[ e ];
            }else if ( e < 0 ) {
                // ���븺���Ĳ���
                //console.log( this.length + e );
                return this[ this.length + e ];
            }
        }
        return this;*/
        // һ�㷽��
        /*if ( num === undefined ) {
            return this.toArray();
         }else {
             if ( num >= 0 ) {
                return this[ num ];
             }else if ( num < 0 ) {
                return this[ this.length + num ];
             }
         }
         return this;*/
        // �Ż�һ�㷽��
        return ( num != null ) ?
            ( num >= 0 ) ? this[ num ] : this[ this.length + num ]:
            slice.call(this);

    }
};
Itcast.fn.init.prototype = Itcast.fn;

// ��װ�ǲ�������
Itcast.isArr = function (array) {
    var length = array && array.length;
    return typeof length == 'number' && length >= 0;
}

// ��װeach����
Itcast.each = function (array, callback) {
    var i, k;
    if (Itcast.isArr(array)) {
        for (i = 0; i < array.length; i++) {
            if (callback.call(array[i], i, array[i]) === false) break;
        }
    } else {
        for (k in array) {
            if (callback.call(array[k], k, array[k])) break;
        }
    }
    return array;
}

// map����
Itcast.map = function (array, callback) {
    var i,
        k,
        tmp,
        res = [];
    if (Itcast.isArr(array)) {
        for (i = 0; i < array.length; i++) {
            tmp = callback(array[i], i);
            if (tmp !== undefined) {
                res.push(tmp);
            }
        }
    } else {
        for (k in array) {
            tmp = callback(array[k], k);
            if (tmp !== undefined) {
                res.push(tmp);
            }
        }
    }
    return res;
}

// ��ȡԪ��
Itcast.select = function (selector) {
    return document.querySelectorAll(selector);
}

window.Itcast = window.I = Itcast; // �� ȫ�ַ�Χ�� ������������

})( window );