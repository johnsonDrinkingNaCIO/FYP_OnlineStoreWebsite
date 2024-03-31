<?php
// 讀取數據庫配置
$config = parse_ini_file('db.ini');

// 建立數據庫連接
$conn = mysqli_connect("localhost", $config['username'], $config['password'], $config['database']);

// 獲取並轉義用戶輸入
$username = mysqli_real_escape_string($conn, $_POST['username']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);

// 將密碼轉換為哈希值
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// 創建預處理語句
$stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $email, $hashed_password);

// 執行語句
if ($stmt->execute() === TRUE) {
  header('Location: ../page-login-register.html');
} else {
  echo "Error: " . $stmt->error;
}

// 關閉連接
$conn->close();
?>
