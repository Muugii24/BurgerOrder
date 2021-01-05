const initialState = {
  resultData: [],
  loading: false,
  error: null,
  token: null,
  userId: null,
  registered: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START": {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }
    case "SIGNUP_USER_SUCCESS": {
      return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
      };
    }
    case "SIGNUP_USER_ERROR": {
      return {
        ...state,
        error: action.error.response.data.error.message,
        loading: false,
      };
    }
    case "LOGIN_USER_START": {
      return {
        ...state,
        // error: null,
        loading: true,
      };
    }
    case "LOGIN_USER_SUCCESS": {
      return {
        ...state,
        loading: false,
        token: action.token,
        userId: action.userId,
      };
    }
    case "LOGIN_USER_ERROR": {
      return {
        ...state,
        error: action.error.response.data.error.message,
        loading: false,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        token: null,
        userId: null,
      };
    }
    default:
      return state;
  }
};

export default reducer;
