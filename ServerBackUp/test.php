<?php
function getBirthDate($birthdate){
    //Declares
    $result = new array();
    
    //Find Age
    $date = new DateTime($birthdate);
    $now = new DateTime();
    $interval = $now->diff($date);
    $age = $interval->y;
    
    //Add age
    array_push($result, "age", $age);
     
    //Calc BirthDay
    if ($date == $now){
	//If bday is today
	echo("true");
    }else{
	//If bday isnot today
	echo("false");
    }
   
}
getBirthDate('09/05/1977');
?>
