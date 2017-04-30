<?php
  if(isset($_POST['username'])){
    if(isset($_POST['password'])){
      $user = htmlspecialchars($_POST['username']);
      $pass = htmlspecialchars($_POST['password']);
      if($user == "test" && $pass == "pass"){
        echo "Successfully logged in!";
        session_start();
        $_SESSION['loggedin'] = "true";
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/views/homePage.php");
      } else {
        echo '<h1>Error: username or password is incorrect</h1>';
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
      }
    }
  }
?>
