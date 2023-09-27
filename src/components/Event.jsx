// import React from "react";

// const Event = () => {
//   function alertMe(name) {
//     return alert("hello " + name);
//   }
//   return (
//     <div>
//       {/* <button onClick={() => alert("hello react")}>click me</button> */}
//       {/* <button onClick={(e) => console.log(e)}>click me</button> */}
//     </div>
//   );
// };

// export default Event;

import React from "react";
function checkEvent(a, b) {
  alert(b.type + " " + a);
}

const Event = () => {
  return (
    <div>
      <button style={{ color: "red" }} onClick={(e) => checkEvent("event", e)}>
        click me
      </button>
    </div>
  );
};

export default Event;
