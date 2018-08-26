<?php
//Initial Connection File; Very important to establish a secure connection befo ->
// -re any work is done.
if (!defined('auth_yOsyfiwXFCuddleJnsiKKJx3_ForbiddenCheck')) {
    die(file_get_contents("../404/portable.html"));
}
$link = mysqli_connect("localhost", "root", "EnTurOWL17", "serverroom");
//Declare dbc as a mysql Database connection to the database named "kevin_gate" ->
// to overall perform required requests
try{;
	$dbc = new PDO('mysql:host=localhost;dbname=serverroom','root','EnTurOWL17');
	$dbc->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
	die('Error:Failed to Establish Connection!');
}

//End of Document.
?>
