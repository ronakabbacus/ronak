<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM users";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        if (!empty($user->last_name)) { // Validate that lastname is not empty
            $sql = "INSERT INTO users(id, first_name, last_name, email, mobile, company, message, post_at) VALUES(null, :first_name, :last_name, :email, :mobile, :company, :message, :post_at)";
            $stmt = $conn->prepare($sql);
            $post_at = date('Y-m-d');
            $stmt->bindParam(':first_name', $user->first_name);
            $stmt->bindParam(':last_name', $user->last_name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':mobile', $user->mobile);
            $stmt->bindParam(':company', $user->$company);
            $stmt->bindParam(':message', $user->$message);
            $stmt->bindParam(':post_at', $post_at);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Lastname cannot be empty.'];
        }
        echo json_encode($response);
        break;

    // Rest of your code...
    // Remember to update the other cases (PUT and DELETE) if necessary.
}
