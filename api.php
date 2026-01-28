
<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = 'localhost';
$db   = 'auracare_db';
$user = 'root'; // Default XAMPP/WAMP user
$pass = '';     // Default XAMPP/WAMP pass
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    // Return empty but valid responses if DB isn't set up yet
    echo json_encode(['error' => 'Database connection failed. Please ensure auracare_db exists.', 'msg' => $e->getMessage()]);
    exit;
}

$action = $_GET['action'] ?? '';

if ($action === 'products') {
    try {
        $stmt = $pdo->query("SELECT * FROM products");
        echo json_encode($stmt->fetchAll());
    } catch (Exception $e) {
        echo json_encode([]);
    }
} 

else if ($action === 'product' && isset($_GET['id'])) {
    try {
        $stmt = $pdo->prepare("SELECT * FROM products WHERE id = ?");
        $stmt->execute([$_GET['id']]);
        $res = $stmt->fetch();
        echo json_encode($res ? $res : null);
    } catch (Exception $e) {
        echo json_encode(null);
    }
}

else if ($action === 'create_order') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($data) {
        try {
            $stmt = $pdo->prepare("INSERT INTO orders (id, user_id, total, status) VALUES (?, ?, ?, ?)");
            $stmt->execute([$data['id'], $data['userId'], $data['total'], 'Pending']);
            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
        }
    }
}
?>
