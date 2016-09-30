<?php
  session_start();
  include('../php/connect.php');
  $query = "SELECT * FROM adminuser WHERE idAdmin = ".$_SESSION['idAdmin'];
  $result = mysql_query($query,connect::connection()) or die(mysql_error());
  $line = mysql_fetch_array($result);
?>
<div class="logoNav">
	<img src="./../src/images/logo.svg">
</div>
<div class="msgWelcome" style="width: 90%; height: auto; text-align: center; color: #FFF;" >
	<h5 style="display: inline-block; "><span style="color: #ffb0b7 !important;">Welcome: <strong><?= $line['adminName'] ?></span></strong>
</div>
<div class="menuNav" ng-controller="menuNavController">
	<div class="row">
		<div class="col-md-12">
      <ul class="nav nav-pills nav-stacked">
  			<li style="background: #ffb0b7; color: #fff;" role="presentation" ng-class="{active:selected===1}" ng-click="changeNav(1)"><a href="#/home-slider" style="color: #fff;"><span class="glyphicon glyphicon-briefcase" ></span>Home Slider</a></li>
        <li style="background: #ffb0b7; color: #fff;" role="presentation" ng-class="{active:selected===2}" ng-click="changeNav(2)"><a href="#/products" style="color: #fff;"><span class="glyphicon glyphicon-briefcase" ></span>Products</a></li>
        <li style="background: #ffb0b7; color: #fff;" role="presentation" ng-class="{active:selected===3}" ng-click="changeNav(3)"><a href="#/blog-tips" style="color: #fff;"><span class="glyphicon glyphicon-briefcase" ></span>Blog Tips</a></li>
  		</ul>
      </ul>
		</div>
	</div>
</div>
