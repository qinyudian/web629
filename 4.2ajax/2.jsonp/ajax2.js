function ajax(obj) {
	// jsonp 仅仅支持get请求
	var defaults = {
		url: '#',
		dataType: 'jsonp',
		jsonp: 'callback',
		data: {},
		success: function(data) {
			console.log(data)
		}
	}
	for (var key in obj) {
		defaults[key] = obj[key];
	}
	// 回调函数的名字
	// var cdName = '';
	var cbName = 'jQuery' + ('1.11.1' + Math.random()).replace(/\D/g, "") + '_' + (new Date().getTime());
	if (defaults.jsonpCallback) {
		cbName = defaults.jsonpCallback;
	}

	// 回调函数，调用方式：服务端相应内容来调用
	// 向Window对象中添加了一个方法，方法名称是cbName
	window[cbName] = function(data) {
			obj.success(data); //这里的data是实参
		}
		// data处理
	var param = '';
	for (var attr in obj.data) {
		param += attr + '=' + obj.data[attr] + '&';
	}
	if (param) {
		param = param.substring(0, param.length - 1);
		param = '&' + encodeURI(param);
	}

	// 动态创建script标签
	var script = document.createElement('script');
	script.src = defaults.url + '?' + defaults.jsonp + '=' + cbName + param;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);

}