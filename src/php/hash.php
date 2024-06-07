<?php
// /xampp/htdocs/project/index.php

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($data)) {
        $email = $data['email'];
        $password = $data['password'];

        // Database connection details
        $servername = "localhost";
        $username = "root";
        $password_db = ""; 
        $dbname = "project";

        // Create connection
        $conn = new mysqli($servername, $username, $password_db, $dbname);

        // Check connection
        if ($conn->connect_error) {
            throw new Exception('Database connection failed: ' . $conn->connect_error);
        }

        // Hash the password using bcrypt
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);

        // Prepare the SQL statement
        $stmt = $conn->prepare("INSERT INTO autorisation (email, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $email, $hashed_password);

        // Execute the statement
        if ($stmt->execute() === TRUE) {
            echo json_encode(['status' => 'success', 'message' => 'Record added successfully']);
        } else {
            throw new Exception('Error: ' . $stmt->error);
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();
    } else {
        throw new Exception('Invalid request');
    }
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
