import React from "react";

const NewComp = (props) => {
  return (
    <div>
      <h1>
        Hello {props.username} i am {props.age} years old
      </h1>
    </div>
  );
};

export default NewComp;
