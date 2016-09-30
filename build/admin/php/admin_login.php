<?php
	include('connect.php');
	$username = $_POST['username'];
	$password = $_POST['password'];
	$query = "SELECT * FROM adminuser WHERE adminName = '".$username."' AND adminPassword = '".$password."'";
	$result = mysql_query($query,Connect::connection()) or die(mysql_error());
	$line = mysql_fetch_array($result);
	if(mysql_num_rows($result) > 0){
		date_default_timezone_set('America/Mexico_City');
		$lastDate = date("Y-m-d H:i:s");
		$query2 = "UPDATE adminuser SET adminLastConnection = '".$lastDate."' WHERE idAdmin = '".$line['idAdmin']."'";
		$result2 = mysql_query($query2,Connect::connection()) or die(mysql_error());
		session_start();
		$_SESSION['idAdmin'] = $line['idAdmin'];
		echo 1;
	}else{
		echo -1;
	}
