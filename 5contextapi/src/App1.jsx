import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card1 from "./components/Card1";

function App1() {
  const raw = [
    {
      songname: "Channa Mereya",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmlGXMpPYA4itZ75Ee495kgyaLeLJXoMcmPUO1fXhuDEQt_0yB",
      name: "Arijit Singh",
      added: false,
    },
    {
      songname: "Hum toh there pardesi",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/640px-Justin_Bieber_in_2015.jpg",
      name: "Justin Bieber",
      added: false,
    },
    {
      songname: "Aa raja raja ",
      image:
        "https://i.cbc.ca/1.7033056.1703204090!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_780/argentina-taylor-swift.jpg",
      name: "Taylor Swift",
      added: true,
    },
  ];

  const [data, setdata] = useState(raw);

  function handleClick(changehandler) {
    setdata((data) => {
      return data.map((item, i) => {
        if (changehandler == i) return { ...item, added: !item.added };
        else return item;
      });
    });
  }

  return (
    <div>
      <Navbar props={data} />
      <div className="flex gap-10 px-10 mt-10">
        {data.map((item, i) => {
          return (
            <Card1 handleClick={handleClick} props={item} key={i} index={i} />
          );
        })}
      </div>
    </div>
  );
}

export default App1;
