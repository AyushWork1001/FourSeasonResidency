<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Assuming you have downloaded the PHPMailer files and placed them in a 'PHPMailer' folder
// Adjust the path if necessary
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Allow cross-origin requests from your frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Get the form data from the POST request
$data = json_decode(file_get_contents("php://input"));

// Basic validation for required fields
if (empty($data->name) || empty($data->phone)) {
    http_response_code(400);
    echo json_encode(["message" => "Name and phone number are required."]);
    exit;
}

$name = isset($data->name) ? trim($data->name) : '';
$email = isset($data->email) ? trim($data->email) : '';
$phone = isset($data->phone) ? trim($data->phone) : '';

// Create a new PHPMailer instance
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'ayush.work1001@gmail.com'; // Your Gmail address
    $mail->Password   = 'lttcllcwyhlelgek';   // Your App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('ayush.work1001@gmail.com', 'Modern Heights Enquiry');
    $mail->addAddress('ayush.work1001@gmail.com'); // The recipient of the inquiry

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Inquiry from " . $name;
    
    // Construct the email body
    $body = "<h2>Contact Details</h2>";
    $body .= "<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>";
    $body .= "<p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>";
    if (!empty($email)) {
        $body .= "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    }

    $mail->Body = $body;

    $mail->send();
    echo json_encode(["message" => "Thank you! Your inquiry has been sent successfully."]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Failed to send email. Please try again later. Mailer Error: {$mail->ErrorInfo}"]);
}
?>