import React from "react";
import { DialogContent, DialogTitle } from "../ui/dialog";
const PopupContent = ({ text, title }) => {
  return (
    <DialogContent
      className="max-w-[380px] sm:max-w-[425px]  bg-[#ffffff24] shadow-[inset_66px_-66px_66px_rgba(165,165,165,13.1%)] border-0 p-0"
      closeBtnClass="text-white"
    >
      <div className=" relative shadow-[inset_-66px_66px_66px_rgba(165,165,165,13.1%)] px-6 py-10 backdrop-blur-sm rounded-md">
        <DialogTitle asChild>
          <h1 className="text-lg text-white uppercase">{title}</h1>
        </DialogTitle>
        <p className="text-secondary-2 text-base font-medium mt-3">{text}</p>
      </div>
    </DialogContent>
  );
};

export default PopupContent;
