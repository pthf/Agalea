<?php
	class Connect{
		public static function connection(){
			$connection = mysql_connect("localhost", "agalea_user", "agalea2016") or die(mysql_error());
			mysql_query("SET NAMES 'utf8'");
			mysql_select_db("agalea_site") or die(mysql_error());
			return $connection;
		}
	}
?>
