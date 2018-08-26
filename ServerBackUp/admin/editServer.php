<?php
define('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck', true);
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/dbcon.php');
require_once('../php/Ovf9prLWterryOsyfiwXFCuddleJnsiKKJx554nrAGYghostbusterskhWnVv9mYOEiUShm/funcs.php');
$dbPass = "EnTurOWL17";
$snum = $_GET["id"];
if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
	if ($dbPass != "EnTurOWL17"){
        echo("No!");
    }else{
        try{  
            $stringdesc = substr($_POST['serverdesc'],0,48).'...';
            $addTicket = $dbc->prepare("UPDATE `servers` SET Name=?,RackID=?,ShortDesc=?,LongDesc=?,Details=?,Icon=?,Img=? WHERE ID=?");
            $addTicket->execute([$_POST['servername'],  $_POST['rackid'],  $stringdesc,  $_POST['serverdesc'], $_POST['serverdetails'], $_POST['servericon'], $_POST['serverimg'], $snum]);
	        echo("<h2 style='margin-top:100px;'>Success</h2>");
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
			<span class="left" id="racksicon"></span><h2 id="racks" >Add Server</h2>
		</div><form method="post" action="">
        <table style="list-style-option:none; width:100%;">
         <?php
        
        
          $query = "SELECT * FROM servers WHERE id=$snum";

if ($stmt = mysqli_prepare($link, $query)) {

    $stmt->execute();
    
    $row = array();
    stmt_bind_assoc($stmt, $row);
         while ($stmt->fetch()) {


	echo('<a href="'.$row["Img"].'" id="rackIconLink" target="_blank">
            <img style="width:220px;height:100px;border:1px solid black;border-radius:4px;" src="'.$row["Icon"].'" /></a>
      
        
        <form method="post" action="">
        <table style="list-style-option:none; width:100%;">
            <tr>
                <li style="float:left;width:30%">Rack ID:</li>
                <li style="float:right;width:60%"><input style="float:right;width:60%" name="rackid" type="textbox" value="'.$row["RackID"].'"/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Server Name:</li>
                <li style="float:right;width:60%"><input style="float:right;width:60%" name="servername" type="textbox" value="'.$row["Name"].'"/></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Server Image:</li>
                               <li style="float:right;width:60%"><input style="float:right;width:60%" name="serverimg" type="textbox" value="'.$row["Img"].'"/></li>
               
            </tr>
            <tr>
                <li style="float:left;width:30%">Server Icon:</li>
                <li style="float:right;width:60%"><input style="float:right;width:60%" name="servericon" type="textbox" value="'.$row["Icon"].'"/></li>
               
            </tr>
            <tr>
                <li style="float:left;width:30%">Server Desc</li>
                <li style="float:right;width:60%"><textarea style="float:right;width:60%" name="serverdesc" rows="10" cols="10" >'.$row["LongDesc"].'</textarea></li>
            </tr>
            <tr>
                <li style="float:left;width:30%">Server Details:</li>
                <li style="float:right;width:60%"><textarea style="float:right;width:60%" name="serverdetails" rows="10" cols="10" >'.$row["Details"].'</textarea></li>
            </tr>
        </table>');
    }
}
        ?>
            
            <input type="submit" value="Submit"/>
            </form>
	</div>
</body>
<footer>
</footer>
</html>