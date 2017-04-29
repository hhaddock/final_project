<?php
  if(isset($_POST['username'])){
    $user = $_POST['username'];
    echo $user;
  } else {
    header("Location: http://facebook.com");
  }
?>
