
main.js
let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
let initialUsers = storedUsers;
localStorage.setItem("users", JSON.stringify(initialUsers));
let displayData = () =>
{
 let tbody = document.getElementById("tbody");
 tbody.innerHTML = "";
 let storedUser = JSON.parse(localStorage.getItem("users"));
 storedUser.map(
 (user, index) =>
 (tbody.innerHTML += `
 <tr>
 <td>${index + 1}</td>
 <td>${user.name}</td>
 <td>${user.username}</td>
 <td>${user.email}</td>
 <td>${user.phone}</td>
 <td>${user.address.city}</td>
 </tr>`)
 );
};
displayData();
let btn = document.getElementById("btn");
btn.addEventListener("click", () =>
{
 const email = document.getElementById("email").value;
 const username = document.getElementById("username").value;
 const password = document.getElementById("password").value;
 const name = document.getElementById("name").value;
 const city = document.getElementById("city").value;
 const phone = document.getElementById("phone").value;
 let storedUser = JSON.parse(localStorage.getItem("users"));
 let newUser =
{
 name,
 username,
 email,
 phone,
 address:
 {
 city,
 },
 };
 storedUser.unshift(newUser);
 localStorage.setItem("users", JSON.stringify(storedUser));
 displayData();
});