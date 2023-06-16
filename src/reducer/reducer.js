export const initialState = {
  posts: [],
  users: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_USERS_DATA": {
      return { ...state, users: action.payload };
    }

    case "FETCH_SUCCESSFULL_POSTS_DATA": {
      return { ...state, posts: action.payload };
    }

    default:
      return state;
  }
};
