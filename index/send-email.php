<?php
// Prevent direct access
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.html");
    exit;
}

// Your email address
$to_email = "mitaliverma8853@gmail.com";

// Get form data and sanitize
$name = strip_tags(trim($_POST["name"]));
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$event_date = strip_tags(trim($_POST["eventDate"]));
$service = strip_tags(trim($_POST["service"]));
$message = strip_tags(trim($_POST["message"]));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: index.html?status=error");
    exit;
}

// Email subject
$subject = "New Booking Inquiry from $name";

// Email body
$email_body = "You have received a new booking inquiry from your website.\n\n";
$email_body .= "Here are the details:\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Event Date: $event_date\n";
$email_body .= "Service Required: $service\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to_email, $subject, $email_body, $headers)) {
    // Success - redirect back with success message
    header("Location: index.html?status=success");
} else {
    // Error - redirect back with error message
    header("Location: index.html?status=error");
}
exit;
?>
