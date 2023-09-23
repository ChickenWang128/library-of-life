import React from "react";
import { data } from "../data";
import MediaCard from "./MediaCard";

const MediaContainer = () => {
  return (
    <>
      {data.map((media) => {
        return (
          <MediaCard
            key={media.id}
            year={media.year}
            image={media.image}
            title={media.title}
            type={media.type}
            link={media.link}
          />
        );
      })}
    </>
  );
};

export default MediaContainer;
