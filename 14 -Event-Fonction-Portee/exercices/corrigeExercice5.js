function addInfo(fieldName) {
  var id = "information" + fieldName;
  if (!document.getElementById(fieldName).value) {
    document.getElementById(id).innerHTML = "Remplir le " + fieldName;
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

function getMessage() {
  var LastName = document.getElementById("Nom").value;
  var firstName = document.getElementById("Prenom").value;
  var email = document.getElementById("Courriel").value;
  var message = document.getElementById("Message").value;
  document.getElementById("values").innerHTML =
    LastName +
    " " +
    firstName +
    "<br>" +
    "Courriel: " +
    email +
    "<br>" +
    "Vous a envoye le message: " +
    message +
    "<br>";
}
