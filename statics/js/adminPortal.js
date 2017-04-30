$(document).ready(function(){
  //hide forms
  $('#addGenreForm').hide();
  $('#deleteGenreForm').hide();

  //click function for
  $('#addGenre').click(function(){
    $('#deleteGenreForm').slideUp();
    $('#addGenreForm').slideToggle();
    $('#submitNewGenre').click(function(){
      if($('#newGenre').val() != ""){
        addGenre = $('#newGenre').val();
        updateGenreList(addGenre);
        addGenre = "";
      }
    });
  });

  $('#deleteVideo').click(function(){
    $('#addGenreForm').slideUp();
    $('#deleteGenreForm').slideToggle();
    $('#submitDeleteGenre').click(function(){
      if($('#genreToDelete').val() != ""){
        deleteGenre = $('#genreToDelete').val();
        deleteGenreFromList(deleteGenre);
        deleteGenre = "";
      }
    });
  });
});


function updateGenreList(newGenre){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres",
    type: "post",
    dataType: "json",
    data: {genre: newGenre},
    success: function(res){
      console.log("Updated List of genres with "+ newGenre);
    }
  });
}

function deleteGenreFromList(deleteGenre){
  $.ajax({
    url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres",
    type: "get",
    dataType: "json",
    success: function(res){
      for(i = 0; i < res.length; i++){
        if(res[i].genre == deleteGenre){
          $.ajax({
            url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres/"+ res[i]._id,
            type: "delete",
            dataType: "json",
            success: function(res){
              console.log(res + " Has been deleted");
            }
          });
        }
      }
    }
  });
}
