<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Final Project Admin Portal</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="../statics/styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="../statics/js/adminPortal.js"></script>
  </head>
  <body class="bgGif">
    <div class="container">
        <h1 class="text-center titleText textShadow">Music Video Player Admin Portal</h1>
        <hr>
        <div class="form-inline">
          <div class="row">
            <div class="col-md-3 col-md-offset-1">
              <input type="button" id="addGenre" class="btn btn-warning btn-block" value="Add A Genre">
            </div>
            <div class="col-md-3 col-md-offset-1">
              <input type="button" id="deleteGenre" class="btn btn-danger btn-block" value="Delete A Genre">
            </div>
            <div class="col-md-3 col-md-offset-1">
              <input type="button" id="deleteVideo" class="btn btn-danger btn-block" value="Delete A Video">
            </div>
            <div class="col-md-3 col-md-offset-1">
              <input type="button" class="btn btn-info btn-block" value="Go Back" onclick="location.href='http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/views/homePage.php'">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-md-push-1">
            <div id="addGenreForm" class="form-group">
              <br>
              <input type="text" id="newGenre" class="form-control" placeholder="Enter Genre Here"><br>
              <input type="button" id="submitNewGenre" class="btn btn-success" value="Add Genre">
            </div>
          </div>
          <div class="col-md-3 col-md-push-2">
            <div id="deleteGenreForm" class="form-group">
              <br>
              <input type="text" id="genreToDelete" class="form-control" placeholder="Enter Genre Here"><br>
              <input type="button" id="submitDeleteGenre" class="btn btn-primary" value="Delete Genre">
            </div>
          <div class="col-md-3 col-md-push-3">
            <div id="deleteVideoForm" class="form-group">
              <br>
              <input type="text" id="genreToDelete" class="form-control" placeholder="Enter Genre Here"><br>
              <input type="button" id="submitDeleteGenre" class="btn btn-primary" value="Delete Genre">
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12">
            <h4 id="messageText" class="text-center"></h4>
          </div>
        </div>
    </div>
  </body>
</html>
