<?php
    //���÷��������ļ�����
    //header("content-type:text/html; charset=utf-8");
	header("Content-type: text/html; charset=utf-8");
    //�����Ǹ��ݱ���name���Ի�ȡֵ
    $username = $_POST['username'];
    $password = $_POST['password'];
    if( $username == 'admin' && $password == '111' ){
        echo "��¼�ɹ����û���:$username ���룺$password";
    }else{
        echo '�û��������������';
    }

?>