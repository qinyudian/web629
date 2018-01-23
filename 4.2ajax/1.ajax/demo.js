function ajax(obj){
	var defaults = {
		type : 'get',
		url : '#',
		data : {},
		dataType : 'text',
		async : true,
		succss : function(data){}
	}
	for ( var key in obj ) {
		defaults[key] = obj[key];
	}
	// 第一步 创建 XMLHttpRequest 对象 兼容
	var xhr = null;
	if ( window.XMLHttpRequest ) {
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject('Microsoft-XMLHTTP');
	}
	// 1.1 对data参数处理
	var param = '';
	for ( var attr in obj.data ) {
		// 拼接字符串
		param += attr +'='+ obj.data[attr] + '&' ; 
	}
	if ( param ) {
		param = param.substring(0,param.length -1); 
	}
	// dafaults.type ,get 请求处理
	if ( defaults.type == 'get' ) {
		defaults.url += '?' + encodeURI(param);
	}
	// 第二步 准备发送
	xhr.open(defaults.type,defaults.url,defaults.async);
	// 1.2 defaults.type , post 请求处理
	var data = null;
	if ( defaults.type == 'post' ) {
		data = param;
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}

	// 第三步 执行函数
	xhr.send(data);
	// 1.4 是否异步请求处理
	if ( !defaults.async ) {
		if ( defaults.dataType == 'json' ) {
			return JSON.parse(xhr.responseText);
		}else {
			return xhr.responseText;
		}
	}
	// 第四步 执行回调函数
	xhr.onreadystatechange = function(){
		// 请求完成
		if( xhr.readyState == 4 ) {
			// 数据是否可用
			if( xhr.status == 200 ) {
				var data = xhr.responseText;
				// 1.3 dataType 请求类型
				if ( defaults.dataType == 'json' ) {
					data = JSON.parse(data);
				}
				defaults.succss(data);
			}
		} 
	}


}