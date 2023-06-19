import { posts } from "../backend/db/posts";

export const initialState = {
  posts: [],
  users: [],
  filteredPosts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESSFULL_USERS_DATA": {
      return { ...state, users: action.payload };
    }

    case "FETCH_SUCCESSFULL_POSTS_DATA": {
      return { ...state, posts: action.payload };
    }

    case "ON_CLICKING_FILTERED_BUTTON": {
      if (action.payload === "trending") {
        const sortedPosts = [...state.posts.posts].sort(
          (a, b) => b.likes.likeCount - a.likes.likeCount
        );
        return { ...state, filteredPosts: sortedPosts };
      } else if (action.payload === "latest") {
        const sortedPosts = [...state.posts.posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        return { ...state, filteredPosts: sortedPosts };
      } else if (action.payload === "oldest") {
        const sortedPosts = [...state.posts.posts].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        return { ...state, filteredPosts: sortedPosts };
      }
    }
    default:
      return state;
  }
};
