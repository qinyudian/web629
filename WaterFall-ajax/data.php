<?php 
	header('Content-Type:application/json; charset=utf-8');
	// file_get_contents() 方法 会将整个文件中的内容以字符串的方式输出，
	// 也就是从数据库中把数据读取出来
	$data = file_get_contents('./data.json');
	// json_decode() 将json字符串转换为PHP数组
	// json_encode() 将PHP数组 转换为json字符串
	// var_dump($data);   // 打印时，请把 header头部去掉
	$data = json_decode($data);
	$page = $_POST['page']; // 页码
	$pageSize = $_POST['pageSize']; // 每页的数据（10条）
	// 每页10条数据
	// 1  0-9
	// 2  10-19
	// 3  20-29
	// 4  30-39
	// ($page - 1) * $pageSize
	$starIndex = ($page - 1) * $pageSize; // 每页数据的起点
	// 截取PHP数组中10条数据
	$result = array_slice($data,$starIndex,$pageSize);
	$page++;  // 翻页
	// 放到PHP数组中去
	$arr = array("page"=>$page,"items"=>$result);

	// 将PHP数组 转换为json字符串输出
	echo json_encode($arr);
	
	// 延迟 1秒。
	sleep(1);
 ?>