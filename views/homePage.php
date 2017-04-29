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
    <?php if($_SESSION['loggedin'] == "true"){ ?>
      <div class="container">
        <div class="jumbotron">
          <div id="navBar" class="form-inline">
            <input type="button" value="Show Videos">
          </div>
          <div id="videoDiv" class="text-center">

          </div>
        </div>
      </div>
      <?php } else {
        // header("Location: http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com/final_project/");
      } ?>
  </body>
</html>
