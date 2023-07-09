import React, { useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/en";
import { BiComment } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { Likes } from "./Home/Likes";
import { BookmarkBtn } from "./Home/BookmarkBtn";
import { Menu } from "./Menu/Menu";
import { MediaContext } from "../context/MediaContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Posts = ({ post, user }) => {
  // const [isLoader, setIsLoader] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoader(false);
  //   }, 1000);
  // }, []);

  const { state } = useContext(MediaContext);
  const socialUser = JSON.parse(localStorage.getItem("user"));

  const editHandlerPost = state.posts.filter(
    (post) => post?.username === socialUser?.username
  );

  const navigate = useNavigate();

  const handleUserProfile = () => {
    const currentUser = user?.username === socialUser?.username;
    if (currentUser) {
      navigate(`/profile`);
    } else {
      navigate(`/profile/${user?.username}`);
    }
  };

  const handleShare = () => {
    toast.success(`Link Copied`, {
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
    const postURL = `${window?.location?.origin}/singlePost/${post?._id}`;

    navigator?.clipboard?.writeText(postURL)?.then(() => {
      console.log("Post URL copied to clipboard:", postURL);
    });
  };

  return (
    <div key={post?._id} className="post">
      <div className="post-container">
        <div className="user-information">
          <div className="avatar-image">
            <img src={user?.avatar} alt="User Avatar" className="avatar" />
          </div>
          <div className="user-content-container">
            <div className="user-content-header">
              <div
                className="post-user-name-container"
                onClick={handleUserProfile}
              >
                <div className="post-user-name">
                  <p className="user-fullname">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="user-username">@{user?.username}</p>
                </div>
                <div className="user-createdDate">
                  <p className="dot">.</p>
                  <p>
                    {dayjs(post?.createdAt).locale("en").format("MMM D, YYYY")}
                  </p>
                </div>
              </div>
              {editHandlerPost?.map((content) =>
                content._id === post._id ? (
                  <Menu post={post} user={user} />
                ) : null
              )}
            </div>
            <div
              className="user-content"
              onClick={() => navigate(`/singlePost/${post?._id}`)}
            >
              <div className="content">{post?.content}</div>
              <div className="content-photos">
                <img src={post?.photos} alt="" />
              </div>
            </div>
            <div className="user-appreciation">
              <div>
                <Likes post={post} />
              </div>

              {/* <BiComment /> */}
              <div>
                <BookmarkBtn post={post} />
              </div>

              <BsShare onClick={handleShare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
