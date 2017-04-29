<?php
  if(isset($_POST['username'])){
    if(isset($_POST['password'])){
      $user = $_POST['username'];
      $pass = $_POST['password'];
      if($user == "test" && $pass == "pass"){
        echo "Successfully logged in!";
        session_start();
        $_SESSION['loggedin'] = "true";
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/views/homePage.html");
      } else {
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
      }
    }
  } else {
    header("Location: http://facebook.com");
  }
?>
