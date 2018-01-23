/**
 * Created by panqiqin on 2017/11/8.
 */
$.fn.waterFall = function( options ){
    // 设置一些默认的属性
    var defaults = {
        // 图片之间的间距
        gap: 15
    };
    // 方便以后扩展
    defaults = $.extend( defaults , options );
    // 利用 $(this) ,重复使用率高
    var _this = $(this);
    var item = _this.children();

    // 设置默认属性
    var itemHeight = 0,
        itemsW = 0,
        itemW = 0,
        column = 0,
        arrHeight = [];
    // 获取图片父级盒子的宽度
    itemsW = _this.width();
    // 获取每个图片的宽度
    itemW = item.width();
    // 求一行能放下几列
    column = Math.floor( itemsW / itemW );
    // 遍历每一个图片
    arrHeight = []; // 保存每一列图片的高度
    $.each(item,function( i,v ){
        // 每个图片的高度
        itemHeight = $(v).height();
        if ( i < column ) {
            // 说明是第一列
            arrHeight[ i ] = itemHeight;
            $(v).css({
                top: 0,
                left: ( itemW + defaults.gap ) * i
            });
        }else {
            // 其他行
            // 第一行中最小值以及位置
            var minHeight = getMin(arrHeight).value;
            var minIndex = getMin(arrHeight).index;

            $(v).css({
                top: minHeight + defaults.gap,
                left: ( itemW + defaults.gap ) * minIndex
            });

            arrHeight[ minIndex ] += itemHeight + defaults.gap;
        } // else E
    }); //$.each(item,function(){}) E
    var max_val = getMax(arrHeight).value;
    // 8.2 给items这个大盒子设置高度
    _this.height(max_val);

    // 计算数组中最小值及其对应的索引值
    function getMin( arr ) {
        var min = {};
        min.index = 0;
        min.value = arr[min.index];
        $.each(arr,function( i,v ){
            if ( v < min.value ) {
                min.value = v;
                min.index = i;
            }
        });
        return min;
    };//getMin() E
    // 计算数组中最大值及其对应的索引值
    function getMax( arr ) {
        var max = {};
        max.index = 0;
        max.value = arr[max.index];
        $.each(arr,function( i,v ){
            if ( v > max.value ) {
                max.value = v ;
                max.index = i ;
            }
        });
        return max;
    }; // getMax() E


}; //$.fn.waterFall E