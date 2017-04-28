//TODO: Get data from mLab DB to page using aJax

function getData(){
  $.ajax({url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/videos",
          success: function(res){
              console.log(res);
            }
  });
}
