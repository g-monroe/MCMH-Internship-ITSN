<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('../../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('../../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');
$rnum = $_GET['id'];
?>
<!-- Programmed and Managed by Gavin Monroe Summer 2017-->
<html>
<head>
	<title>Serverroom Wiki - Rack 1</title>
	<link rel="icon" href="http://serverroom/imgs/favicon.png">
	<link rel="stylesheet" type="text/css" href="../../css/main.css">
	<style type="text/css">
		body{
			margin:0px;
			padding: 0px;
			background-image: url("../../imgs/back1.jpg");
    		background-repeat: repeat;
		}
	</style>
</head>
<body style="background-color: white;">
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
		<div class="Rounded stripes">
			<a href="../../index.html" id="backLink"><span id="backicon"></span><h2 id="backText">Back</h2></a>
			<input onkeyup="search();" id="searchBox" type="textbox"/>
			<span id="searchBoxIcon"></span>
		</div>
        <?php
          $query = "SELECT * FROM servers WHERE rackid=$rnum";

if ($stmt = mysqli_prepare($link, $query)) {

    $stmt->execute();
    
    $row = array();
    stmt_bind_assoc($stmt, $row);
         while ($stmt->fetch()) {
        echo('<div id="Item" class="Rounded serverItem" style="background-color:white;height:100px;">
		 	<a href="'.$row['Img'].'" id="rackIconLink" target="_blank">
				<img id="serverIcon" src="'.$row['Icon'].'"/>
				<span id="riText">View Full Image</span>
			</a>
			<table id="serverTable">
				<tr><td><h2 id="racksTitle">'.$row['Name'].'</h2></td></tr>
				<tr id="DescServer"><td><p id="racksDesc">'.$row['ShortDesc'].'</p></td></tr>
				<tr><td><button style="font-size:12px;" id="b1" onclick="goToServer('.$row['ID'].')" class="button button2">View Details</button></td></tr>
			</table>
		</div>');
    }
}
        ?>
		
	</div>
</body>
<footer>
	<script>
        function goToServer(num){
            window.location = "../../server.php?id=" + num;
        }
		function search(){
			var els = document.getElementsByClassName("serverItem");
			var searchValue = document.getElementById("searchBox").value;
			console.log(document.getElementById("searchBox").value);
			for(var i = 0; i < els.length; i++){
  				if(els[i].innerHTML.indexOf(searchValue) > -1){
    				els[i].style.display = "block";
  				}else{
  					els[i].style.display = "none";
  				}
			}
		}
	</script>
</footer>
</html>