function Navbar({ props }) {
  return (
    <div className="flex items-center justify-between w-full px-20 py-4 h-14 ">
      <h3 className="text-2xl font-bold">Orange</h3>
      <div className="flex gap-3 p-3 px-6 text-lg font-medium text-white bg-orange-600 rounded-lg">
        <h3>Favourites</h3>
        <h3>{props.filter((item) => item.added).length}</h3>
      </div>
    </div>
  );
}

export default Navbar;
