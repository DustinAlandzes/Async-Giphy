require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const query = "pachinko"
const base_url = "https://api.giphy.com/v1/gifs/search"

console.log(endpoint)

async function getImage(query){
    const response = await fetch(endpoint);
    const data = await response.json();
    return (data.data[0].url)
}
getImage('query')