function Card1({ props, index, handleClick }) {
  const { songname, image, name, added } = props;
  return (
    <div className="">
      <div className="relative flex h-[70vh] bg-zinc-200  flex-col rounded-2xl   w-[30vw] ">
        <div className="w-[30vw] h-[50vh] image bg-slate-400 rounded-2xl overflow-hidden">
          <img
            className="object-cover object-top w-full h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-0.2 text ">
          <h3 className="text-2xl font-semibold song">{songname}</h3>
          <br />
          <h5 className="text-lg title">{name}</h5>
        </div>
        <div className="button">
          <button
            onClick={() => handleClick(index)}
            className=" absolute bottom-0  translate-x-[-50%] whitespace-nowrap text-white left-1/2  -translate-y-[-50%] px-5 py-3 rounded-md bg-orange-600"
          >
            {added == false ? "Add to Favourites" : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;
