const https = require('https');
const fs = require('fs'); // Import the 'fs' module for file system access


const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const baseUrl = "https://www.googleapis.com/books/v1/volumes";
// const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

async function getRandomBooks() {
  const books = [];
  for (let i = 0; i < 10; i++) {
    const randomLetter = alphabets[Math.floor(Math.random() * alphabets.length)];
    const searchQuery = `"${randomLetter}*" AND (fiction OR mystery)`;
    const url = `${baseUrl}?q=${searchQuery}`;

    try {
      const response = await new Promise((resolve, reject) => {
        https.get(url, (res) => {
          let data = '';
          res.on('data', (chunk) => { data += chunk; });
          res.on('end', () => {
            resolve(JSON.parse(data));
          });
        }).on('error', reject);
      });
      books.push(...response.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }
  try {
    const jsonData = JSON.stringify(books, null, 2); // Convert books array to formatted JSON string
    await fs.promises.writeFile('data.json', jsonData); // Write the JSON data to data.json file
    console.log('Books data saved to data.json');
  } catch (error) {
    console.error("Error saving data:", error);
  }

  return books;

  return books;
}

getRandomBooks().then(books => {
  console.log("done"); // Array containing book data for ~100 books
});
