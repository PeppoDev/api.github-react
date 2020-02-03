function handleSubmit(
  onCredentials,
  onNCredentials,
  username,
  password,
  event
) {
  event.preventDefault();
  const usersString = localStorage.getItem("registeredUsers");
  const savedUsers = usersString != null ? JSON.parse(usersString) : [];
  const credentials = savedUsers.find(user => user.username === username);

  if (username === "" || password === "") {
    alert("Por favor preencha todos os campos!");
    return;
  } else if (credentials) {
    onCredentials(credentials);
  } else if (!credentials) {
    onNCredentials(credentials);
  }
}

export default handleSubmit;
