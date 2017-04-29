function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  for(i = vidLink.length; i > vidLink.length - 11; i--){
    console.log(vidLink[i]);
  }
  // console.log(title + " " + vidLink);
}
