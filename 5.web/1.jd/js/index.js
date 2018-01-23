window.onload = function(){
	seacher();
	banner();
}
// 搜索事件
function seacher(){
	var jd_header = document.querySelector('.jd_header');
	var jd_banner = document.querySelector('.jd_banner');
	var bannerHeight = jd_banner.offsetHeight;

	window.onscroll = function(e){
		var top =  document.body.scrollTop ;
		var opacity = 0;
		if ( top > bannerHeight ) {
			opacity = 0.85;
		}else {
			opacity = 0.85*(top/bannerHeight);
		}
		jd_header.style.background = "rgba(201,21,35,"+opacity+")";
	}
}
// 幻灯事件
function banner(){
	var jd_banner = document.querySelector('.jd_banner');
	var jd_ul = jd_banner.querySelector('ul:nth-of-type(1)');
	var jd_ol = jd_banner.querySelector('ol:nth-of-type(1)');
	// 图片的个数
	var imgs = jd_ul.querySelectorAll('li'); console.log(imgs.length);
	var points = jd_ol.querySelectorAll('li'); console.log(points.length);
	var width = jd_banner.offsetWidth;
	// 定义贯穿全局的参数
	var index = 1;

	/* 设置公共的函数 */
	var addTransition = function(){
		jd_ul.style.webkitTransition = 'all .2s';
		jd_ul.style.transition = 'all .2s';
	}
	var removeTransition = function(){
		jd_ul.style.webkitTransition = 'none';
		jd_ul.style.transition = 'none';
	}
	var setTranslateX = function(x){
		jd_ul.style.webkitTransform = 'translateX('+x+'px)';
		jd_ul.style.transform = 'translateX('+x+'px)';
	}
	// 自动轮播
	var timer = null;
	var speed = 1000;
	timer = setInterval(autoplay,speed);
	function autoplay() {
		index++;		
		addTransition();  
		setTranslateX( -index*width );	
	}

	// 动画结束执行事件
	itcast2.transitionEnd(jd_ul,function(){
		if ( index >= imgs.length -1 ) { 
			index = 1;
			removeTransition();  
			setTranslateX( -index*width );	

		}else if ( index <= 0 ) {
			index = imgs.length -2 ;
			removeTransition();  
			setTranslateX( -index*width );	
		}
		pointsFun();
	});
	// 下面点点跟随事件
	var pointsFun = function(){
		for ( var i = 0 ; i < points.length ; i++ ) {
			points[i].className = '';
		}
		points[index-1].className = 'now';
	}
	// 触摸事件


}
window.itcast2 = {};
itcast2.transitionEnd = function(dom,callback){
	if ( dom && typeof dom == 'object' ) {
		dom.addEventListener('webkitTransitionEnd',function(){
			callback && callback();
		});
		dom.addEventListener('transitionEnd',function(){
			callback && callback();
		});
	}


}