require('dotenv').config();

// Print out value of API key stored in .env file
console.log(process.env.API_KEY)

const query = "pachinko"
const base_url = "https://api.giphy.com/v1/gifs/search"
const endpoint = `${base_url}?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=r&lang=en&bundle=messaging_non_clips`

console.log(endpoint)