import React from "react";

const List = () => {
  let students = ["godbless", "freeman", "lancelot", "maxwell", "johnson"];
  return students.map((x) => <div key={Math.random()}>{x}</div>);
};

export default List;
