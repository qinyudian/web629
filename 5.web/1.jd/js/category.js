window.onload = function(){
	jd_category_left();
	jd_category_right();
}
// 左侧事件
function jd_category_left(){
	/**
	 * 需要分析
	 * 1. 使左侧可以滑动
	 * 2. 有一个上下拉刷新的形式
	 * 3. 点击到相应的菜单该菜单跑到最顶端，并且添加新的样式，要适当的变通	 * 
	 */
	var parentBox = document.querySelector('.jd_category_left');
	var childBox = parentBox.querySelector('ul');

	/* 获取父盒子和子盒子的高 */
	var parentHeight = parentBox.offsetHeight;
	var childHeight = childBox.offsetHeight;

	/* 能滑动的最大数值 */
	var maxY = 0;
	// 能滑动的最小数值
	var minY = parentHeight - childHeight;

	// 设定滑动的刷新区域
	var distance = 100;

	/* 能滑动的区间最大值 */
	var maxSwipe = maxY + 100;
	var minSwipe = minY - 100;

	/* 定义一些全局变量贯穿全局 */
	var startY = 0;
	var moveY = 0;
	var distanceY = 0;
	var currY = 0;
	var isMove = false;

	/* 设置公共的函数 */
	var addTransition = function(){
		childBox.style.webkitTransition = 'all .2s';
		childBox.style.transition = 'all .2s';
	}
	var removeTransition = function(){
		childBox.style.webkitTransition = 'none';
		childBox.style.transition = 'none';
	}
	var setTranslateY = function(y){
		childBox.style.webkitTransform = 'translateY('+y+'px)';
		childBox.style.transform = 'translateY('+y+'px)';
	}

	childBox.addEventListener('touchstart',function(e){
		startY = e.touches[0].clientY;
	});
	childBox.addEventListener('touchmove',function(e){
		moveY = e.touches[0].clientY;
		distanceY = moveY - startY;
		if ( (distanceY + currY) < maxSwipe && (distanceY + currY) > minSwipe ) {
			setTranslateY( distanceY + currY );
		}
	});
	childBox.addEventListener('touchend',function(e){
		if ( (distanceY + currY) > maxY ) {
			currY = maxY;
			addTransition();
			setTranslateY( currY );
		}
		else if( (distanceY + currY) < minY ) {
			currY = minY;
			addTransition();
			setTranslateY( currY );
		}
		else {
			currY = distanceY + currY;
		}
		// 重置参数
		startY = 0;
		moveY = 0;
		distanceY = 0;
		isMove = false;
	});

	// 点击事件
	var lis = childBox.querySelectorAll('li');
	itcast1.tap(childBox,function(e){
		var li = e.target.parentNode;
		var index = 0;
		for ( var i = 0; i < lis.length ; i++ ) {
			lis[i].className = '';
			lis[i].index = i;
		}
		li.className = 'now';

		var translateY = -( li.index*50 );
		if ( translateY > minY ) {
			currY = translateY;
			addTransition();
			setTranslateY( currY );
			console.log( currY );
		}else {
			currY = minY;
			removeTransition();
			setTranslateY( currY );
		}


	});

}
window.itcast1 = {};
itcast1.tap = function(dom,callback){
	var timeStart = 0;
	var timeEnd = 0;
	var isMove = false;
	if ( dom && typeof dom == 'object' ) {
		dom.addEventListener('touchstart',function(e){
			timeStart = Date.now();
		});

		dom.addEventListener('touchmove',function(e){
			isMove = true;
		});

		dom.addEventListener('touchend',function(e){
			timeEnd = Date.now() - timeStart;
			if ( !isMove && (timeEnd < 150) ) {
				callback && callback(e);
			}
			/* 重置参数 */
			timeStart = 0;
			timeEnd = 0;
			isMove = false;
		});

	}
}
// 右侧事件
function jd_category_right(){
	itcast.iScroll({
		swipeDom: document.querySelector('.jd_category_right'),
		swipeType: 'y',
		swipeDistance: 100
	});
}