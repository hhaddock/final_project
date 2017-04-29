function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  secret = vidLink.split("v=");
  $.ajax({})
  // console.log("Title of video is " + title + " and secret ID is "  +secret[1]);
}
