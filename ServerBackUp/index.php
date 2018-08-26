<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');

?>
<!-- Programmed and Managed by Gavin Monroe Summer 2017-->
<html>
<head>
	<title>Serverroom Wiki - Home</title>
	<link rel="icon" href="http://serverroom/imgs/favicon.png">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<style type="text/css">
		body{
			margin:0px;
			padding: 0px;
			background-image: url("imgs/back1.jpg");
    		background-repeat: repeat;
		}
	</style>
</head>
<body>
	<div id="topbar">
		<table id="bartable">
			<tr id="barrow">
				<td id="baritem"><span class="left" id="logoicon"></span></td>
				<td id="baritem1"><span id="barLogotext">Serverroom Wiki </span></td>
				<td id="baritem" class="right"><span id="searchicon"></span></td>
			</tr>
		</table>
	</div>
	<div id="spacerbar">
		<p>.</p>
	</div>
	<div id="centerer">
        <?php
         if ($_GET['pass'] != "terry"){
             echo(' <div><form method="GET" action="">Admin Password: <input name="pass" type="textbox"/> <input type="submit" value="Submit"></form></div>');
         }
        ?>
		<div class="Rounded stripes">
			<span class="left" id="racksicon"></span><h2 id="racks" >Data Center Racks</h2>
		</div>
        <?php
            $query = "SELECT * FROM racks WHERE loc='Data Center'";
$arr;
if ($stmt = mysqli_prepare($link, $query)) {

    $stmt->execute();
    
    $row = array();
    stmt_bind_assoc($stmt, $row);
    // loop through all result rows
    while ($stmt->fetch()) {
         if ($_GET['pass'] == "terry"){
                     echo('<div class="Rounded" style="background-color:white;height:150px;">
		 	<a href="'.$row['Img'].'" id="rackIconLink" target="_blank">
				<img id="rackIcon" src="'.$row['Icon'].'"/>
				<span id="riText">View Full Image</span>
			</a>
			<table id="serverTable">
			<!--Edit the text under here-->
				<tr><td><h2 id="racksTitle">'.$row['Name'].'</h2></td></tr>
				<!--Edit the text under here-->
				<tr id="DescRack"><td><p id="racksDesc">'.$row['Descr'].'</p></td></tr>
				<tr><td><button id="b1" onclick="goToRack('.$row['ID'].');" class="button button2">View Servers</button></td><td><button id="b1" onclick="goToEditRack('.$row['ID'].');" class="button button2">Edit</button></td></tr>
			</table>
		</div>');
         }else{
                     echo('<div class="Rounded" style="background-color:white;height:150px;">
		 	<a href="'.$row['Img'].'" id="rackIconLink" target="_blank">
				<img id="rackIcon" src="'.$row['Icon'].'"/>
				<span id="riText">View Full Image</span>
			</a>
			<table id="serverTable">
			<!--Edit the text under here-->
				<tr><td><h2 id="racksTitle">'.$row['Name'].'</h2></td></tr>
				<!--Edit the text under here-->
				<tr id="DescRack"><td><p id="racksDesc">'.$row['Descr'].'</p></td></tr>
				<tr><td><button id="b1" onclick="goToRack('.$row['ID'].');" class="button button2">View Servers</button></td></tr>
			</table>
		</div>');
         }
    }
}
        ?>
	
		<!--<div class="Rounded stripes">
			<span class="left" id="racksicon"></span><h2 id="racks" >AHU 8 Control Racks</h2>
		</div>
		<div class="Rounded" style="background-color:white;height:150px;">
			<a href="imgs/racks/full_rack5.jpg" id="rackIconLink" target="_blank">
				<span id="rackIcon" class="rackIcon5"></span>
				<span id="riText">View Full Image</span>
			</a>
			<table id="rackTable">-->
			<!--Edit the text under here-->
				<!--<tr><td><h2 id="racksTitle">Rack 5</h2></td></tr>
			
				<tr id="DescRack"><td><p id="racksDesc">Contains servers: OEM, OMP, Clinical Servers. Server contains major application services for function as well. Server is also can handle more than 200 concurrent users. Was installed August 29th 2016 by Terry(Network Admin).</p></td></tr>
				<tr><td><button class="button button2">View Servers</button></td></tr>
			</table>
		</div>-->
	</div>
	<div id="bottomBar">
	<ul id="bottomList">
		<li class="left"><span id="credits">Programmed by Gavin Monroe; Summer 2017</span></li>
		<li id="loginLink" class="right"><a href="admin/">Admin</a></li>
	</ul>
</div>
</body>
<footer>
    <script>
        function goToEditRack(num){
            window.location = "admin/editRack.php?id=" + num;
        }
        function goToRack(num){
            window.location = "rack/?id=" + num;
        }
    </script>
</footer>
</html>