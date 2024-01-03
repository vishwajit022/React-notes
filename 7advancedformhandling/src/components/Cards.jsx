import React from "react";
import Card from "./Card";

function Cards({ props }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full overflow-x-auto flex items-center justify-center gap-40">
        {props.map((item, i) => (
          <Card key={i} props={item} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
