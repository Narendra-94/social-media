export const getSortedPosts = (posts, sortType) => {
  if (sortType === "trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else if (sortType === "latest") {
    return [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sortType === "oldest") {
    return [...posts].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else {
    return posts;
  }
};
