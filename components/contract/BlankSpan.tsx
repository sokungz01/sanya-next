import React from "react";

const BlankSpan = ({ obj }: { obj: string }) => {
  const blank = "   ";
  return (
    <span
      className={
        obj
          ? "underline whitespace-pre bg-yellow-200 cursor-pointer px-2"
          : "underline whitespace-pre  cursor-pointer px-2"
      }
    >
      {obj ? obj : blank.repeat(3)}
    </span>
  );
};

export default BlankSpan;
