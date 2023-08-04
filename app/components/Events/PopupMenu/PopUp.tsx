"use client";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai"
import { Popup } from "reactjs-popup";

const PopupMenu = () => {
  return (
    <Popup
      trigger={
        <button type="button">
          <SlOptionsVertical />
        </button>
      }
      position="right top"
      on="click"
      closeOnDocumentClick
      mouseLeaveDelay={300}
      mouseEnterDelay={0}
      contentStyle={{ padding: "0px", border: "none" }}
      arrow={false}
    >
      <div className="flex flex-col w-24 h-16 border-2 px-2 space-y-1 rounded-md relative right-16 top-6 justify-center items-start border-gray-100">
        <div className="flex flex-row">
          <span className="mr-2">
            <AiFillCheckCircle />
          </span>
          <span>Validate</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-2">
            <AiFillDelete />
          </span>
          <span>
            Delete
          </span>
        </div>
      </div>
    </Popup>
  );
};

export default PopupMenu;
