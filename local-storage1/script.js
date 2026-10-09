console.log(localStorage);

localStorage.setItem("username", "JohnDoe");
localStorage.setItem("email", "johndoe@example.com");

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("email"));

console.log(localStorage.removeItem("username"));

console.log(localStorage);


