function ajax(obj){
	var defaults = {
		type : 'get',
		url : '#',
		data : {},
		dataType : 'text',
		async : true,
		success : function(data){}
	};
	for ( var key in obj ) {
		defaults[key] = obj[key];
	}

	// 创建 XMLHttpRequest对象
	var xhr = null;
	if( window.XMLHttpRequest ){
		xhr = new XMLHttpRequest();
	}else {
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}
	/* data处理 */
	var param = '';
	for ( var attr in obj.data ) {
		param += attr + '=' + obj.data[attr] + '&';
	}
	if( param ) {
		param = param.substring(0,param.length -1);
	}
	if ( defaults.type == 'get' ){
		defaults.url += '?' + encodeURI(param);
	}

	// 准备发送
	xhr.open(defaults.type,defaults.url,defaults.async);

	var data = null;
	if ( defaults.type == 'post' ) {
		data = param;
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	}
	// 执行函数
	xhr.send(data);
	/* 是否同步处理 */
	if ( !defaults.async ) {
		if( defaults.dataType == 'json' ) {
			return JSON.parse(xhr.responseText);
		}else {
			return xhr.responseText;
		}	
	}

	// 指定回调函数
	xhr.onreadystatechange = function(){
		// 请求完成
		if ( xhr.readyState = 4 ){
			// 数据是否有效
			if( xhr.status = 200 ) {
				var data = xhr.responseText;
				if ( defaults.dataType == 'json' ){
					data = JSON.parse(data);
				}
				defaults.success(data);
			}
		}
	};

}