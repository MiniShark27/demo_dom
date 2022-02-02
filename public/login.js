function login() {
  const username_input = document.getElementById('username');
  const username = username_input.value
  const password_input = document.getElementById('pass');
  const password = password_input.value

  fetch("/login", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.text())
    .then(text => console.log(text))
    .catch(err => console.log(err))
}
