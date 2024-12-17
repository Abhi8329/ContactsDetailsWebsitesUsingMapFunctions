import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name} </h2>
        <Avatar img={props.img} />
      </div>

      <div className="bottom">
        <h3 className="post">{props.post}</h3>
        <Detail detailinfo={props.tel} />
        <Detail detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
