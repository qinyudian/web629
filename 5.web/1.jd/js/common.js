/**
 * 定义一个对象 来承载我们封装的事件
 */
window.itcast = {}; // 定义了一个itcast的对象

/* 封装 tap */
itcast.tap = function( dom,callback ){
	/**
	 * 要求 没有触发 touchmove 事件
	 *      并且响应速度要比click快
	 */
	if ( dom && typeof dom == 'object' ) {
		var isMove = false;
		var startTime = 0;
		dom.addEventListener('touchstart',function(e){
			startTime = Date.now();
		});
		dom.addEventListener('touchmove',function(e){
			isMove = true;
		});
		dom.addEventListener('touchend',function(e){
			if ( !isMove &&  (Date.now() - startTime) < 150 ) {
				callback && callback(e);
				// console.log(Date.now() - startTime);
			}
			/* 重置 参数 */
			isMove = false;
			startTime = 0;
		});

	}





}