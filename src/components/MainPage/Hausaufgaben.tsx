function Hausaufgaben() {
  return (
    <div className="rounded-lg bg-custom-primary top-5 justifiy-start p-4">
      <h1 className=" text-3xl font-bold underline">Hausaufgaben</h1>
      <div className="rounded-lg p-4">
        <li>Hausaufgabe 1</li>
        <li>Hausaufgabe 2</li>
        <li>Hausaufgabe 3</li>
        <li>Hausaufgabe 4</li>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-gray-600 active:bg-custom-primary focus:outline-none">
        Edit
      </button>
    </div>
  );
}
export default Hausaufgaben;
