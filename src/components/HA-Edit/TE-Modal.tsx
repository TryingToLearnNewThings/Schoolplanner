import React from "react";
import ResizeableTextArea from "../ResizableTextArea/REZ-TextArea";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-black hover:text-[#fbbf24] text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-6"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-stone-600  rounded-t">
                  <h3 className="text-3xl font-semibold">Termine</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-col">
                  <input
                    type="time"
                    className="shadow appearance-none border border-stone-600 rounded w-full py-2 px-3 text-stone-300 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  />
                  <input
                    type="date"
                    className="shadow appearance-none border border-stone-600 rounded w-full py-2 px-3 text-stone-300 leading-tight focus:outline-none focus:shadow-outline mb-3"
                  />
                  <input
                    type="text"
                    className="shadow appearance-none border border-stone-600 rounded w-full py-2 px-3 text-white placeholder-stone-300 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    placeholder="Welche Art von Termin?"
                  />
                  <input
                    type="text"
                    className="shadow appearance-none border border-stone-600 w-full py-2 px-3 text-white placeholder-stone-300 leading-tight focus:outline-none focus:shadow-outline mb-3"
                    placeholder="Welcher Standtort?"
                  />
                  <ResizeableTextArea />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-stone-600 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
