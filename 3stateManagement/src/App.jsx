import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 2);
  // };
  const [p, setp] = useState({ name: "Vishwajit", isBanned: true });
  const [a, seta] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      <h1> Name : {p.name}</h1>
      <h1>Ban Status : {p.isBanned.toString()}</h1>
      {
        //Here we are passing an object with in usestate inorder
        // to change we need to first copy it into setp using spread operator
        //after spreading it we will be able to modify the values
      }
      <button
        onClick={() => setp({ ...p, isBanned: !p.isBanned })}
        className={` bg-blue-300 px-3 py-1 rounded-md ${
          p.isBanned ? "bg-blue-300" : "bg-red-500"
          //Applying conditional expression  for css
        }`}
      >
        Click
      </button>
      <br />
      <br />
      <br />
      {a.map((item, k) => {
        return (
          <div key={k} className="">
            <div className=""> {item}</div>
          </div>
        );
      })}
      <button
        onClick={() => {
          seta(() => a.filter((item, k) => k != a.length - 1));
        }}
        className="px-3 py-1 bg-green-300 rounded-md"
      >
        Pop one
      </button>
    </>
  );
}

export default App;
