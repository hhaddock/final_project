<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hayden's Playlist App</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Pacifico|Raleway" rel="stylesheet">
    <link rel="stylesheet" href="statics/styles.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="statics/js/formValidation.js"></script>
  </head>
  <body>
    <div class="paperTexture center-div container">
      <h1 class="text-center titleText textShadow">Welcome To Hayden's Playlist App</h1>
      <hr><br>
      <div class="text-center">
        <form class="form-group" id="loginForm" action="index.php" method="post">
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <input type="text" id="userID" class="shadow form-control" name="username" placeholder="Username"><br>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <input type="password" id="passID" class="shadow form-control" name="password" placeholder="Password"><br>
            </div>
          </div>

          <?php
            include 'statics/php/login.php';
            if(isset($_POST['username'])){
              $user = htmlspecialchars($_POST['username']);
              $pass = htmlspecialchars($_POST['password']);
              echo userLogin($user, $pass);
            }
          ?>

          <div class="row">
            <div class="col-md-4 col-md-offset-4">
              <input type="button" class="btn btn-primary btn-block" value="Log In" onclick="validateForm()">
            </div>
          </div>
        </form>
      </div>
      <br><br>
      <div class="row">
        <div class="col-md-4">
          <div class="paperTexture text-center">
            <h3>About :</h3>
            <hr>
            <span>This website was made so that people that wanted a central place to view custom playlists of videos could do so.</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="paperTexture text-center">
            <h3>Tech :</h3>
            <hr>
            <span>This website is powered by several tools, some of which are HTML, CSS, javascript, jQuery, node, express, mongodb and many more!</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="paperTexture text-center">
            <h3>Info :</h3>
            <hr>
            <span>Have any questions or comments about the website? feel free to send an email to <strong>hphmb2@mail.missouri.edu</strong> and let me know!</span>
          </div>
        </div>
      </div>
      <br>
    </div>
  </body>
</html>
