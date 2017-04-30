$(document).ready(function(){
  $('#addGenreForm').hide();

  $('#addGenre').click(function(){
    $('#addGenreForm').slideToggle();
    $('#submitNewGenre').click(function(){
      console.log($('#newGenre').val());
    });
  });
});
