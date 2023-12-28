import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amazon",
      desc: "lorem ipsum",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624984608976-8a7358d25bce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Jake",
      desc: "lorem ipsum",
    },
    {
      image:
        "https://images.unsplash.com/photo-1557899563-1940fc95709c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Jake",
      desc: "lorem ipsum",
    },
  ];
  //first thing  (e,i) here first value which is passed is going to be value
  //Second thing which you pass is going to be your key
  return (
    <div className="w-full h-screen flex gap-7 items-center justify-center bg-zinc-200">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className="w-52 bg-zinc-100  overflow-hidden  rounded-md"
          >
            <div className="w-full h-32 bg-zinc-400">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={e.image}
                alt=""
              />
            </div>
            <div className="w-full px-3 py-4">
              <h2 className="font-semibold">{e.name}</h2>
              <p className="text-xs mt-5">{e.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
