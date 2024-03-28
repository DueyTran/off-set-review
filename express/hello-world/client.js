const axios = require('axios');

async function run() {
    let res = await axios.get('http://localhost:3000/json');
    console.log(res.data.message);
}

run();