import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";

import { debounce } from "./useDebounce";

const STORY_INCREMENT = 10;
const MAX_STORIES = 500;
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const useInfiniteScroll = () => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = () => {
    // if (
    //   window.innerHeight + document.documentElement.scrollTop !==
    //     document.documentElement.offsetHeight ||
    //   loading
    // ) {
    //   return false;
    // }

    // setLoading(true);
    console.log("scrolling", dimensions.screen.height);
  };

  handleScroll();

  //   useEffect(() => {
  //     if (!loading) return;

  //     if (count + STORY_INCREMENT >= MAX_STORIES) {
  //       setCount(MAX_STORIES);
  //     } else {
  //       setCount(count + STORY_INCREMENT);
  //     }

  //     setLoading(false);
  //   }, [loading]);

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  //   return { count };
};

export default useInfiniteScroll;
