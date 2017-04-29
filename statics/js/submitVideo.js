function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  secret = vidLink.split("v=");
  console.log(secret);
  // console.log(title + " " + vidLink);
}
