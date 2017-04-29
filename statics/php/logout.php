<?php
  session_start();
  session_unset();
  if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
      $params["path"], $params["domain"],
      $params["secure"], $params["httponly"]);
  }
  session_destroy();
  header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
?>
