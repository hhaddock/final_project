<?php
  if(isset($_POST['username'])){
    $user = $_POST['username'];
    echo $user;
  } else {
    header('Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/');
  }
?>
