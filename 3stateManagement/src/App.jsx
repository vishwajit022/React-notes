import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 2);
  // };
  const [p, setp] = useState({ name: "Vishwajit", isBanned: true });
  const [a, seta] = useState([1, 2, 3, 4, 5, 6]);
  const [arr, setarr] = useState([2, 3, 1, 3, 4]);
  const [person, setperson] = useState([
    { name: "Vishwajit", age: 23 },
    { name: "Steve", age: 23 },
    { name: "Shiva", age: 29 },
  ]);
  const [alpha, setalpha] = useState(false);
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
      <br />
      {arr.map((item, k) => {
        return (
          <div key={k} className="">
            <div className=""> {item}</div>
          </div>
        );
      })}
      <button
        onClick={() => setarr(arr.filter((i) => i != 3))}
        className="px-3 py-1 rounded-md bg-red-950 text-red-50"
      >
        Click me to remove 3
      </button>
      <button
        onClick={() => {
          setarr([...arr, 3]);
        }}
        className="px-3 py-1 rounded-md bg-red-950 text-red-50"
      >
        Click to add 3{" "}
      </button>
      <br />
      {person.map((e, k) => (
        <div key={k} className="">
          <div className="">{e.name}</div>
          <div className="">{e.age}</div>
        </div>
      ))}
      <button
        onClick={() => setperson([])}
        className="px-4 py-1 bg-yellow-200 rounded-md"
      >
        Empty the array of age
      </button>
      <button
        onClick={() =>
          setperson((prevPerson) =>
            prevPerson.map((e) =>
              e.name === "Vishwajit" ? { name: "Vishwajit", age: 25 } : e
            )
          )
        }
        className="px-4 py-1 bg-yellow-200 rounded-md"
      >
        Increase Vishwajit's Age
      </button>
      <br></br>
      <h2>Value of Alpha Boolean: {alpha.toString()}</h2>
      <button
        onClick={() => {
          setalpha(!alpha);
        }}
        className="px-4 py-1 rounded-md bg-violet-200"
      >
        Twist
      </button>
      {alpha == true && <div className="">Bahar JAo</div>}
      {alpha == false && <div className="">Bahar mat JAo</div>}
      {/**Another version is */}
      <h1>
        {alpha == true ? (
          <div className="">Bahar Jao </div>
        ) : (
          <div className="">Bahar mat jao</div>
        )}
      </h1>
    </>
  );
}

export default App;
