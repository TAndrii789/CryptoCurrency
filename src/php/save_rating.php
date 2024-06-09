<?php
session_start();

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

error_log("Session ID: " . session_id());
error_log("User ID: " . (isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 'Not Set'));

if (!isset($_SESSION['user_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'User not authenticated']);
    exit();
}

$user_id = $_SESSION['user_id'];
$input = json_decode(file_get_contents('php://input'), true);
$favoriteCoins = json_encode($input['favoriteCoins']);

$conn = new mysqli('localhost', 'root', '', 'project');

if ($conn->connect_error) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit();
}

$sql = "UPDATE autorisation SET rating = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", $favoriteCoins, $user_id);

if ($stmt->execute()) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Failed to save favorite coins']);
}

$stmt->close();
$conn->close();
?>
