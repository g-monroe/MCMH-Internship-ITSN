<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');
$dbPass = "EnTurOWL17";
$snum = $_GET["id"];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	if ($dbPass != "EnTurOWL17"){
        echo("No!");
    }else{
        
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
			background-color:black;
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
			<span class="left" id="racksicon"></span><h2 id="racks" >Admin Panel</h2>
		</div>
        <form id="blackTable" method="post" action="">
        <table id="blackTable" style="list-style-option:none; width:100%;">
            <?php
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                if ($_POST['pass'] == "terry"){
                     echo('<tr>
                <li class="blackLink" style="float:left;width:30%"><a href="addRack.php">Add Rack</a></li>
            </tr>');
                     echo('<tr>
                <li class="blackLink" style="float:left;width:30%"><a href="editRack.php">Edit Rack</a></li>
            </tr>');
                     echo('<tr>
                <li class="blackLink" style="float:left;width:30%"><a href="addRack.php">Add Server</a></li>
            </tr>');
                     echo('<tr>
                <li class="blackLink" style="float:left;width:30%"><a href="addRack.php">Edit Server</a></li>
            </tr>');
                }else{
                   
                            echo('<tr>
                <li style="color:white;float:left;width:30%">Password:</li>
                <li style="float:right;width:60%"><input style="float:right;width:60%" name="pass" type="textbox" value="incorrect"/></li>
            </tr><input type="submit" value="submit"/>'); 
                }
            }else{
                            echo('<tr>
                <li style="color:white;float:left;width:30%">Password:</li>
                <li style="float:right;width:60%"><input style="float:right;width:60%" name="pass" type="textbox" value=""/></li>
            </tr><input type="submit" value="submit"/>');
            }
            ?>
        </table>
            </form>
	</div>
</body>
<footer>
</footer>
</html>