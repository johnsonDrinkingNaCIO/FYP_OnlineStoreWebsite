<?php
// 讀取數據庫配置
$config = parse_ini_file('db.ini');

// 建立數據庫連接
$conn = mysqli_connect("localhost", $config['username'], $config['password'], $config['database']);

// 检查连接是否成功
if ($conn->connect_error) {
    die('Connect Error (' . $conn->connect_errno . ') ' . $conn->connect_error);
}

$color = $_POST['color'];
$size = $_POST['size'];
$quantity = $_POST['quantity'];
$product_id = $_POST['product_id'];
$product_name = $_POST['product_name'];

$sql = "INSERT INTO shoppingcart (color, size, quantity, product_id, product_name)
VALUES ('$color', '$size', '$quantity', '$product_id', '$product_name')";

if ($conn->query($sql) === TRUE) {
  // 新记录插入成功，重定向到 shop-cart.html
  header('Location: ../shop-cart.html');
  exit;
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
