<?php
  if(isset($_POST['username'])){
    if(isset($_POST['password'])){
      $user = $_POST['username'];
      $pass = $_POST['password'];
      if($user == "test" && $pass == "pass"){
        echo "Successfully logged in!";
      }
      echo "Something went wrong :^(";
    }
  } else {
    header("Location: http://facebook.com");
  }
?>
