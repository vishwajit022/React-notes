function Card1({ props, handleclick }) {
  const { img, name, id, desc, friends } = props;
  return (
    <div>
      <div className="bg-red-50 h-[70vh] w-[25vw] overflow-hidden  rounded-3xl">
        <div className=" w-full h-[45vh] bg-slate-600 ">
          <img className="object-cover w-full h-full" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-3 mt-2 text-center wrap-text">
          <div className="font-bold title text-[25px]">{name}</div>
          <div className="desc">{desc}</div>
          <div className=" btn">
            <button
              onClick={() => handleclick(id)}
              className="px-5 py-1 bg-blue-300 rounded-2xl"
            >
              {}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
