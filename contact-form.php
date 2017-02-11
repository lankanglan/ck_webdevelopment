<?php 

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require 'phpmailer/PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer();

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'error_log';

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username ='ckwebdevelopment8888@gmail.com';

//Password to use for SMTP authentication
$mail->Password = "ck20172017";

//Set who the message is to be sent from
$mail->setFrom('from@example.com', 'First Last');

//Set an alternative reply-to address
$mail->addReplyTo('ckwebdevelopment8888@gmail.com', 'First Last');

//Set who the message is to be sent to
$mail->addAddress('sallychen426@gmail.com', 'Sally Chen');

//Set the subject line
$mail->Subject = $_POST['inputSubject'];

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

//Replace the plain text body with one created manually
$mail->Body = "This email is from " . $_POST['inputName'] . " email: " . $_POST['inputEmail']. "." . "Message Content:" . $_POST['inputMessage'];

//Attach an image file
//$mail->addAttachment('images/phpmailer_mini.png');

/*send the message, check for errors
 if (!$mail->send()) {
 echo "Mailer Error: " . $mail->ErrorInfo;
 } else {
 echo "Message sent!";
 }*/
if (isset($_POST['ref'])) {
	$mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
}

if(!$mail->send()) {
	$result = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
	echo json_encode($result);
	exit;
} else{
	$result = array('success' => true, 'message' => 'Thanks! We have received your message.');
	echo json_encode($result);
	exit;
}












?>