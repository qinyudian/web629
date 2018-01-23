<?php

	// $name = $_GET['username'];
	// $pw = $_GET['password'];
	$name = $_POST['username'];
	$pw = $_POST['password'];


//echo "$name".'==========='."$pw";
//echo $name;

echo '{"username":"'.$name.'","password":"'.$pw.'"}';



?>