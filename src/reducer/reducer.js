import { posts } from "../backend/db/posts";

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

    case "SAVE_DATA_BY_LIKE": {
      return { ...state, posts: action.payload };
    }
    case "SAVE_DATA_BY_DISLIKE": {
      return { ...state, posts: action.payload };
    }
    case "SAVE_DATA_BY_BOOKMARK": {
      return {
        ...state,
        users: state.users.map((data) =>
          data.username === action.payload.username
            ? { ...data, bookmarks: action.payload.bookmarks }
            : data
        ),
      };
    }

    case "EDIT_DATA": {
      return { ...state, posts: action.payload };
    }

    case "DELETE_DATA": {
      return { ...state, posts: action.payload };
    }
    case "CREATE_POSTS": {
      return { ...state, posts: action.payload };
    }

    default:
      return state;
  }
};
