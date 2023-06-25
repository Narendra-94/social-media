import React, { useContext } from "react";
import { BiBookmark } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";
import { MediaContext } from "../../context/MediaContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../index.css";

export const BookmarkBtn = ({ post }) => {
  const { state, dispatch } = useContext(MediaContext);
  const { token, profile } = useContext(AuthContext);

  const username = profile.username;

  const loggedInUser = state.users?.find(({ _id }) => _id === profile._id);
  const isBookmark = loggedInUser?.bookmarks?.includes(post?._id);

  const bookmarkHandler = async (post) => {
    toast.success("Post Added to bookmark", {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastClassName: "custom-toast",
    });
    const response = await fetch(`/api/users/bookmark/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response?.json();

    console.log(data);
    dispatch({
      type: "SAVE_DATA_BY_BOOKMARK",
      payload: { bookmarks: data.bookmarks, username },
    });
  };

  const bookmarkRemoveHandler = async (post) => {
    toast.success("Post Removed from bookmark", {
      autoClose: 1000,
      position: "bottom-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastClassName: "custom-toast",
    });

    const response = await fetch(`/api/users/remove-bookmark/${post._id}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
    });
    const data = await response?.json();
    console.log("removeBookark", data);
    dispatch({
      type: "SAVE_DATA_BY_BOOKMARK",
      payload: { bookmarks: data.bookmarks, username },
    });
  };

  const bookmarksPostByUser = (postUser) => {
    if (isBookmark) {
      bookmarkRemoveHandler(postUser);
    } else {
      bookmarkHandler(postUser);
    }
  };

  return (
    <div>
      {isBookmark ? (
        <BsBookmarkFill
          className="bookmark-btn"
          onClick={() => bookmarksPostByUser(post)}
        />
      ) : (
        <BiBookmark onClick={() => bookmarksPostByUser(post)} />
      )}
    </div>
  );
};
