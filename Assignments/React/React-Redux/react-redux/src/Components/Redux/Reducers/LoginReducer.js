const LoginReducer = (state = {}, action) => {
  if (action.token) {
    return {
      ...state,
      token: action.token,
    };
  } else {
    return state;
  }
};

export default LoginReducer;
