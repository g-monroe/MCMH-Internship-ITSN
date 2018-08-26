<?php
 function stmt_bind_assoc (&$stmt, &$out) {
    $data = mysqli_stmt_result_metadata($stmt);
    $fields = array();
    $out = array();

    $fields[0] = $stmt;
    $count = 1;

    while($field = mysqli_fetch_field($data)) {
        $fields[$count] = &$out[$field->name];
        $count++;
    }    

    call_user_func_array('mysqli_stmt_bind_result', $fields);
}
function dateDifference($date_1 , $date_2 , $differenceFormat = '%a' )
{
    $datetime1 = date_create($date_1);
    $datetime2 = date_create($date_2);
    
    $interval = date_diff($datetime1, $datetime2);
    
    return $interval->format($differenceFormat);
    
}
function cleanStrs($str){
        $str = str_replace(array('\r\n','\r','\n','\\r','\\n','\\r\\n'),'<br/>', $str);
        $str = stripslashes($str);
        return $str;
}
function get_string_between($string, $start, $end){
    $string = ' ' . $string;
    $ini = strpos($string, $start);
    if ($ini == 0) return '';
    $ini += strlen($start);
    $len = strpos($string, $end, $ini) - $ini;
    return substr($string, $ini, $len);
}

function conArray (&$stmt, &$out) {
    $data = mysqli_stmt_result_metadata($stmt);
    $fields = array();
    $out = array();

    $fields[0] = $stmt;
    $count = 1;

    while($field = mysqli_fetch_field($data)) {
        $fields[$count] = &$out[$field->name];
        $count++;
    }
        
    call_user_func_array('mysqli_stmt_bind_result', $fields);
    mysqli_stmt_fetch($stmt);
    return (count($out) == 0) ? false : $out;

}
function startsWith($haystack, $needle) {
    // search backwards starting from haystack length characters from the end
    return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== false;
}

function endsWith($haystack, $needle) {
    // search forward starting from end minus needle length characters
    return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== false);
}
function addAccess($ip, $lid, $dbc){
    $nowtime = date("Y-m-d H:i:s");
    try{
        //Update Session
        $qryUpdate = $dbc->prepare("UPDATE sessions SET AccessDate='$nowtime', LicenseID=? WHERE ip = ?");
        $qryUpdate->execute([$lid, $ip]);
        return true;
    }catch(PDOException $e){
        return false;
    }//End(1)
    return false;
}
function checkLicenseExpire($lid, $dbc){
    $nowtime = date("Y-m-d H:i:s");
     try{
        $qryLicense = $dbc->prepare("SELECT * FROM licenses WHERE id = ?");
        $qryLicense->execute([$lid]);
        $expiredate =  $qryLicense->fetchColumn(7);
        if (dateDifference($expiredate, $nowtime) == false){
            try{
                $updLicense = $dbc->prepare("UPDATE licenses SET Status=? WHERE id = ?");
                $updLicense->execute(["Expired", $lid]);
            }catch(Exception $e){

            }
        }
    }catch(PDOException $e){
        die('Error:Failed to Establish Query.');
    }//End(0)
}
function checkLicenseDate($date1, $date2){
    if ($date1 >  $date2){
        return true;
    }else{
        return false;
    }
}
function getProductLink($lid, $dbc){
     try{
        $qryLicense = $dbc->prepare("SELECT * FROM licenses WHERE id = ?");
        $qryLicense->execute([$lid]);
        $Prodid =  $qryLicense->fetchColumn(1);
        $qryProduct = $dbc->prepare("SELECT * FROM products WHERE id = ?");
        $qryProduct->execute([$Prodid]);
        $link = $qryProduct->fetchColumn(1);
        return $link;
    }catch(PDOException $e){
        die('Error:Failed to Establish Query.');
    }//End(0)
}
function getLicenseStatus($lid, $dbc){
    try{
        $qryLicense = $dbc->prepare("SELECT * FROM licenses WHERE id = ?");
        $qryLicense->execute([$lid]);
        $status =  $qryLicense->fetchColumn(11);
        return $status;
    }catch(PDOException $e){
        die('Error:Failed to Establish Query.');
    }//End(0)
}
function renewAccess($ip, $dbc){
    $nowtime = date("Y-m-d H:i:s");
    try{
        //Update Session
        $qryUpdate = $dbc->prepare("UPDATE sessions SET AccessDate='$nowtime' WHERE ip = ?");
        $qryUpdate->execute([$ip]);
    }catch(PDOException $e){
        die('Error:Failed to Update Access Session!');
    }//End(1)
}
function checkAccess($ip, $dbc){
    try{
        $qrySes = $dbc->prepare("SELECT * FROM sessions WHERE ip = ?");
        $qrySes->execute([$ip]);
        $lid =  $qrySes->fetchColumn(5);

        $qrySess = $dbc->prepare("SELECT * FROM sessions WHERE ip = ?");
        $qrySess->execute([$ip]);
        $adate =  $qrySess->fetchColumn(6);

        $alink = getProductLink($lid, $dbc);
        $curlink = str_replace("/products/","", $_SERVER['REQUEST_URI']);

        if (substr($curlink, 0, strlen($alink)) != $alink){
            return false;
        }
        if (checkSessionDate($adate) == true){
            return true;
        }else{
            return false;
        }
    }catch(PDOException $e){
        die('Error:Failed to Establish Query.');
    }//End(0)
}
function base64_url_encode($input) {
 return strtr(base64_encode($input), '+/=', '-_,');
}

function base64_url_decode($input) {
 return base64_decode(strtr($input, '-_,', '+/='));
}
function removeAccess($ip, $dbc){
    $nowtime = date("Y-m-d H:i:s");
    try{
        //Update Session
        $qryUpdate = $dbc->prepare("UPDATE sessions SET AccessDate='$nowtime', LicenseID=? WHERE ip = ?");
        $qryUpdate->execute(['', $ip]);
    }catch(PDOException $e){
        die('Error:Failed to Update Access Session!');
    }//End(1)
}
function addlog($ip, $user, $type, $info, $date, $dbc){
     $code = generateRandomString(64);
     try{
        $qryLog = $dbc->prepare("INSERT INTO logs (id, type, details, ip, userid, date) VALUES (?, ?, ?, ?, ?, ?)");
        $qryLog->execute([$code, $type, $info, $ip, $user, $date]);
     }catch(Exception $e){
     }
}
function encryptIt( $q ) {
    $cryptKey  = 'qJB0rGtIn5UB1xG03efyCp';
    $qEncoded      = base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), $q, MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ) );
    return( $qEncoded );
}

function decryptIt( $q ) {
    $cryptKey  = 'qJB0rGtIn5UB1xG03efyCp';
    $qDecoded      = rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $cryptKey ), base64_decode( $q ), MCRYPT_MODE_CBC, md5( md5( $cryptKey ) ) ), "\0");
    return( $qDecoded );
}
function checkConnection(){
    if (mysqli_connect_errno()) {
        return false;
    }
    return true;
}
function redirect($url){
    if (headers_sent()){
      die('<script type="text/javascript">window.location.href="' . $url . '";</script>');
    }else{
      header('Location: ' . $url);
      die();
    }    
}
 function photoUpload($access, $path, $name){
        $file_name = $_FILES[$access]['name'];
        $file_size =$_FILES[$access]['size'];
        $file_tmp =$_FILES[$access]['tmp_name'];
        $file_type=$_FILES[$access]['type'];   
        $file_ext = pathinfo($file_name, PATHINFO_EXTENSION);
        
        $expensions= array("jpeg","jpg","png", "bmp", "gif");         
        if(in_array($file_ext,$expensions)=== false){
            return false;
        }
        if($file_size > 2097152){
            return false;
        }               
        if(empty($errors)==true){
            move_uploaded_file($file_tmp,$path.$name.'.'.$file_ext);
            return true;
        }else{
            return false;
        }
    }
    function files_uploaded($name) {

if(!isset($_FILES[$name]) || $_FILES[$name]['error'] == UPLOAD_ERR_NO_FILE) {
    return false;
} else {
   return true;
}
    // return false if no files were found
   return false;
}
function fnEncrypt($sValue, $sSecretKey)
{
    return rtrim(
        base64_encode(
            mcrypt_encrypt(
                MCRYPT_RIJNDAEL_256,
                $sSecretKey, $sValue, 
                MCRYPT_MODE_ECB, 
                mcrypt_create_iv(
                    mcrypt_get_iv_size(
                        MCRYPT_RIJNDAEL_256, 
                        MCRYPT_MODE_ECB
                    ), 
                    MCRYPT_RAND)
                )
            ), "\0"
        );
}

function fnDecrypt($sValue, $sSecretKey)
{
    return rtrim(
        mcrypt_decrypt(
            MCRYPT_RIJNDAEL_256, 
            $sSecretKey, 
            base64_decode($sValue), 
            MCRYPT_MODE_ECB,
            mcrypt_create_iv(
                mcrypt_get_iv_size(
                    MCRYPT_RIJNDAEL_256,
                    MCRYPT_MODE_ECB
                ), 
                MCRYPT_RAND
            )
        ), "\0"
    );
}
function hexToStr($hex)
{
    $string='';
    for ($i=0; $i < strlen($hex)-1; $i+=2)
    {
        $string .= chr(hexdec($hex[$i].$hex[$i+1]));
    }
    return $string;
}
function checkRemoteFile($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    // don't download content
    curl_setopt($ch, CURLOPT_NOBODY, 1);
    curl_setopt($ch, CURLOPT_FAILONERROR, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    if(curl_exec($ch)!==FALSE)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function checkIMGURL($url){
    if (@getimagesize($url)) {
        return true;
    } else {
        return false;
    }
}
function noHTML($input, $encoding = 'UTF-8'){
    return htmlentities($input, ENT_QUOTES | ENT_HTML5, $encoding);
}
function checkgcap($captcha){
	if (!$captcha) {
		return false;
	}
	$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LfQUiIUAAAAACTzRVkXqNwPBRfjJU-t9Vo6plA4&amp;response=" . $captcha);
	if ($response.success == false) {
		return false;
	} else {
		return true;
	}
}
function checkgcaptwo($captcha){
	if(!$captcha){
        return false;
    }
    $response=json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LfQUiIUAAAAACTzRVkXqNwPBRfjJU-t9Vo6plA4&response=".$captcha), true);
    if($response['success'] == false){
        return false;
    }else{
        return true;
    }
}
function checkUserBan($user, $dbc){
	try {
		$qryUserBan = $dbc->prepare("SELECT * FROM accounts WHERE username = ?");
		$qryUserBan->execute([$user]);
        $Banned = $qryUserBan->fetchColumn(10);
		if ($Banned == true){
			return true;
		}else{
			return false;
		}
	}catch (Exception $e){
		return false;
	}
}
function checkIPBan($ip, $user, $dbc){
	try {
		$qryUserBan = $dbc->prepare("SELECT count(*) FROM bans WHERE ip = ? OR userid = ?");
		$qryUserBan->execute([$ip, $user]);
		$Banned = $qryUserBan->fetchColumn();
		if ($Banned >= 1){
			return true;
		}else{
			return false;
		}
	}catch (Exception $e){
		return false;
	}
}
function seo_friendly_url($string){
    $string = str_replace(array('[\', \']'), '', $string);
    $string = preg_replace('/\[.*\]/U', '', $string);
    $string = preg_replace('/&(amp;)?#?[a-z0-9]+;/i', '-', $string);
    $string = htmlentities($string, ENT_COMPAT, 'utf-8');
    $string = preg_replace('/&([a-z])(acute|uml|circ|grave|ring|cedil|slash|tilde|caron|lig|quot|rsquo);/i', '\\1', $string );
    $string = preg_replace(array('/[^a-z0-9]/i', '/[-]+/') , '-', $string);
    return strtolower(trim($string, '-'));
}
function checksession($ip, $link){
    if(!isset($_COOKIE['session'])) {
        return "notSet";
    }else{
        //Check if session exists
        $query = "SELECT * FROM sessions WHERE ip=?";

        if ($stmt = mysqli_prepare($link, $query)) {
            $stmt->bind_param("s", $ip);
            $stmt->execute();
            $row = array();
            stmt_bind_assoc($stmt, $row);
            $sessions=0;
            $sessionID;
            $sessionUser;
            $sessionDate;
            $sessionUID;
            $lid;
            // Count
            while ($stmt->fetch()) {
                $sessions++;
                $sessionID = $row["HWID"];
                $sessionDate = $row["Date"];
                $sessionUser = $row["UserID"];
                $sessionUID = $row["ID"];
                $lid = $row["LicenseID"];
            }
            if ($sessions == 1){ //If there is 1 session
                if (checkSessionDate($sessionDate) == true){
                    return (array($sessionID,"valid",$sessionUser, $sessionUID, $lid));
                }else{
                    return "invalid";
                }
            }elseif ($sessions != 0 && $sessions > 1){ //If there is more than 1 session created!
                return "tooMany";
            }elseif ($sessions == 0){ //If its not found
                return "notFound";
            }
    // Continue on as usual.
        }
    }
}
function checkSessionDate($date){
    $nowtime = date("Y-m-d H:i:s");
    $timer = date("Y-m-d H:i:s", strtotime($date) + 60*60);
 
    if ($timer > $nowtime){    
        return true; //Good.
    }else{
        return false; // Not good.
    }//End(1)
}
function renewsession($ip, $dbc){
    $nowtime = date("Y-m-d H:i:s");
    try{
        //Update Session
        $qryUpdate = $dbc->prepare("UPDATE sessions SET Date='$nowtime' WHERE ip = ?");
        $qryUpdate->execute([$ip]);
    }catch(PDOException $e){
        die('Error:Failed to Update Session!');
    }//End(1)
}
function clearsession($ip, $dbc){

    unset($_COOKIE['session']);
    setcookie('session', false, time() - 60*100000, '/');
    $res = setcookie('session', '', time() - 3600);
    $past = time() - 3600;
    foreach ( $_COOKIE as $key => $value )
    {
        setcookie( $key, $value, $past, '/' );
    }
    try{
        //Delete Session
        $qryDelete = $dbc->prepare("DELETE FROM sessions WHERE ip = ?");
        $qryDelete->execute([$ip]);
        return true;
    }catch(PDOException $e){
        die('Error:Failed to Update Session!');
    }//End(1)
    return false;
}
function setsession($ip, $date, $uid, $hwid, $dbc){
    //If user isnt using the application!
    if(!isset($hwid)){
        $hwid = "web-user";
    }
    //Clear
    clearsession($ip, $dbc);
    //Add
    $code = generateRandomString(192);
    try{
        //Add Session
        $qryInsert = $dbc->prepare("INSERT INTO sessions (ID, UserID, Date, IP, HWID) VALUES ('$code', '$uid', '$date', '$ip', '$hwid')");
        $qryInsert->execute();
        setcookie("session", $code, time()+3600 , '/' );
        return true;
    }catch(PDOException $e){
        die('Error:Failed to Update Session!');
    }//End(1)
    return false;
}
function setpage($id){
    setcookie("pageid", $id, time()+3600 , '/' );
}
function generateRandomString($num){
    $chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charsLength = strlen($chars);
    $code = '';
    for ($i = 0; $i < $num; $i++) {
        $code .= $chars[rand(0, $charsLength - 1)];
    }//End(1)
    return $code;
}
function checkUserBanAdv($ip, $uid, $dbc){
    //Grab Required User
    try{
        $qryBanned = $dbc->prepare("SELECT * FROM accounts WHERE email =? OR username = ? OR ip=?");
        $qryBanned->execute([$uid, $uid, $ip]);
        $Banned = $qryBanned->fetchColumn(6);
         if ($Banned == 1){
             return true;
         }
    }catch(PDOException $e){
        die('Error:Failed to Establish Query.');
    }//End(0)
    return false;
}
function passError($info){
    setcookie("error", $info, time()+3600 , '/' );
}
function changeAdminStatus($user, $status, $dbc){
    try{
        $qryUsers = $dbc->prepare("UPDATE admins SET status = ? WHERE username = ? OR email = ?");
        $qryUsers->execute([$status, $user, $user]);
        return true;
    }catch(PDOException $e){
        return false;
    }//End(0)
}
function changeAdminStatusbyIP($ip, $status, $dbc){
    try{
        $qryUsers = $dbc->prepare("UPDATE admins SET status = ? WHERE ip = ?");
        $qryUsers->execute([$status, $ip]);
        return true;
    }catch(PDOException $e){
        return false;
    }//End(0)
}
function checkAdminBanned($user, $ip, $dbc){
    try{
        $qryUsers = $dbc->prepare("SELECT * FROM admins WHERE username = ? OR email = ? AND banned=1");
        $qryUsers->execute([$status, $user, $user]);

        return true;
    }catch(PDOException $e){
        return false;
    }//End(0)
}
function clearError(){
    unset($_COOKIE['error']);
    setcookie('error', false, time() - 60*100000, '/');
    $res = setcookie('error', '', time() - 3600);  
}
function checkAdminAPI($uid, $dbc){
    try{
        $numUsers = $dbc->prepare("SELECT * FROM apis WHERE userid= ?");
        $numUsers->execute([$uid]);
        $numUsers = $numUsers->fetchColumn();
        if ($numUsers == 1){
            return true;
        }else{
            return false;
        }
    }catch(PDOException $e){
        return false;
    }//End(0)
}
function sendGMail($to, $from, $pass, $msg, $altmsg, $sub){
$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'tls'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = $from;
$mail->Password = $pass;
$mail->SetFrom($from);
$mail->Subject = "Test";
$mail->Body = "hello";
$mail->AddAddress($to);

 if(!$mail->Send()) {
    return false;
 } else {
    return true;
 }
}
?>