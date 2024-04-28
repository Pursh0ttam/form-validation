let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let ans = true;

  let num = document.getElementById("num");
  console.log(num);
  let firstName = document.getElementById("username1").value.toLowerCase().trim();
  let lastName = document.getElementById("username2").value.toLowerCase().trim();
  let number = document.getElementById("number").value.trim();
  let email = document.getElementById("email").value.toLowerCase().trim();
  let dob = document.getElementById("dob").value.trim();
  console.log(dob);
  let Password = document.getElementById("pwd").value.trim();
  let confirmPassword = document.getElementById("cpwd").value.trim();
  
  let gender = document.querySelector('input[name="gender"]:checked');

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const dobError = document.getElementById("dobError");
  const emailError = document.getElementById("emailError");
  const genderError = document.getElementById("genderError");

  firstNameError.textContent = "";

  lastNameError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  dobError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";

  if (firstName === "") {
    firstNameError.textContent = "First Name is required";
    ans = false;
  }

  if (!/^[a-zA-Z]*$/.test(firstName)) {
    firstNameError.textContent = "Number as Name cannot be accepted";
    ans = false;
  }

  if (lastName == "") {
    // alert("hello")
    lastNameError.textContent = "last name is required";
    ans = false;
  }

  if (number == "") {
    num.textContent = "number is required";
    ans = false;
  } else if (number.length > 10 || number.length < 10) {
    num.textContent = "number should be equal to 10 ";
    ans = false;
  }

  if (Password === "") {
    passwordError.textContent = "Password is required";
    ans = false;
  } else if (Password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    // number.style.backgroundColor = "red"
    ans = false;
  }

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm password";
    ans = false;
  } else if (confirmPassword !== Password) {
    confirmPasswordError.textContent = "Passwords do not match";
    // number.style.backgroundColor = "red"
    ans = false;
  }

  if (dob === "") {
    dobError.textContent = "Date of Birth is required";
    ans = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";

    ans = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Invalid email format";
    ans = false;
  }

  if (!gender) {
    genderError.textContent = "Please select your gender";
    ans = false;
  }

  if (ans) {
    let obj = {
      firstName: firstName,
      lastName: lastName,
      number: number,
      password: Password,
      email: email,
      dob: dob,
      gender: gender.value,
    };

    const arr = JSON.parse(localStorage.getItem("arr")) || [];
    const present = arr.some(
      (user) => user.email === obj.email || user.number === obj.number
    );
    if (!present) {
      arr.push(obj);
      localStorage.setItem("arr", JSON.stringify(arr));
      alert("Registration successful");

      window.open("./login.html");
      
      form.reset();
    } else {
      alert("User already exists!");
    }
  }
});
