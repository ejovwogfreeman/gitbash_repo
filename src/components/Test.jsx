import React from "react";

const Test = (props) => {
  return (
    <div>
      <h1>{props.blog.title}</h1>
      <p>{props.blog.content}</p>
    </div>
  );
};

export default Test;
