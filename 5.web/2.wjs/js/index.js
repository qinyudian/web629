$(function(){
    banner();

});
// banner
function banner(){
    /**
     * 1.获取后台数据
     * 2.渲染到html中
     * 3.pc和移动显示不同的a和img*/
    // 获取后台数据
    var myData;
    var getData = function(callback){
        if ( myData ) {
            callback && callback(myData);
            return false;
        }
        $.ajax({
            url:'pcjs/index.json',
            data: {},
            type: 'get',
            dateType: 'json',
            success: function(data){
                myData = data;
                callback && callback(myData);
            }
        });
    };
    // 渲染到html
    var renderHtml = function(){
        getData(function(data){
            var w = $(window).width();
            var isMobile = false;
            if ( w < 768 ) {
                isMobile = true;
            }
            var tempaltePoint = _.template($('#pointHtml').html());
            var tempalteItem = _.template($('#itemHtml').html());
            var pointHtml = tempaltePoint({model:data});

            $('.carousel-indicators').html(pointHtml);


            var imageData = {
                list: data,
                isMobile: isMobile
            };
            var itemHtml = tempalteItem({model:imageData});
            $('.carousel-inner').html(itemHtml);
        });
    };
    renderHtml();



}