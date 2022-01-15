const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5324bc607f6dd873a80032a6887dc470&query=' + latitude +','+ longitude + '&units=f';
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weatherstack services', undefined);
        } else if(response.body.error){
            callback('Unable to get forecast try another search', undefined);
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}

module.exports = forecast

// request({ url: url, json: true }, (error, response) => {
//     console.log(response.body.current)
// })

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         console.log(error);
//     } else if (response.body.error){
//         console.log(response.body.error)
//     } else {
//         console.log("It is currently " + response.body.current.temperature + " degrees out. There is " + response.body.current.precip + "% chance or rain");
//     }
// });