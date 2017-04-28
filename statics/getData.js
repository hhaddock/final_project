//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  getAllVideoData();
});

function getAllVideoData(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    dataType: 'json',
    success: function(res){
      //console.log(res);
      formatVideos(res.id, res.length);
    }
  });
}

function formatVideos(data, length){
  console.log("Title: " + data);
}
