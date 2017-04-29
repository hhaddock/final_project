//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  $('#videoDiv').hide();
  $('#addVideoForm').hide();

  $('#showVideos').click(function(){
    clearVideos();
    getAllVideoData();
    $('#addVideoForm').slideUp();
    $('#videoDiv').slideToggle("slow");
  });

  $('#addVideo').click(function(){
    populateDD();
    $('#videoDiv').slideUp();
    $('#addVideoForm').slideToggle("slow");
  });

  $('#addVidBtn').click(function(){
    submitVideo();
    clearVideos();
    getAllVideoData();
    $('#addVideoForm').slideUp();
    $('#videoDiv').slideToggle("slow");
  });
});

function getAllVideoData(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    type: 'get',
    dataType: 'json',
    success: function(res){
      for(i = 0; i < res.length; i++){
        formatVideos(res[i].title, res[i].videoID);
      }
    }
  });
}

function formatVideos(title, id){
  vid = "https://www.youtube.com/embed/";
  $('#videoDiv').append("<h2>"+title+"</h2><iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br>");
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
  // console.log("Title of video is " + title + " and secret ID is "  +secret[1]);
}
function clearVideos(){
  $('#videoDiv').text('');
}

function populateDD(){
  dd = $('#genreDD').val();
  dd.append('<option>test</option>')
  console.log(dd);
}
