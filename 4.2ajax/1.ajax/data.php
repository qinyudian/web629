<?php
    $code = $_POST['code'];
    $arr = array();
    $arr['123'] = array("username"=>"王五","chinese"=>"140","math"=>"140","english"=>"130");
    $arr['124'] = array("username"=>"张三","chinese"=>"120","math"=>"110","english"=>"130");
    $arr['125'] = array("username"=>"李四","chinese"=>"110","math"=>"140","english"=>"130");
    $arr['126'] = array("username"=>"赵武","chinese"=>"90","math"=>"140","english"=>"70");


    if( $code == 'admin' ){
        foreach( $arr as $value ){
            echo "<ul><li>姓名：$value[username]</li><li>语文：$value[chinese]</li><li>数学：$value[math]</li><li>英语：$value[english]</li></ul>";
        }
    }else{
        $sour = $arr[$code];
        echo "<ul><li>姓名：$sour[username]</li><li>语文：$sour[chinese]</li><li>数学：$sour[math]</li><li>英语：$sour[english]</li></ul>";
    }



?>