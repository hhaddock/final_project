<?php session_start() ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Hayden's Playlist App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="../statics/styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="../statics/js/getData.js"></script>
  </head>
  <body class="bgGif">
    <?php if(isset($_SESSION['loggedin'])){ ?>
        <div class="container">
          <h1 class="textShadow text-center titleText">Double H Music Video Player</h1>
          <hr>
          <!-- TDOD: Make navbar not shit -->
          <div id="navBar" class="text-center">
            <div class="btn-group">
              <input type="button" class="btn btnInline btn-lg btn-primary" id="showVideos" value="Show/Hide Videos">
              <input type="button" class="btn btnInline btn-lg btn-warning" id="addVideo" value="Add Video">
              <input type="button" class="btn btnInline btn-lg btn-success" id="adminPage" value="Administration" onclick="location.href='http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/views/adminPortal.php'">
              <input type="button" class="btn btnInline btn-lg btn-info" value="Logout" onclick="location.href='http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/statics/php/logout.php'">
            </div>
            <hr>
          </div>
          <!-- Add Video Form -->
          <div id="addVideoForm" class="form-group">
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="text" id="vidTitle" class="form-control" placeholder="Video Title"><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="text" id="vidLink" class="form-control" placeholder="YouTube Link"><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <select id="genreDD" class="form-control">
                  <option disabled selected value='none'>Choose a Genre</option>
                </select><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 col-md-offset-4">
                <input type="button" id="addVidBtn" class="btn btn-primary btn-block" value="Submit">
              </div>
            </div>
          </div>
        </div>

        <!-- Show All Videos -->
        <div id="videoArea" class="text-center">
          <div class="row">
            <div class="col-md-4 col-md-offset-3">
              <select id="genreFilterDD" class="form-control">
                <option disabled selected>Filter by a specific genre</option>
              </select>
            </div>
            <div class="col-md-2">
              <input type="button" id="resetFilterBtn" class="btn btn-secondary text-danger btn-block" value="Reset">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div id="videoDiv" class="form-group">

              </div>
            </div>
          </div>
        </div>
      <hr>
      <?php } else {
        header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
      } ?>
  </body>
</html>
