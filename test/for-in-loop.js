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

for (let key in dog) {
    console.log(key, dog[key]);
};