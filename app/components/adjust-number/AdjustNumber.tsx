import React, { ChangeEvent, useState } from "react";
import "./style.scss";

interface AdjustNumberProps {
  adjustNumber: number;
  setAdjustNumber: React.Dispatch<React.SetStateAction<number>>;
}
export default function AdjustNumber({
  adjustNumber,
  setAdjustNumber,
}: AdjustNumberProps) {
  const handleClickDown = () => {
    const newNumber = adjustNumber - 1;
    if (newNumber >= 1) {
      setAdjustNumber(newNumber);
    }
  };

  const handleClickUp = () => {
    const newNumber = adjustNumber + 1;
    setAdjustNumber(newNumber);
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue)) {
      setAdjustNumber(newValue);
    }
  };

  return (
    <div className="number-control">
      <div className="number-left" onClick={handleClickDown}></div>
      <input
        type="number"
        name="number"
        className="number-quantity"
        value={adjustNumber}
        onChange={handleChangeValue}
      />
      <div className="number-right" onClick={handleClickUp}></div>
    </div>
  );
}
