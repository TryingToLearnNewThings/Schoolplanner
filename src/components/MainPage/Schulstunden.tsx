function Schulstunde() {
  return (
    <div className="rounded-lg bg-custom-primary top-5 justifiy-start p-5 m-4">
      <h1 className=" text-3xl font-bold underline">Schulstunde</h1>
      <div className="rounded-lg p-4">
        <li>Schulstunde 1</li>
        <li>Schulstunde 2</li>
        <li>Schulstunde 3</li>
        <li>Schulstunde 4</li>
      </div>
      <button className="text-white px-2 border-[1.5px] border-black  transition duration-200 ease-in-out hover:bg-gray-600 active:bg-custom-primary focus:outline-none">
        Edit
      </button>
    </div>
  );
}
export default Schulstunde;
