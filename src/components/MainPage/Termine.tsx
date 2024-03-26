function Termine() {
  return (
    <div className="rounded-lg bg-custom-primary top-5 justifiy-start p-5 m-4">
      <h1 className=" text-3xl font-bold underline">Termine</h1>
      <div className="rounded-lg p-4">
        <li>Termine 1</li>
        <li>Termine 2</li>
        <li>Termine 3</li>
        <li>Termine 4</li>
      </div>
      <button className="text-white px-2 border-[1.5px] border-black  transition duration-200 ease-in-out hover:bg-gray-600 active:bg-custom-primary focus:outline-none">
        Edit
      </button>
    </div>
  );
}
export default Termine;
