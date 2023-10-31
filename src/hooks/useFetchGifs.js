import React, { useEffect, useState } from "react";
import { getGifts } from "../functions/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGifts(category).then((images) => setImages(images));
    setIsLoading(false);
  }, []);
  return {
    images,
    isLoading,
  };
};
