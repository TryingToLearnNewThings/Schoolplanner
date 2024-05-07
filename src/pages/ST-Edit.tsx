import EditModal from "../components/HA-Edit/EditModal.tsx";
import NavBar from "../components/NavBar/NavBar.tsx";

function HAedit() {
  return (
    <div className="rounded-lg bg-custom-primary w-96 h-96 text-center top-5 p-5 m-4">
      {/* Stunden Display */}
      <h1 className=" text-3xl font-bold underline">Stunden</h1>
      <div className=" rounded-lg p-4 text-xl ">
        <ul className="">
          <input type="checkbox" className="elo mr-3 size-4" />
          Stunde 1
        </ul>
        <ul>
          <input type="checkbox" className="elo mr-3 size-4" />
          Stunde 1
        </ul>
        <ul>
          <input type="checkbox" className="elo mr-3 size-4" />
          Stunde 1
        </ul>
        <ul>
          <input type="checkbox" className="elo mr-3 size-4" />
          Stunde 1
        </ul>
        <EditModal />
        <NavBar />
      </div>
    </div>
  );
}

export default HAedit;
