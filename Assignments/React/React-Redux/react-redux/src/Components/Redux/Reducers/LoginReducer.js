const LoginReducer = (state = {}, action) => {
  if (action.token) {
    localStorage.setItem("token", action.token);
    return {
      ...state,
      token: action.token,
    };
  } else {
    return state;
  }
};

export default LoginReducer;
