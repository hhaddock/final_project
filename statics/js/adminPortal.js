$(document).ready(function(){
  //hide forms
  $('#addGenreForm').hide();
  $('#deleteGenreForm').hide();

  //click function for
  $('#addGenre').click(function(){
    $('#addGenreForm').slideToggle();
    $('#submitNewGenre').click(function(){
      if($('#newGenre').val() != ""){
        addGenre = $('#newGenre').val();
        updateGenreList(addGenre);
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
