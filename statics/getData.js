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
  var video = document.getElementById('videoDiv');
  video.innerHTML = '<iframe src="http://aol.com" style="border: 0pt none ;'+
                    'left: -453px; top: -70px; position: absolute;'+
                    'width: 1440px;'+
                    'height: 775px;" scrolling="no"></iframe>';
}
