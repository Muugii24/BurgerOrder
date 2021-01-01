const initialState = {
  resultData: [],
  loading: false,
  error: null,
  done: false,
  token: null,
  userId: null,
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
        token: action.resultData.idToken,
        userId: action.resultData.localId,
      };
    }
    case "SIGNUP_USER_ERROR": {
      return {
        ...state,
        error: action.error.response.data.error.message,
        loading: false,
        done: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
