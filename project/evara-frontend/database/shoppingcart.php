<?php
// 讀取數據庫配置
$config = parse_ini_file('db.ini');

// 建立數據庫連接
$conn = mysqli_connect("localhost", $config['username'], $config['password'], $config['database']);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

$sql = "SELECT Image, Name, Price, Quantity, Subtotal FROM your_table_name";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出每行数据
    while($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td class='image'><img src='" . $row["Image"]. "' alt='#'></td>";
        echo "<td class='product-des'><h5 class='product-name'>" . $row["Name"]. "</h5></td>";
        echo "<td class='price' data-title='Price'><span>" . $row["Price"]. "</span></td>";
        echo "<td class='text-center' data-title='Stock'><div class='detail-qty border radius  m-auto'><span class='qty-val'>" . $row["Quantity"]. "</span></div></td>";
        echo "<td class='text-right' data-title='Cart'><span>" . $row["Subtotal"]. "</span></td>";
        echo "<td class='action' data-title='Remove'><a href='#' class='text-muted'><i class='fi-rs-trash'></i></a></td>";
        echo "</tr>";
    }
} else {
    echo "0 结果";
}
$conn->close();
?>
