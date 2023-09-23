import React from "react";

const MediaCard = (props) => {
  return (
    <>
      <div className="media">
        <a href={props.link} rel="noreferrer" target="_blank">
          <div>
            <p>{props.year}</p>
          </div>

          <div>
            <img className="media__img" src={props.image} alt={props.title} />
          </div>

          <div>
            <span>{props.type}</span>
            <h3>{props.title}</h3>
          </div>
        </a>
      </div>
    </>
  );
};

export default MediaCard;
