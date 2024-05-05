function login() {
  // get the values of the username and password fields
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // check if the username and password are correct
  if (username === "myusername" && password === "mypassword") {
    alert("Login successful!");
    // redirect the user to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect username or password. Please try again.");
  }
}
