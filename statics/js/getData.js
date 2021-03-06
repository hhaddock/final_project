$(document).ready(function(){
  $('#videoArea').hide();
  $('#addVideoForm').hide();
  getAllVideoData();
  $('#videoArea').fadeIn("slow");

  $('#showVideos').click(function(){
    $('#vidTitle').val('');
    $('#vidLink').val('');
    // clearDD();
    // getVideoGenres();
    $('#addVideoForm').hide();
    $('#videoArea').fadeToggle("slow");
  });

  $('#addVideo').click(function(){
    $('#videoArea').hide();
    $('#addVideoForm').fadeIn("slow");
  });

  $('#addVidBtn').click(function(){
    submit = validateNewVideoForm();
    if(submit == 1){
      submitVideo();
      clearVideos();
      getAllVideoData();
      $('#vidTitle').val('');
      $('#vidLink').val('');
      $('#addVideoForm').slideUp();
      $('#videoArea').fadeIn("slow");
    } else {
      alert("Error: all form elements must be filled out.");
    }
  });

  $('#resetFilterBtn').click(function(){
    clearVideos();
    getAllVideoData();
  });

  $('#genreFilterDD').on('change',function(){
    genre = $('#genreFilterDD').val()
    filterVideos(genre);
  });

  //new video submission form validation for DD
  validate();
  $('#vidTitle, #vidLink').on('keyup',validate);
});

function getAllVideoData(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    type: 'get',
    dataType: 'json',
    success: function(res){
      clearDD();
      for(i = 0; i < res.length; i++){
        formatVideos(res[i].title, res[i].videoID);
      }
      getVideoGenres();
    }
  });
}

function getVideoGenres(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres",
    type: 'get',
    dataType: 'json',
    success: function(res){
      for(i = 0; i < res.length; i++){
        populateDropDowns(res[i].genre);
      }
    }
  });
}

function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();
  genre = $('#genreDD').val();

  secret = vidLink.split("v=");
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    type: 'post',
    dataType: 'json',
    data: {title: title, videoID: secret[1], genre: genre},
    success: function(res){
      clearVideos();
      getAllVideoData();
      title = "";
      vidLink = "";
    }
  });
}

function filterVideos(songGenre){
  clearVideos();
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    type: 'get',
    dataType: 'json',
    success: function(res){
      for(i = 0; i < res.length; i ++){
        if(res[i].genre == songGenre){
          formatVideos(res[i].title, res[i].videoID);
        }
      }
    }
  });
}

function formatVideos(title, id){
  pic = "http://img.youtube.com/vi/"
  // $('#videoDiv').append("<br><div class='box paperTexture'><h2>"+title+"</h2><hr><iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br><br></div>");
  $('#videoDiv').append("<br><div class='box paperTexture'><h2>"+title+"</h2><hr><div id='"+id+"' onclick='playVideo(id)'><img class='videoBg' width='560' height='315' src='"+pic + id+"/0.jpg' alt='Error: video could not load'></img><img src='../assets/playButton.png' alt='Error' width='75px' height='50px' class='videoFg'></img</div><br><br></div>");
}

function playVideo(id){
  vid = "https://www.youtube.com/embed/";
  $('#'+id).replaceWith("<iframe width='560' height='315' src='"+vid + id+"?autoplay=1' frameborder='0' allowfullscreen></iframe>");
}

function clearVideos(){
  $('#videoDiv').text('');
}

function clearDD(){
  $('#genreDD').text('');
  $('#genreDD').append("<option disabled selected value='none'>Choose A Genre...</option>");
  $('#genreFilterDD').text('');
  $('#genreFilterDD').append("<option disabled selected value=''>Filter by a specific genre</option>");
}

function populateDropDowns(genre){
  $('#genreDD').append("<option value='"+genre+"' >"+genre+"</option>");
  $('#genreFilterDD').append("<option value='"+genre+"' >"+genre+"</option>");
}

function validateNewVideoForm(){
  title = $('#vidTitle').val();
  vidlink = $('#vidLink').val();
  ddval = $('#genreDD').val();
  if(title == '' || vidlink == '' || ddval == null){
    return 0;
  } else {
    return 1;
  }
}
function validate(){
    if ($('#vidTitle').val().length > 0 && $('#vidLink').val().length > 0) {
        $("#genreDD").removeAttr("disabled", false);
    }
    else {
      $("#genreDD").attr("disabled", true);
    }
}
