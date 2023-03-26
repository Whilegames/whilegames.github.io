const links = document.querySelectorAll('.game2');
const searchInput = document.getElementById('text-input');
const gamesContainer = document.querySelector('.games2');

// Show the search results in the games container
const showResults = (results) => {
  gamesContainer.innerHTML = '';

  if (results.length === 0) {
    gamesContainer.innerHTML = '<p>No results found.</p>';
    return;
  }

  results.forEach((result) => {
    gamesContainer.appendChild(result);
  });
};

// Handle the form submission
const handleSearch = (event) => {
  event.preventDefault();
  const query = searchInput.value.toLowerCase().trim();
  const results = [];

  // Filter the links based on the search query
  links.forEach((link) => {
    const text = link.querySelector('h3').textContent.toLowerCase();
    if (text.includes(query)) {
      results.push(link);
    }
  });

  showResults(results);
};

// Add an event listener to the form
document.getElementById('search-form').addEventListener('submit', handleSearch);

// Show the default games
const defaultGames = Array.from(links);
showResults(defaultGames);
