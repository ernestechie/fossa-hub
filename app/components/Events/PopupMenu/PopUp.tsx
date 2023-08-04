"use client";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle } from "react-icons/ai"
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
      <div className="flex flex-col w-24 h-16 border-2 rounded-md relative right-16 top-6 justify-center items-center border-b-gray-100 border-gray-100">
        <div className="flex flex-row space-x-3">
          <span>
            <AiFillCheckCircle />
          </span>
          <span>validate</span>
        </div>
        <div>delete</div>
      </div>
    </Popup>
  );
};

export default PopupMenu;
