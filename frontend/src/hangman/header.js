function Header({ title }) {
  return (
    <div className="flex flex-row justify-between bg-indigo-500 p-2 mb-4">
      <h1 className="text-3xl font-bold p-2 text-white">{title}</h1>
    </div>
  );
}

export default Header;
