function submitVideo(){
  title = $('#vidTitle').val();
  vidLink = $('#vidLink').val();

  maxlen = vidLink.length;

  for(i = maxlen; i > maxlen - 11; i--){
    console.log(vidLink[i]);
  }
  // console.log(title + " " + vidLink);
}
