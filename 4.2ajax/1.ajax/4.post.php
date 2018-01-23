<?php
    //设置服务器的文件类型
    //header("content-type:text/html; charset=utf-8");
	header("Content-type: text/html; charset=utf-8");
    //这里是根据表单的name属性获取值
    $username = $_POST['username'];
    $password = $_POST['password'];
    if( $username == 'admin' && $password == '111' ){
        echo "登录成功，用户名:$username 密码：$password";
    }else{
        echo '用户名或者密码错误';
    }

?>