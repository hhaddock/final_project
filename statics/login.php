<?php
  if(isset($_POST['username'])){
    $user = $_POST['username'];
    echo $user;
    header("Location: http://facebook.com");
  } else {
    
  }
?>
