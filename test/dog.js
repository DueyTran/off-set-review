let dog = {
    "name": "rover",
    "age": 2,
    "likes": [
        "treats",
        "chasing cars"
    ],
    "dislikes": [
        "baths",
        "cats"
    ],
    "id": 1
};

let dogUpdate = {
    "name": "Killer",
    "age": 3
}

for (let key in dogUpdate) {
    dog[key] = dogUpdate[key];
};

console.log(dog);