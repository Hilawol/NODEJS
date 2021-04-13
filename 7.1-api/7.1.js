const axios = require('axios');
const request = require('request');
const superagent = require('superagent');

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

//axsios

const getPokemonNameAxsios = async (id) => {
  const getData = async () => {
    try {
      const response = await axios.get(baseUrl + id);
      return (response.data.name);
    } catch (error) {
      console.error(error);
    }
  }
  return name = await getData(id);
}

console.log(`Getting pokemon namd from axsios. Id=${2}, Name=${getPokemonNameAxsios(2)}`);
//request

const getPokemonNameRequest = (id) => {
  return request({ url: baseUrl + id, json: true }, function (error, response) {
    if (error) {
      console.error('error:', error); // Print the error if one occurred
    }
    else {
      console.log(response.body.name);
      return response.body;
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  })
};
console.log(`Getting pokemon namd from request. Id=${2}, Name=${getPokemonNameRequest(2)}`);


//supper-agent

superagent
  .get('/some-url')
  .query({ action: 'edit', city: 'London' }) // query string
  .end((err, res) => {
    // Do something
  });