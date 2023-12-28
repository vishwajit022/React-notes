import React from "react";
const data = [
  {
    name: "Ipad ",
    image:
      "https://m.media-amazon.com/images/I/41L1Fw2xgOL._AC_UF226,226_FMjpg_.jpg",
    description: "An IPAD",
    instock: false,
  },
  {
    name: "Laptop ",
    image:
      "https://m.media-amazon.com/images/I/419IdaXiS4L._AC_UF226,226_FMjpg_.jpg",
    description: " lorem port   tempor  inv ",
    instock: true,
  },
  {
    name: "Bed ",
    image:
      "https://m.media-amazon.com/images/I/51JMteUBAiL._AC_UF226,226_FMjpg_.jpg",
    description: "Get yourself a good night sleep ",
    instock: true,
  },
  {
    name: "Breakfast ",
    image:
      "https://m.media-amazon.com/images/I/51hHC869QiL._AC_UF226,226_FMjpg_.jpg",
    description: "Start your day with a healthy breakfast",
    instock: false,
  },
];

function Card() {
  return (
    <div>
      <div className="w-full  h-screen flex items-center gap-5 justify-center  bg-zinc-100">
        {data.map((e, i) => {
          return (
            <div
              key={i}
              className="card w-fit h-80 flex flex-col gap-3 items-center justify-center "
            >
              <div className="image h-38 w-50 rounded-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={e.image}
                  alt=""
                />
              </div>

              <h1 className="title font-bold text-xl">{e.name}</h1>
              <div className="desc text-xs font-light">{e.description}</div>
              {e.instock && (
                <button
                  onClick={() => {
                    alert("Got CLicked");
                  }}
                  onMouseOver={() => {
                    alert("Got Hovered");
                  }}
                  className="button px-4 py-1 bg-blue-600 text-xs font-semi rounded-md text-zinc-100"
                >
                  In Stock
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
