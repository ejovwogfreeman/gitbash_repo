import { useState } from "react";
const Form = () => {
  // useState syntax
  // let [state, setState]=useState(initial state)

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  let showInfo = (e) => {
    e.preventDefault();
    console.log(name, email);
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={showInfo}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      <label htmlFor="">Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br /> <br />
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
