//Recursive setTimeout bahaves exactly same as setInterval

const timeoutid = setTimeout(function greet() {
  console.log("Hello Rishabh");
  setTimeout(greet, 2000);
}, 2000);
