<?php
  function userLogin($user, $pass){
    if($user == "test" && $pass == "pass"){
      session_start();
      $_SESSION['loggedin'] = "true";
      header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/views/homePage.php");
      return "Successfully logged in!";
    } else {
      // header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project");
      return '<h3>Error: username or password is incorrect</h3>';
    }
  }
?>
