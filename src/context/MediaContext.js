import React, { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducer/reducer";

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();

      dispatch({
        type: "FETCH_SUCCESSFULL_USERS_DATA",
        payload: data,
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();

      dispatch({
        type: "FETCH_SUCCESSFULL_POSTS_DATA",
        payload: data,
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
