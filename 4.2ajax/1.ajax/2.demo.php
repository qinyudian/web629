<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <?php
        //二维数组
        $arr = array();
        $arr['apple'] = array('color'=>'red','shape'=>'round');
        $arr['orange'] = array('color'=>'orange','shape'=>'round');
        $arr['banana'] = array('color'=>'orange','shape'=>'long');

        echo "<pre>";
        print_r($arr);
    ?>
</body>
</html>