// let returnValue = JSON.parse(localStorage.getItem("arr"));
// console.log(returnValue);
// let productslist = document.getElementById("products-list");
// returnValue.map((item, index, users) => {
//   productslist.innerHTML += `
//   <tr>
//   <td>${item.firstName}</td>
//   <td>${item.lastName}</td>
//   <td>${item.number}</td>
//   <td>${item.password}</td>
//   <td>${item.dob}</td>
//   <td>${item.email}</td>
//   <td>${item.gender}</td>
  
//   </tr>`;
// });

// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//   let email = document.getElementById("email").value;
//   let number = document.getElementById("number");
//   let name = document.getElementById("name").value;
//   console.log(email, number, name);

//   let filterUser = returnValue.filter((value) => {
//     return (
//       value.email.includes(email) &&
//       value.number.includes(number) &&
//       value.firstName.includes(name)
//     );
//   });

//   filterUser.map((item) => {
//     productslist.innerHTML = `
     
//      <tr>
//   <td>${item.firstName}</td>
//   <td>${item.lastName}</td>
//   <td>${item.number}</td>
//   <td>${item.password}</td>
//   <td>${item.dob}</td>
//   <td>${item.email}</td>
//   <td>${item.gender}</td>
     
//     </tr> 
     
     
//      `;
//   });
// });
let arr = []
console.log(arr.length)