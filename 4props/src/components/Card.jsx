function Card({ values }) {
  const { img, name, desc, changeFriend, friends } = values;
  return (
    <div>
      <div className="flex flex-col items-center justify-center overflow-hidden bg-red-100 rounded-md h-30 w-60">
        <div className="h-auto w-60">
          <img className="w-full " src={img} alt="" />
        </div>

        <h3 className="text-2xl font-semibold">{name}</h3>

        <h5 className="text-sm">{desc}</h5>
        <button
          onClick={changeFriend}
          className="px-3 py-1 mt-2 bg-blue-400 rounded-md"
        >
          {friends == true ? (
            <div className>Remove Friend</div>
          ) : (
            <div>Add friend</div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Card;
