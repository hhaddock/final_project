function validateForm(){
  if($('#userID').val == "" || $('#passID').val == ""){
    alert("Error: all form elements must be filled out.");
  } else {
    $('#loginForm').submit();
  }
}
