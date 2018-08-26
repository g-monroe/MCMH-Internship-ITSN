<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');
$dbPass = "EnTurOWL17";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if ($dbPass != "EnTurOWL17"){
        echo("No!");
    }else{
        try{  
            $addTicket = $dbc->prepare("INSERT INTO racks (id, name, descr, img, loc, icon) VALUES (?, ?, ?, ?, ?, ?)");
            $addTicket->execute([$_POST['rackid'], $_POST['rackname'],  $_POST['rackdesc'],  $_POST['rackimg'],  $_POST['rackloc'], $_POST['rackicon']]);
	        echo("<h2>Success></h2>");
        }catch(PDOException $e){
            echo($e->getMessage());
        }//End(0)
        
    }
}
?>
<!-- Programmed and Managed by Gavin Monroe Summer 2017-->
<html>
<head>
	<title>Serverroom Wiki - Home</title>
	<link rel="icon" href="http://serverroom/imgs/favicon.png">
	<link rel="stylesheet" type="text/css" href="../css/main.css">
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
		<div class="Rounded stripes">
			<span class="left" id="racksicon"></span><h2 id="racks" >Add Rack</h2>
		</div>
        <form method="post" action="">
        <table style="list-style-option:none;">
            <tr>
                <li style="float:left;width:30%">Rack ID:</li>
                <li style="float:right;width:60%"><input name="rackid" type="textbox" value="1"/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Rack Name:</li>
                <li style="float:right;width:60%"><input name="rackname" type="textbox" value="Rack "/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Rack Image:</li>
                <li style="float:right;width:60%"><input name="rackimg" type="textbox" value="http://serverroom/imgs/racks/full_rack1.jpg"/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Rack Icon:</li>
                <li style="float:right;width:60%"><input name="rackicon" type="textbox" value="http://serverroom/imgs/racks/icon_rack1.jpg"/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Rack Descr:</li>
                <li style="float:right;width:60%"><input name="rackdesc" type="textbox" value=""/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Rack Loc:</li>
                <li style="float:right;width:60%"><input name="rackloc" type="textbox" value="Data Center"/></li>
            </tr>
        </table>
            <input type="submit" value="Submit"/>
            </form>
	</div>
</body>
<footer>
</footer>
</html>