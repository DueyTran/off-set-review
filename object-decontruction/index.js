let user = {
    username: "Alice123",
    secretKey: "password1",
    email: "alice123@gmail.com"
}

// let username = user.username;

// obj deconstructino
let { username, email } = user;
console.log(username); // "Alice123"
console.log(email); // "alice123@gmail.com"

let { username: name } = user;
console.log(name);

// Array Deconstruction

let names = ["Alice", "Bob", "Charlie"];

let [ user1, user2 ] = names;

console.log(user1); // Alice
console.log(user2); // Bob