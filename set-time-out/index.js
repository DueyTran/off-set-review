let animals = ['sloth', 'turtle', 'snail'];

for (let animal of animals) {
    console.log(`${animal} is off to the races!`);
    let finishTime = Math.random() * 10000;
    setTimeout((word, time) => {
        console.log(word + " finished after " + (time/1000)) + " seconds"
    }, finishTime, animal, finishTime);
};

