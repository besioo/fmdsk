(async () => {
  const url = "https://y-3.com/mypage/user_info.html";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        // Add headers if needed (e.g., authentication, content type, etc.)
        "Content-Type": "text/html",
        // Add cookies if necessary for authentication
      },
      credentials: "include", // This includes cookies in the request
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pageContent = await response.text();
    console.log(pageContent);
  } catch (error) {
    console.error("Error fetching page content:", error);
  }
})();
