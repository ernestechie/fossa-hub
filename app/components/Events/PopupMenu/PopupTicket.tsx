import React, { useState } from "react";
import Popup from "reactjs-popup";

const TicketPopup = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <>
      <button
        type="submit"
        onClick={() => setOpen((o) => !o)}
        className="block w-full bg-orange-600 text-white p-3 rounded-md hover:bg-orange-700 duration-500"
      >
        Submit
      </button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div
          className="flex h-52 p-2 w-96 bg-white border border-black border-spacing-2  rounded-lg justify-center items-center"
          onClick={closeModal}
        >
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </p>
        </div>
      </Popup>
    </>
  );
};
export default TicketPopup;
