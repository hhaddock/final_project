//TODO: Get data from mLab DB to page using aJax

$(document).ready(function(){
  getAllVideoData();
});

function getAllVideoData(){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
    dataType: 'json',
    success: function(res){
      formatVideos(res.response, res.length);
      // console.log(res.length);
    }
  });
}

function formatVideos(data, length){
  console.log("Data: " + data);
  console.log("Data Length: " + length);
}
