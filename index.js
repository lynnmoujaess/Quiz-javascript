const ageSelect = document.getElementById("age");
const option = document.createElement("option");
option.value = "";
option.text = "Age";
ageSelect.appendChild(option);
for (let i = 5; i <= 95; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.text = i;
  ageSelect.appendChild(option);
}

function isNumberKey(evt) {
  let charCode = evt.which;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
  
function checkPassword() {
  let password = document.getElementById("password");
  if (password.value === "quizpassword") {
      window.open("question.html");
  }
  else {
      alert("Incorrect password.");
      password.value="";
  }
}
