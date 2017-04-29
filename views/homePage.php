<?php session_start() ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Final Project</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="../statics/styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="../statics/getData.js"></script>
  </head>
  <body>
    <?php if(isset($_SESSION['loggedin'])){ ?>
      <div class="container">
        <div class="jumbotron">
          <h1 class="text-center">Music Video Playlist App</h1>
          <hr>
          <div id="navBar" class="text-center form-inline">
            <input type="button" class="btn btn-lg btn-danger" id="showVideos" value="Show/Hide Videos">
            <input type="button" class="btn btn-lg btn-warning" id="addVideo" value="Add Video">
            <input type="button" class="btn btn-lg btn-info" value="Logout" onclick="location.href='http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/statics/php/logout.php'">
          </div>
          <hr>
          <div class="form-group">
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="text" class="form-control" placeholder="Video Title"><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="text" class="form-control" placeholder="YouTube Link"><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="button" class="btn btn-primary" value="Submit">
              </div>
            </div>
          </div>
          <div id="videoDiv" class="text-center">

          </div>
        </div>
      </div>
      <?php } else {
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
      } ?>
  </body>
</html>
