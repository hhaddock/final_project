$(document).ready(function(){
  $('#videoArea').hide();
  $('#addVideoForm').hide();
  getAllVideoData();
  $('#videoArea').fadeIn("slow");

  $('#showVideos').click(function(){
    $('#addVideoForm').hide();
    $('#videoArea').fadeToggle("slow");
  });

  $('#addVideo').click(function(){
    $('#videoArea').hide();
    $('#addVideoForm').fadeIn("slow");
  });

  $('#addVidBtn').click(function(){
    submit = validateNewVideoForm();
    if(submit == 0){
      submitVideo();
      clearVideos();
      getVideoGenres();
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
  vid = "https://www.youtube.com/embed/";
  pic = "http://img.youtube.com/vi/"
  // $('#videoDiv').append("<br><div class='box paperTexture'><h2>"+title+"</h2><hr><iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br><br></div>");
  $('#videoDiv').append("<br><div class='box paperTexture'><h2>"+title+"</h2><hr><img id='"+id+"' onclick='playVideo("+id+")' src='"+pic + id+"/0.jpg' alt='Error: video could not load'></img><br><br></div>");
}

function playVideo(id){
  // $('#'+id).replaceWith('<p>This is a test</p>');
  console.log($('#'+id));
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
  if($('#vidTitle').val() == '' || $('#vidLink').val() == ''){
    if($('#genreDD').val() == 'none')
    {
      alert("yay!");
    }
    // return 1;
    console.log($('#genreDD').text());
  } else {
    return 0;
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
