<?php
$dev = true;

require "./backEndPhp/ConnectDB.php";
require "./backEndPhp/searchFile.php"; // searchFile($directory, $filename)

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

error_log("New Request : \n", 3, "php://stdout");

if ($method === "GET") {
    if ($path === '/') {
        // If the path is the root '/', serve the index.html file.
        $fileExists = './webSite/index.html';
    } else {
        // Otherwise, use the basename of the path to search for the file.
        $resourceName = basename($path);
        $fileExists = searchFile(getcwd(), $resourceName);
    }

    error_log($path . " File is on Server: " . $fileExists, 3, "php://stdout");

    if ($fileExists && is_readable($fileExists)) {
        // Determine the content type
        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $contentType = $finfo->file($fileExists);

        // Set the appropriate headers
        header('Content-Type: ' . $contentType);
        header('Content-Length: ' . filesize($fileExists));

        // Clear any previous output buffering
        if (ob_get_level()) {
            ob_end_clean();
        }

        // Read the file and send it to the output buffer
        readfile($fileExists);
        exit;
    } else {
        // File not found or not readable, send a 404 response
        header("HTTP/1.1 404 Not Found");
        exit("404 Not Found");
    }
}
?>