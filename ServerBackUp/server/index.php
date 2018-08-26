<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');
$snum = $_GET['id'];
?>
<!-- Programmed and Managed by Gavin Monroe Summer 2017-->
<!--Detailed info filled in by Terry Koppa in Summer 2017-->
<html>
<head>
	<title>Serverroom Wiki - Server 1</title>
	<link rel="icon" href="http://serverroom/imgs/favicon.png">
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<link rel="stylesheet" type="text/css" href="../css/wiki.css">
</head>
<body>
	<div id="topbar">
		<table id="bartable">
			<tr id="barrow">
                <td id="baritem"><a href="http://serverroom/"><span class="left" id="logoicon"></span></a></td>
				<td id="baritem1"><span id="barLogotext">Serverroom Wiki</span></td>
				<td id="baritem" class="right"><span id="searchicon"></span></td>
			</tr>
		</table>
	</div>
	<div id="spacerbar2">
		<p>.</p>
	</div>
    <?php
          $query = "SELECT * FROM servers WHERE id=$snum";

if ($stmt = mysqli_prepare($link, $query)) {

    $stmt->execute();
    
    $row = array();
    stmt_bind_assoc($stmt, $row);
         while ($stmt->fetch()) {


	echo('<div id="leftc">
		<a href="'.$row['Img'].'" id="rackIconLink" target="_blank">
			<span id="riText">View Full Image</span>
			<img id="previewImg" src="'.$row['Img'].'"/>
		</a>
		<div id="infoContainer">
			<ul id="infoList">');
             $rnum = $row['RackID'];
             $begQ = '<li><span class="liQuestion">';
             $begM = '</span><span class="liAnswer"> ';
             $begA = '</span></li>';
             $arr = explode("\n", $row["Details"]);

             foreach ($arr as &$value){
                 $pieces = explode(":", $value);
                 echo($begQ.$pieces[0].":".$begM.$pieces[1].$begA);
             }
			echo('</ul>
		</div>
	</div>
	<div id="centerc">
		<div id="borderTitle">
			<h2 id="wikiTitle">'.$row['Name'].'</h2>
		</div>
		<p id="wikiInfo">'.$row['LongDesc'].'</p>
	</div>');
    }
}
        ?>
	<div id="rightc">
		<div id="wikiRGTitle">
			<h2 id="wikiRTitle">Same Rack</h2>
		</div>
		<ul id="ulServers">
            <?php
          $query = "SELECT * FROM servers WHERE rackid=$rnum LIMIT 6";

if ($stmt = mysqli_prepare($link, $query)) {

    $stmt->execute();
    
    $row = array();
    stmt_bind_assoc($stmt, $row);
         while ($stmt->fetch()) {
        echo('<li class="liServer">
				<a onclick="goToServer('.$row['ID'].')" id="rackIconLink" target="_blank">
					<img id="serversIcon" src="'.$row['Icon'].'"/>
					<span id="riText">Go to Server</span>
				</a>
			</li>');
    }
}
        ?>
		</ul>
	</div>
</body>
    <script>
        function goToServer(num){
            window.location = "?id=" + num;
        }
    </script>
</html>