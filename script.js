let apiQuotes = [];

// Get Quotes From API
async function getQuotes() {
    const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();