import { useState } from "react";
import Card1 from "./components/Card1";

function App1() {
  const raw = [
    {
      id: 1,
      name: "Jia",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore.",
      friends: false,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Damon",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore.",
      friends: false,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Swaithlana",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolore.",
      friends: false,
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  const [data, setData] = useState(raw);
  function changeFriend(updatevalue) {
    return data.map((item, i) => {
      console.log(item);
      if (i == updatevalue) return setData(!item.friends);
      else return item;
    });
  }
  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen gap-10 bg-slate-300 ">
        {data.map((item, i) => (
          <Card1 handleclick={changeFriend} props={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App1;
