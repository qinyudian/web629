<?php
	$code = $_GET['code'];
	// $code = $_POST['code'];

	$books = array();
	$books['hlm'] = array('bookname'=>'红楼梦','author'=>'曹雪芹','desc'=>'封建王朝的贵族生活');
	$books['sgyy'] = array('bookname'=>'三国演义','author'=>'罗贯中','desc'=>'一个杀伐相争的时代');
	$books['shz'] = array('bookname'=>'水浒传','author'=>'施耐庵','desc'=>'108位英雄好汉的故事');
	$books['xyj'] = array('bookname'=>'西游记','author'=>'吴承恩','desc'=>'佛教与道家的相争');

	if ( array_key_exists($code,$books) == 1 ){
		$book = $books[$code];
		echo json_encode($book);
	}else {
		echo '{ "flag" : 0 }';
	}

?>