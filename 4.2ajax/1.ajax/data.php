<?php
    $code = $_POST['code'];
    $arr = array();
    $arr['123'] = array("username"=>"����","chinese"=>"140","math"=>"140","english"=>"130");
    $arr['124'] = array("username"=>"����","chinese"=>"120","math"=>"110","english"=>"130");
    $arr['125'] = array("username"=>"����","chinese"=>"110","math"=>"140","english"=>"130");
    $arr['126'] = array("username"=>"����","chinese"=>"90","math"=>"140","english"=>"70");


    if( $code == 'admin' ){
        foreach( $arr as $value ){
            echo "<ul><li>������$value[username]</li><li>���ģ�$value[chinese]</li><li>��ѧ��$value[math]</li><li>Ӣ�$value[english]</li></ul>";
        }
    }else{
        $sour = $arr[$code];
        echo "<ul><li>������$sour[username]</li><li>���ģ�$sour[chinese]</li><li>��ѧ��$sour[math]</li><li>Ӣ�$sour[english]</li></ul>";
    }



?>