import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      console.log(data, "data");
      dispatch({
        type: "FETCH_SUCCESSFULL_USERS_DATA",
        payload: data.users,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      console.log(data, "postsdta");

      dispatch({
        type: "FETCH_SUCCESSFULL_POSTS_DATA",
        payload: data.posts,
      });
    };
    getData();
  }, []);

  return (
    <MediaContext.Provider value={{ state, dispatch }}>
      {children}
    </MediaContext.Provider>
  );
};
