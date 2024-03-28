let animal = "cat";

function setAnimal(a) {
    a = "dog";
    console.log(a);
};

setAnimal(animal);

console.log(animal);

// objects are passed by reference to the memory location of a particular object.


let user = {
    name: "Aaron"
};

function setUser(b) {
    b.name = "Max";
    console.log(b.name);
}

setUser(user);

console.log(user.name);