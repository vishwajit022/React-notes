import React from "react";

function Card() {
  return (
    <div>
      <div className="w-[10vw] absolute h-3/4 bg-sky-500 rounded-lg flex overflow-hidden flex-col items-center">
        <div className="image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden ">
          <img
            className="w-full h-full object-cover "
            src="https://media.licdn.com/dms/image/D4D03AQEjaOEY1mh4bA/profile-displayphoto-shrink_800_800/0/1697409185669?e=1709769600&v=beta&t=eziDMJRjq69yA1OoKFs3e1zO0yT2uYuC0FVNijfrf2A"
            alt=""
          />
        </div>
        <h1 className="text-xl font-semibold">Vishwajit</h1>
        <p className="text-center text-xs font-semibold leading-none -tracking-tighter ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem cupiditate fugiat sit!
        </p>
      </div>
    </div>
  );
}

export default Card;
