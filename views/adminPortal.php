<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Final Project Admin Portal</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="../statics/styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="../statics/js/adminPortal.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="jumbotron">
        <h1>Music Video Player Admin Portal</h1>
        <hr>
        <div class="form-inline">
          <div class="row">
            <div class="col-md-4 col-md-offset-1">
              <input type="button" id="addGenre" class="btn btn-warning btn-block" value="Add A Genre">
            </div>
            <div class="col-md-4 col-md-offset-1">
              <input type="button" id="deleteVideo" class="btn btn-danger btn-block" value="Delete A Video">
            </div>
          </div>
        </div>
        <div id="addGenreForm" class="form-group">
          <input type="text" id="newGenre" class="form-control" placeholder="Enter Genre Here">
          <input type="button" id="submitNewGenre" class="btn btn-success" value="Add Genre">
        </div>
      </div>
    </div>
  </body>
</html>
