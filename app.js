const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=ce6b95cb0479b46984706906252d26d5&query=37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current)
})