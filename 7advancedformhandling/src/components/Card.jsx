import React from "react";

function Card({ props }) {
  const {} = props;
  return (
    <div>
      <div className="w-[10vw] absolute h-[35vh] bg-sky-500 rounded-lg overflow-hidden py-6 text-center">
        <div className="image image-center mx-auto flex items-center justify-center w-[5vw] h-[5vw] rounded-full bg-blue-800 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt=""
          />
        </div>
        <h1 className="text-xl font-semibold">{props.name}</h1>
        <h4 className="opacity-50 text-gray-800 font-semibold text-xs">
          {props.email}
        </h4>
        <p className="text-center text-xs mt-4 font-semibold leading-none -tracking-tighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem cupiditate fugiat sit!
        </p>
        <button className="px-2 py-1 mt-4 bg-red-600 text-xs rounded-lg font-semibold text-white">
          Remove It
        </button>
      </div>
    </div>
  );
}

export default Card;
