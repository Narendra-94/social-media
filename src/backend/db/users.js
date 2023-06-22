import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "001",
    firstName: "Narendra",
    lastName: "Chordiya",
    username: "gabbarsingh",
    password: "KitneAdmiThe@3",
    bookmarks: [],
    bio: "Aspring FullStack Developer",
    website: "https://adarshbalak.netlify.app",
    avatar: "https://i.postimg.cc/K8jbCZRb/Gabbar-Singh.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "004",
        firstName: "Niharika",
        lastName: "Rakhewar",
        username: "harleyquinn",
        avatar: "https://i.postimg.cc/tCXKYbfs/Harley-Quinn.jpg",
      },
      {
        _id: "002",
        firstName: "Yashaswi",
        lastName: "Mishra",
        username: "baburaoapte",
        avatar: "https://i.postimg.cc/C1jNPNmB/Baburao.jpg",
      },
    ],
    followers: [
      {
        _id: "004",
        firstName: "Niharika",
        lastName: "Rakhewar",
        username: "harleyquinn",
        avatar: "https://i.postimg.cc/tCXKYbfs/Harley-Quinn.jpg",
      },
      {
        _id: "002",
        firstName: "Yashaswi",
        lastName: "Mishra",
        username: "baburaoapte",
        avatar: "https://i.postimg.cc/C1jNPNmB/Baburao.jpg",
      },
      {
        _id: "003",
        firstName: "Akshat",
        lastName: "Mehta",
        username: "joker",
        avatar: "https://i.postimg.cc/QMjxKNw2/Joker.jpg",
      },
    ],
  },
  {
    _id: "002",
    firstName: "Yashaswi",
    lastName: "Mishra",
    username: "baburaoapte",
    password: "baburaoapte123",
    bookmarks: [],
    bio: "Frontend Developer",
    website: "https://adarshbalak.netlify.app",
    avatar: "https://i.postimg.cc/C1jNPNmB/Baburao.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "003",
    firstName: "Akshat",
    lastName: "Mehta ",
    username: "joker",
    password: "joker123",
    bookmarks: [],
    bio: "Aspring FrontEnd Developer",
    website: "https://anujkumar.netlify.app/",
    avatar: "https://i.postimg.cc/QMjxKNw2/Joker.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "004",
    firstName: "Niharika",
    lastName: "Rakhewar",
    username: "harleyquinn",
    password: "harleyquinn112",
    bio: "Something",
    website: "https://hrishib.netlify.app/",
    avatar: "https://i.postimg.cc/tCXKYbfs/Harley-Quinn.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "005",
    firstName: "John",
    lastName: "Doe",
    username: "rockybalboa",
    password: "rockybalboa07",
    bio: "Fight!!!",
    website: "https://johndoe.netlify.app/",
    avatar: "https://i.postimg.cc/gjvsnKfq/Rocky.webp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
