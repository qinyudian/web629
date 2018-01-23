window.onload = function(){
    function $(element) {
        return document.getElementById(element);
    }
    //1.找人
    var wrap = $('wrap');//大盒子
    var arrow = $('arrow');//箭头的盒子
    var slide = $('slide');
    var lis = slide.children[0].children;
    var arrLeft = $('arrLeft');//左箭头
    var arrRight = $('arrRight');//右箭头
    //2.鼠标移入大盒子 左右箭头渐渐地显示 鼠标离开箭头渐渐地隐藏
    wrap.onmouseover = function() {
        animate( arrow, { 'opacity': 1 } );
    };
    wrap.onmouseout = function(){
      animate( arrow, { 'opacity' : 0} );
    };
    //3.配置图片的位置
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度
    function lisFun(){
        for( var i = 0 ; i < lis.length ; i++ ){
            animate( lis[i], config[i] , function(){
                flag = true;//执行完了之后打开阀门
            });
        }
    }
    lisFun();
    //4.左右箭头点击事件
    arrRight.onclick = function(){
        if(flag){
            flag = false;
            config.push(config.shift());//删掉数组中的第一个并放在数组的最后
            lisFun();
        }

    };
    arrLeft.onclick = function(){
        if(flag){
            flag = false;
            config.unshift( config.pop() );//删掉数组中的最后一个并放在数组的最前面
            lisFun();
        }

    };
    //5.添加节流阀
    var flag = true;//表示阀门是打开的



};