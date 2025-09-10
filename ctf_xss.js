async function updatePassword(newPassword) {
  // Step 1: Fetch profile page to get CSRF token
  const res = await fetch("/profile", {
    credentials: "include" // send cookies (important for session)
  });
  const text = await res.text();

  // Extract CSRF token
  const match = text.match(/name="_csrf" value="([^"]+)"/);
  if (!match) {
    throw new Error("CSRF token not found");
  }
  const csrfToken = match[1];
  console.log("CSRF Token:", csrfToken);

  // Step 2: Send POST request to update password
  const formData = new URLSearchParams();
  formData.append("_csrf", csrfToken);
  formData.append("bio", "Hi, I am Alice!"); // keep existing bio
  formData.append("password", newPassword);

  const updateRes = await fetch("/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: formData.toString(),
    credentials: "include" // include cookies
  });

  console.log("Status:", updateRes.status);
  const updateText = await updateRes.text();
  console.log("Response:", updateText);
}

// Example usage:
updatePassword("test"); // change "test" to your desired password
