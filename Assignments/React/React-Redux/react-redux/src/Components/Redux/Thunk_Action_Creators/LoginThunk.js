function Login(dispatch, email, password) {
  return function () {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch({ type: "login", token: data.token });
      })
      .catch((e) => console.log(e));
  };
}

export default Login;
