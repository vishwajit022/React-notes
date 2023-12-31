import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const raw = [
    {
      id: 1,
      name: "James",
      desc: "lorem 3fssdc",
      friends: false,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Damon",
      desc: "lorem 3fssdc",
      friends: false,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Swaithlana",
      desc: "lorem 3fssdc",
      friends: false,
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const [data, setData] = useState(raw);

  function changeFriend() {
    data.map(() => {
      setData(!data.friends);
    });
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen gap-4 bg-grey-600">
        {data.map((element, index) => (
          <Card values={element} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
