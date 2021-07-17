const fetch =require('node-fetch')


fetch('https://restcountries.eu/rest/v2/name/eesti')
    .then(result=>result.json())
    .then(response=>console.log(response))
    .catch(error=>console.log(error))

