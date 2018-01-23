<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <?php
        //二维数组
        //$arr = array(123,456,789);
        //$arr['apple'] = array('color'=>'red','shape'=>'round');
        //$arr['orange'] = array('color'=>'orange','shape'=>'round');
        //$arr['banana'] = array('color'=>'orange','shape'=>'long');

        //$arr = array(123,456,789);
        //for( $i = 0 ; $i < count($arr) ; $i++ ){
        //    echo $arr[$i].'<br>';
        //}
            .length == count
        //$arr = array(123,456,789);
        //foreach( $arr as $value ){
        //    echo $value.'-----------<br>';
        //}

        $arr = array(123,456,789);
        foreach( $arr as $key => $value ){
            echo $key.'======='.$value.'<br>';
        }



    ?>
</body>
</html>