//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  $('#videoArea').hide();
  $('#addVideoForm').hide();
  getVideoGenres();

  $('#showVideos').click(function(){
    clearVideos();
    getAllVideoData();
    getVideoGenres();
    $('#addVideoForm').slideUp();
    $('#videoArea').slideToggle("slow");
  });

  $('#addVideo').click(function(){
    $('#videoArea').slideUp();
    $('#addVideoForm').slideToggle("slow");
  });

  $('#addVidBtn').click(function(){
    submitVideo();
    clearVideos();
    getAllVideoData();
    $('#addVideoForm').slideUp();
    $('#videoArea').slideToggle("slow");
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
      clearDD('#genreFilterDD');
      for(i = 0; i < res.length; i++){
        formatVideos(res[i].title, res[i].videoID);
      }
    }
  });
}

function getVideoGenres(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres",
    type: 'get',
    success: function(res){
      for(i = 0; i < res.length; i ++){
        populateDD(res[i].genre, '#genreDD');
        populateDD(res[i].genre, '#genreFilterDD');
      }
    }
  });
}

function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  secret = vidLink.split("v=");
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    type: 'post',
    dataType: 'json',
    data: {title: title, videoID: secret[1]},
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
  $('#videoDiv').append("<h2>"+title+"</h2><iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br>");
}

function clearVideos(){
  $('#videoDiv').text('');
}

function clearDD(loc){
  $(loc).text('');
  $(loc).append("<option disabled selected>Choose A Genre...</option>");
}

function populateDD(genre, loc){
  $(loc).append("<option value='"+genre+"' >"+genre+"</option>");
}
