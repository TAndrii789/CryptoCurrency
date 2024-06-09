<?php
session_start();

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

error_log("Session ID: " . session_id());
error_log("User ID: " . (isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 'Not Set'));

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User not authenticated']);
    exit();
}

$user_id = $_SESSION['user_id'];

$conn = new mysqli('localhost', 'root', '', 'project');

if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit();
}

$sql = "SELECT rating FROM autorisation WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->bind_result($favoriteCoins);
$stmt->fetch();

echo json_encode(['status' => 'success', 'favoriteCoins' => json_decode($favoriteCoins)]);

$stmt->close();
$conn->close();
?>
