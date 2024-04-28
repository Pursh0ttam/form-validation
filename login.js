  

let form = document.getElementById("form");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("username").value;
  let password = document.getElementById("pwd").value;

  if (email === "" || password === "") {
    alert("Please fill the form completely");
  } 
  
  else {
   
    let returnValue = JSON.parse(localStorage.getItem("arr"));

    
    let item = returnValue.find((item) => {
      return (item.email === email || item.number === email) && item.password === password;
    });



    console.log(item)



    if (item) {
      // alert("login Successfull")
      error.innerText = "login succes";
      window.open("./info.html");
    } else {
     
      let error = document.getElementById("error");
      if (returnValue.some(item => item.email === email || item.number === email)) {
       
        error.innerText = "Incorrect password";
      } else {
        
        error.innerText = "Email not found";
      }
    }
  }
});

