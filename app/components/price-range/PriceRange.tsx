import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

interface PriceRangeProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
}
export default function PriceRange({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}: PriceRangeProps) {
  const rangeInputRef = useRef<HTMLInputElement[]>([]);
  const priceInputRef = useRef<HTMLInputElement[]>([]);
  const rangeRef = useRef<HTMLDivElement | null>(null);
  const priceGap = 100000;

  // const [minPrice, setMinPrice] = useState<number>(100000);
  // const [maxPrice, setMaxPrice] = useState<number>(700000);

  useEffect(() => {
    rangeInputRef.current = Array.from(
      document.querySelectorAll(".range-input input")
    ) as HTMLInputElement[];
    priceInputRef.current = Array.from(
      document.querySelectorAll(".price-input input")
    ) as HTMLInputElement[];
    rangeRef.current = document.querySelector(
      ".slider .progress"
    ) as HTMLDivElement;

    const handlePriceInputChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const minPrice = parseInt(priceInputRef.current[0].value);
      const maxPrice = parseInt(priceInputRef.current[1].value);

      if (
        maxPrice - minPrice >= priceGap &&
        maxPrice <= parseInt(rangeInputRef.current[1].max)
      ) {
        if (target.className === "input-min") {
          rangeInputRef.current[0].value = minPrice.toString();
          if (rangeRef.current !== null) {
            rangeRef.current.style.left = `${
              (minPrice / parseInt(rangeInputRef.current[0].max)) * 100
            }%`;
          }
        } else {
          rangeInputRef.current[1].value = maxPrice.toString();
          if (rangeRef.current !== null) {
            rangeRef.current.style.right = `${
              100 - (maxPrice / parseInt(rangeInputRef.current[1].max)) * 100
            }%`;
          }
        }
      }
    };

    const handleRangeInputChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const minVal = parseInt(rangeInputRef.current[0].value);
      const maxVal = parseInt(rangeInputRef.current[1].value);

      if (maxVal - minVal < priceGap) {
        if (target.className === "range-min") {
          rangeInputRef.current[0].value = (maxVal - priceGap).toString();
        } else {
          rangeInputRef.current[1].value = (minVal + priceGap).toString();
        }
      } else {
        priceInputRef.current[0].value = minVal.toString();
        priceInputRef.current[1].value = maxVal.toString();
        if (rangeRef.current !== null) {
          rangeRef.current.style.left = `${
            (minVal / parseInt(rangeInputRef.current[0].max)) * 100
          }%`;
          rangeRef.current.style.right = `${
            100 - (maxVal / parseInt(rangeInputRef.current[1].max)) * 100
          }%`;
        }
      }
    };

    priceInputRef.current.forEach((input) => {
      input.addEventListener("input", handlePriceInputChange);
    });

    rangeInputRef.current.forEach((input) => {
      input.addEventListener("input", handleRangeInputChange);
    });

    return () => {
      priceInputRef.current.forEach((input) => {
        input.removeEventListener("input", handlePriceInputChange);
      });
      rangeInputRef.current.forEach((input) => {
        input.removeEventListener("input", handleRangeInputChange);
      });
    };
  }, []);

  return (
    <div className="wrapper-price-range">
      <header>
        <h2>Khoảng giá</h2>
      </header>
      <div className="price-input">
        <div className="field">
          <span>Từ</span>
          <input
            type="number"
            className="input-min"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
        </div>
        <div className="separator">-</div>
        <div className="field">
          <span>Đến</span>
          <input
            type="number"
            className="input-max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          type="range"
          className="range-min"
          min="0"
          max="2000000"
          value={minPrice}
          step="100000"
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
        />
        <input
          type="range"
          className="range-max"
          min="0"
          max="2000000"
          value={maxPrice}
          step="100000"
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}
