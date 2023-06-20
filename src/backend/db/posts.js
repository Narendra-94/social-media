import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "01",
    content:
      "I recently had the pleasure of watching Across the Spider-Verse Spider-Man, and I must say it is an absolute gem in the world of animated films. The breathtaking animation alone is worth the price of admission. The visuals are mind-blowing, with a vibrant and dynamic display that takes you on a journey through various dimensions. Every frame is a true work of art, pushing the boundaries of what animation can achieve.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/g0sHFJ34/Spiderverse.jpg",
    username: "gabbarsingh",
    createdAt: "2023-05-15T12:00:28+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "02",
    content: `Tara 
Tara.
Kaunsa Tara?
Kis manzil ka?
Kya chakkar hai?
Kaha challa hai dil ka rastaa bin kadmo ke…
Durr khadi sapno ki mallika,
Hai thodi na yaar,
Mirage hai !
Jo desert mein dikhta hai.
Hoti reyt hai, lagta paani.
Uske liye main papad beloon?
Do kodi ki hasti hai, par ussey khelu?
Fekh bikheru apna sab kuch uski khaatir?
Kisse chahiye mann ka sona, aankh ki moti, kisse padi hai
Andar kya hai?
Hoti ret hai,
Lagta paani. 💖💖`,
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/3RgYc6yH/Tamasha.webp",
    username: "baburaoapte",
    createdAt: "2023-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "03",
    content: "Finally the new season is here!! 🙌",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/mrm52y0F/Demon-Slayer.jpg",
    username: "harleyquinn",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "04",
    content: "That's what she said!! 🤪 ",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/CxXZy3KZ/Office.png",
    username: "gabbarsingh",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "05",
    content:
      "Feeling a bit nostalgic and missing those good old comedy movies that never failed to make me laugh! 🤣 Can you all help me relive the joy by sharing your favorite comedy films? Let's bring back the laughter and create a list of timeless comedy gems! 🎬🍿 #MissingComedyMovies #MovieMemories #NeedALaugh",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    photos: "https://i.postimg.cc/rwrV4K8m/Comedy.webp",
    username: "rockybalboa",
    createdAt: "2021-10-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "06",
    content:
      "True masterpiece. Acting, writing and direction all are unbelievably great. Very gripping and emotional, the stage/theatre style is really well showcased. Loved the writing. I'm  awestruck by NANA PATEKAR's brilliant performance which comes naturally to him. 🙌",
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
