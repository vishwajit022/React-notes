function Card({ values, handleClick, index }) {
  const { name, image, added, songname } = values;
  return (
    <div className="relative flex gap-4 p-4 pb-10 mt-10 flex-nowrap w-80 bg-zinc-200">
      <div className="w-32 h-32 overflow-hidden bg-red-300 rounded-lg">
        <img
          className="object-cover object-top w-full h-full "
          src={image}
          alt=""
        />
      </div>
      <div className="">
        <h2 className="mt-4 text-lg font-semibold leading-none">{songname}</h2>
        <h6 className="text-sm">{name}</h6>
        <button
          onClick={() => {
            handleClick(index);
          }}
          className={`absolute px-3 py-3 text-white whitespace-nowrap text-normal left-1/2 translate-x-[-50%] -translate-y-[-50%] ${
            added === false ? "bg-orange-500" : "bg-teal-700"
          } rounded-full bottom-0`}
        >
          {added == false ? "Add to Favorites" : "Remove"}
        </button>
      </div>
    </div>
  );
}

export default Card;
