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

    // case "ON_CLICKING_FILTERED_BUTTON": {
    //   if (action.payload === "trending") {
    //     const sortedPosts = [...state.posts].sort(
    //       (a, b) => b.likes.likeCount - a.likes.likeCount
    //     );
    //     return { ...state, filteredPosts: sortedPosts };
    //   } else if (action.payload === "latest") {
    //     const sortedPosts = [...state.posts].sort(
    //       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    //     );
    //     return { ...state, filteredPosts: sortedPosts };
    //   } else if (action.payload === "oldest") {
    //     const sortedPosts = [...state.posts].sort(
    //       (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    //     );
    //     return { ...state, filteredPosts: sortedPosts };
    //   }
    //   return { ...state, filteredPosts: [] };
    // }

    // case "HANDLE_LIKES": {
    //   const updatedPosts = state.filteredPosts.map((post) => {
    //     console.log(post._id, "post._id");
    //     console.log(action.payload, "action.payload");
    //     if (post._id === action.payload) {
    //       console.log("true");
    //       return { ...post, likes: { likeCount: post.likes.likeCount + 1 } };
    //     } else return post;
    //   });

    //   console.log(updatedPosts, "updatedPosts");
    //   return {
    //     ...state,
    //     filteredPosts: updatedPosts,
    //   };
    // }

    case "SAVE_DATA_BY_LIKE": {
      return { ...state, posts: action.payload };
    }
    case "SAVE_DATA_BY_DISLIKE": {
      return { ...state, posts: action.payload };
    }
    default:
      return state;
  }
};
