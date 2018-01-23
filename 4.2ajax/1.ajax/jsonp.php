<?php

$arr = array("username"=>"战三","password"=>"123456");
// echo 'var data = 123;';
// echo 'var data ='.json_encode($arr);

// echo 'foo('.json_encode($arr).')';
$cb = $_GET['callback'];
// echo $cb;
echo $cb.'('.json_encode($arr).')';

?>