"use client";
import { SlOptionsVertical } from "react-icons/sl";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
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
      <div className="flex flex-col w-[110px] h-16 border-2 bg-white px-3 text-lg space-y-1 rounded-md relative right-[50px] top-5 justify-center items-start border-gray-100">
        <button className="flex flex-row items-center">
            <span className="mr-2">
              <AiFillCheckCircle />
            </span>
            <span>Validate</span>
        </button>
        <button className="flex flex-row items-center">
          <span className="mr-2">
            <AiFillDelete />
          </span>
          <span>Delete</span>
        </button>
      </div>
    </Popup>
  );
};

export default PopupMenu;