//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  getAllVideoData();
});

function getAllVideoData(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    dataType: 'json',
    success: function(res){
      for(i = 0; i < res.length; i++){
        formatVideos(res[i].title, res[i].videoID);
      }
    }
  });
}

function formatVideos(title, id){
  console.log("Title: " + title);
  console.log("ID: " + id);

  vid = "https://www.youtube.com/embed/";

  $('#videoDiv').append("
      <iframe width='560' height='315' src='"+vid + id+"' frameborder='0' allowfullscreen></iframe><br>
  ")
}
