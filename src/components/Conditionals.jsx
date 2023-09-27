import React from "react";

const Conditionals = () => {
  let user = true;
  //   if (user === true) {
  //     return <div>You are logged in</div>;
  //   } else {
  //     return <div>please log in</div>;
  //   }
  return <div>{user === true ? "you are logged in" : "please log in"}</div>;
};

export default Conditionals;
