// Self-motivation Calculator 
function now(){
    var before=document.getElementById("before").value;
    var now=document.getElementById("now").value;
    var selfmotivation;
    if(now<0){
        document.getElementById("text_info").innerHTML=
        "Vendosni vlere pozitive tek inputi now.";
    } else if(now==0){
        document.getElementById("selfmotivation").innerHTML=before;
    } else{
        selfmotivation=(before*now);
        document.getElementById("selfmotivation").innerHTML=selfmotivation;
    }
}


// Contact
function getMessage() {
    let firstName = document.getElementById("name").value;
  
    if (!isNaN(firstName)) {
      document.getElementById("message").textContent = "Something went wrong";
      document.getElementsByClassName("alert-success")[0].style.display = "block";
      document
        .getElementsByClassName("alert-success")[0]
        .classList.add("alert-danger");
      return false;
    } else {
      document.getElementById("message").textContent =
        "Thank you " + firstName + "! " + "We got your message! We will respond you as soon as possible.";
      document.getElementsByClassName("alert-success")[0].style.display = "block";
    }
  }

