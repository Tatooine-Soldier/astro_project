export async function getFuture() {
    const fetch = require('node-fetch');
    const url = "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902"

    fetch(url).then(response => {
        if (response.ok) {
            console.log(response.json())
            return response.json();
        } else {
            throw new Error("request failed")
        }
    })



    // var res = await  fetch("https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902")
    // var final = await res.json()

    // console.log(final)
}

getFuture()