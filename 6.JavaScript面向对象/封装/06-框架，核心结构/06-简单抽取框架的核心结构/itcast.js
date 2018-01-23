/**
 * Created by panqiqin on 2017/11/7.
 */
(function(){



function Itcast( selector ){
    return new Itcast.fn.init( selector );
}

Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    init: function( selector ) {
        var list = select( selector );
        [].push.apply( this,list );
    },
    each : function( callback ) {
        return each( this,callback );
    },
    map : function( callback ) {
        return map( this , callback );
    }
};
Itcast.fn.init.prototype = Itcast.fn;

// ��װ�ǲ�������
function isArr(array) {
    var length = array && array.length;
    return typeof length == 'number' && length >= 0;
}

// ��װeach����
function each(array, callback) {
    var i, k;
    if (isArr(array)) {
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
function map(array, callback) {
    var i,
        k,
        tmp,
        res = [];
    if (isArray(array)) {
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
function select(selector) {
    return document.querySelectorAll(selector);
}

window.Itcast = window.I = Itcast; // �� ȫ�ַ�Χ�� ������������

})();