let returnValue = JSON.parse(localStorage.getItem("arr"));
console.log(returnValue);

let productslist = document.getElementById("products-list");
// let first = document.getElementById("first");
// console.log(first)
let second = document.getElementById("second");

returnValue.map((item, index, array) => {
  productslist.innerHTML += `
    <tr>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.number}</td>
    <td>${item.password}</td>
    <td>${item.dob}</td>
    <td>${item.email}</td>
    <td>${item.gender}</td>
    
    </tr>`;
  });


  let button = document.getElementById("button");
  button.addEventListener( "click", () => {
    productslist.innerHTML=""
    second.innerHTML=""


    let name = document.getElementById("name").value.toLowerCase();
    let mobile = document.getElementById("mobile").value;
    let emails = document.getElementById("email").value.toLowerCase();
    // console.log(item)
    // let i=0
    
    let filterValu = returnValue.filter((val)=>{

    return val.firstName.includes(name.trim()) && val.number.includes(mobile.trim()) && val.email.includes(emails.trim()) 

    })
    // console.log(filterValu.length)
    if(filterValu.length==0){
      productslist.innerHTML ="user not found"
    }
  if(name==="" && mobile==="" && emails===""){
    productslist.innerHTML ="user not found"

  }
  else{
    second.innerHTML +=`      
    <tr>
       <th>firstName</th>
      <th>LastName</th>
      <th>Number</th>
      <th>Password</th>
      <th>DOB</th>
      <th>Email</th>
      <th>Gender</th>
    </tr>`
   
    // alert("ok")
    filterValu.map((item)=>{

    

      // let head = document.getElementById("first");
     

      productslist.innerHTML +=`
    <tr>
    <td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.number}</td>
    <td>${item.password}</td>
    <td>${item.dob}</td>
    <td>${item.email}</td>
    <td>${item.gender}</td>
    
    </tr>`;

    })

  }

  });


