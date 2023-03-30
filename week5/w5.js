// Get a reference to the search button element
const searchButton = document.getElementById('search-button');

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {

  // Get the value of the input field
  const usernameInput = document.getElementById('username-input');
  const username = usernameInput.value;

  // Use the Fetch API to retrieve repositories for the given username
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repositories => {
      // Get a reference to the div where we'll display the repositories
      const repositoriesDiv = document.getElementById('repositories');
      // Clear any existing content
      repositoriesDiv.innerHTML = '';
      
      // If no repositories were found, display a message
      if (repositories.length === 0) {
        repositoriesDiv.innerHTML = 'No repositories found.';
        return;
      }
      
      // Otherwise, create an unordered list and append a list item for each repository
      const ul = document.createElement('ul');
      
      repositories.forEach(repository => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = repository.html_url;
        a.textContent = repository.name;
        li.appendChild(a);
        ul.appendChild(li);
      });
      
      // Append the list of repositories to the repositories div
      repositoriesDiv.appendChild(ul);
    })
    .catch(error => {
      // Log any errors that occur during the fetch
      console.error(error);
    });
});