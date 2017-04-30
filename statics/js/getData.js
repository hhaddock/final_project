//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  $('#videoArea').hide();
  $('#addVideoForm').hide();
  getAllVideoData();
  $('#videoArea').fadeIn("slow");

  $('#showVideos').click(function(){
    clearVideos();
    getAllVideoData();
    $('#addVideoForm').hide();
    $('#videoArea').fadeToggle("slow");
  });

  $('#addVideo').click(function(){
    getAllVideoData();
    $('#videoArea').hide();
    $('#addVideoForm').fadeIn("slow");
  });

  $('#addVidBtn').click(function(){
    submit = validateNewVideoForm();
    if(submit == 0){
      submitVideo();
      clearVideos();
      getAllVideoData();
      $('#addVideoForm').slideUp();
      $('#videoArea').fadeIn("slow");
    } else {
      alert("Error: all form elements must be filled out.");
    }
  });

  $('#resetFilterBtn').click(function(){
    clearVideos();
    getAllVideoData();
    getVideoGenres();
  });

  $('#genreFilterDD').on('change',function(){
    genre = $('#genreFilterDD').val()
    filterVideos(genre);
  });
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
        // populateDD(res[i].genre, '#genreDD');
        // populateDD(res[i].genre, '#genreFilterDD');
        console.log(res[i].genre)
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
  $('#videoDiv').append("<br><div class='box paperTexture'><h2>"+title+"</h2><hr><iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br><br></div>");
}

function clearVideos(){
  $('#videoDiv').text('');
}

function clearDD(){
  $('#genreDD').text('');
  $('#genreDD').append("<option disabled selected value='0'>Choose A Genre...</option>");
  $('#genreFilterDD').text('');
  $('#genreFilterDD').append("<option disabled selected value=''>Filter by a specific genre</option>");
}

function populateDropDowns(genre){
  $('#genreDD').append("<option value='"+genre+"' >"+genre+"</option>");
  $('#genreFilterDD').append("<option value='"+genre+"' >"+genre+"</option>");
}

function validateNewVideoForm(){
  if($('#vidTitle').val() == '' || $('#vidLink').val() == '' || $('#genreDD').val() == 0){
    return 1;
  } else {
    return 0;
  }
}
