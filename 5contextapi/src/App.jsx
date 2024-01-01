import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
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
    // Add more entries as needed
  ];
  const [data, setdata] = useState(raw);

  function handleClick(v) {
    setdata(() => {
      return data.map((item, i) => {
        if (i == v) return { ...item, added: !item.added };
        return item;
      });
    });
  }

  return (
    <div>
      <div className="w-full h-screen bg-violet-50">
        <Navbar />
        <div className="flex flex-wrap gap-10 px-20 mt-20">
          {data.map((item, index) => {
            return (
              <Card
                values={item}
                handleClick={handleClick}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
