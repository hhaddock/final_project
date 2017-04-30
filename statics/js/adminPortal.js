$(document).ready(function(){
  //hide forms
  $('#addGenreForm').hide();
  $('#deleteGenreForm').hide();

  //click function for
  $('#addGenre').click(function(){
    $('#deleteGenreForm').slideUp();
    $('#addGenreForm').slideToggle();
    $('#submitNewGenre').click(function(){
      addGenre = $('#newGenre').val();
      updateGenreList(addGenre);
      $('#newGenre').val('');
    });
  });

  $('#deleteGenre').click(function(){
    $('#addGenreForm').slideUp();
    $('#deleteGenreForm').slideToggle();
    $('#submitDeleteGenre').click(function(){
      if($('#genreToDelete').val() != ""){
        deleteGenre = $('#genreToDelete').val();
        deleteGenreFromList(deleteGenre);
        $('#genreToDelete').val('');
      } else {
        alert("Error: you must enter a genre to delete");
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
      //console.log("Updated List of genres with "+ newGenre);
      $('#messageText').html("Updated list of genres with "+ newGenre);
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
          genreString = res[i].genre;
          $.ajax({
            url: "http://ec2-35-164-57-153.us-west-2.compute.amazonaws.com:8000/api/genres/"+ res[i]._id,
            type: "delete",
            dataType: "json",
            success: function(res){
              console.log(res);
              $('#messageText').html(genreString + " has been deleted");
            }
          });
        }
      }
    }
  });
}
