$(document).ready(function(){
  $('#addGenreForm').hide();

  $('#addGenre').click(function(){
    $('#addGenreForm').slideToggle();
    $('#submitNewGenre').click(function(){
      if($('#newGenre').text() != ""){
        addGenre = $('#newGenre').text();
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
      console.log("Updated Lists of genres with "+ newGenre);
    }
  });
}
