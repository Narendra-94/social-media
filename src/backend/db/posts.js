import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "I recently had the pleasure of watching Across the Spider-Verse Spider-Man, and I must say it is an absolute gem in the world of animated films. The breathtaking animation alone is worth the price of admission. The visuals are mind-blowing, with a vibrant and dynamic display that takes you on a journey through various dimensions. Every frame is a true work of art, pushing the boundaries of what animation can achieve.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/g0sHFJ34/Spiderverse.jpg",
    username: "gabbarsingh",
    createdAt: "2022-05-15T12:00:28+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Wohi Kahani Fir Ek Baar",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/3RgYc6yH/Tamasha.webp",
    username: "baburaoapte",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Finally the new season is here!!",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/mrm52y0F/Demon-Slayer.jpg",
    username: "harleyquinn",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "That's what she said",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/CxXZy3KZ/Office.png",
    username: "gabbarsingh",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Missing these kind of comedy movies",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/rwrV4K8m/Comedy.webp",
    username: "rockybalboa",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Acting at it's best",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/PJ5ZfmnN/NAtsamrat.jpg",
    username: "joker",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
