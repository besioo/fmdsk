fetch('https://www.adidas.com/api/account/profile?sitePath=us', {
  method: 'GET', // or 'POST', 'PUT', etc.
  credentials: 'include' // Ensures cookies are sent
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
