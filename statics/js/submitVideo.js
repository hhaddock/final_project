function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  secret = vidLink.split("v=");
  console.log(secret[1]);
  // console.log(title + " " + vidLink);
}
