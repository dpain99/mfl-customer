"use client";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ModalCompleted from "./components/popup-completed/ModalCompleted";
import ModalLoginRequired from "./components/popup-login-required/ModalLoginRequired";
import { useGetInfoUser } from "./hooks/useGetInfoUser";
import "./style.scss";
import { confetti } from "./components/confetti/confetti";
import Image from "next/image";
import Voucher10 from "@/public/images/voucher-10.png";
import Voucher15 from "@/public/images/voucher-15.png";
import Voucher20 from "@/public/images/voucher-20.png";
import Voucher25 from "@/public/images/voucher-25.png";
import Voucher10k from "@/public/images/voucher-10k.png";
import FreeShip from "@/public/images/freeship.png";
import Iphone15 from "@/public/images/iphone-15-plus-series-image-10.png";
import GoodLuck from "@/public/images/goodluck.jpg";

export default function LuckyWheel() {
  const [voucher, setVoucher] = useState([
    { value: "10%", img: Voucher10 },
    { value: "15%", img: Voucher15 },
    { value: "20%", img: Voucher20 },
    { value: "25%", img: Voucher25 },
    { value: "GoodLuck", img: GoodLuck },
    { value: "Iphone 15", img: Iphone15 },
    { value: "Freeship", img: FreeShip },
    { value: "10k", img: Voucher10k },
  ]);
  const [winningVoucher, setWinningVoucher] = useState<string>("");
  const wheelRef = useRef<HTMLDivElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [checkLogin, setCheckLogin] = useState<boolean>(false);

  const probabilities = [0, 0, 0, 0, 1, 0, 0, 0];
  const percent = [
    [
      [1, 21],
      [339, 358],
    ],
    [294, 337],
    [249, 289],
    [204, 247],
    [159, 202],
    [114, 157],
    [69, 112],
    [24, 67],
  ];
  const totalProbability = probabilities.reduce((acc, curr) => acc + curr, 0);

  function getRandomNumberWithinRange(range: number[] | number[][]) {
    if (Array.isArray(range[0])) {
      const subRanges = range as number[][];
      const randomIndex = Math.floor(Math.random() * subRanges.length);
      const [min, max] = subRanges[randomIndex];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      const [min, max] = range as number[];
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

  function getRandomNumberFromPercent(percent: number[] | number[][]) {
    return getRandomNumberWithinRange(percent);
  }

  const handleClickSpin = () => {
    if (!spinning && wheelRef.current) {
      const randomNumber = Math.random() * totalProbability;
      let accumulatedProbability = 0;

      for (let i = 0; i < probabilities.length; i++) {
        accumulatedProbability += probabilities[i];

        if (randomNumber <= accumulatedProbability) {
          const selectedVoucher = voucher[i];
          setWinningVoucher(selectedVoucher.value);
          setSpinning(true);
          const numberDeg =
            getRandomNumberFromPercent(percent[i]) +
            360 * (Math.floor(Math.random() * (5 - 2 + 1)) + 2);

          spinWheel(numberDeg, onCompleteSpin);
          break;
        }
      }
    }
  };

  const onCompleteSpin = () => {
    setShowCompleted(true);
    setSpinning(false);
  };

  const spinWheel = (targetAngle: number, onComplete: () => void): void => {
    if (wheelRef.current) {
      const rotationDuration = 5000;
      wheelRef.current.style.transition = `transform ${rotationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
      wheelRef.current.style.transform = `rotate(${targetAngle}deg)`;
      setTimeout(() => {
        onComplete();
      }, rotationDuration);
    }
  };

  const handleCloseModals = () => {
    if (wheelRef.current) {
      wheelRef.current.style.transform = "rotate(0deg)";
      wheelRef.current.style.transition = "transform " + 0 + "ms ease-out";
    }
    setShowCompleted(false);
  };

  const accessToken =
    useSelector((state: RootState) => state.authenSlice.accessToken) || "";

  const { data } = useGetInfoUser(accessToken);

  useEffect(() => {
    if (data?.id === undefined) {
      setCheckLogin(true);
    } else {
      setCheckLogin(false);
    }
  }, [data]);

  useEffect(() => {
    if (showCompleted) {
      confetti.start();
    } else {
      confetti.stop();
    }
  }, [showCompleted]);

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center py-10 relative">
      <ModalCompleted
        isOpen={showCompleted}
        handleSetOpen={() => setShowCompleted(true)}
        handleSetClose={handleCloseModals}
        winningVoucher={winningVoucher}
      />
      <ModalLoginRequired
        isOpen={checkLogin}
        handleSetOpen={() => setCheckLogin(true)}
        handleSetClose={() => setCheckLogin(false)}
      />
      <div className="py-10 text-2xl">
        Xin chào, <span className="text-secondary-color">{data?.email}</span>
      </div>
      <div className="container-wheel">
        <div className="spinBtn" onClick={handleClickSpin}>
          {spinning ? "..." : "Quay"}
        </div>
        <div className="wheel" ref={wheelRef}>
          {voucher.map((item, id) => (
            <div className={`reward-${id + 1}`} key={item.value}>
              <Image
                src={item.img}
                alt={`${item.img}`}
                className="image-voucher w-24"
              />
              {/* <span>{item}</span> */}
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 text-2xl">
        Bạn còn lại: <span className="font-bold">1</span> lần quay
      </div>

      <div className="bg-white shadow-lg rounded-lg p-10">
        <span className="text-xl text-secondary-color text-center py-5">
          Quy định:
        </span>
        <ol className="list-decimal text-base md:text-xl">
          <li>
            Sau mỗi lần thanh toán với hóa đơn trên 500k, Quý khách sẽ được tặng
            1 lần quay vòng quay may mắn
          </li>
          <li>Voucher sẽ vào thẳng trong phần quản lý voucher của quý khách</li>
          <li>
            Nếu có thắc mắc vui lòng liên hệ đội ngũ CSKH của Medi Fast Links để
            được tư vấn cụ thể hơn
          </li>
        </ol>
      </div>
      {/* <div className="py-5 text-2xl">
        Xin chào, <span className="text-secondary-color">{data?.email}</span>
      </div>
      <div className="box-wheel">
        <div className="container-wheel" ref={wheelRef}>
          <div className="reward one">
            <span>Iphone 15</span>
            <span>Promax</span>
          </div>
          {voucher.map((items) => (
            <div className="reward" key={items}>
              {items}
            </div>
          ))}
          <div className="reward two">8</div>
          <div className="reward three">7</div>
          <div className="reward four">6</div>
          <div className="reward five">5</div>
          <div className="reward six">4</div>
          <div className="reward seven">3</div>
          <div className="reward eight">2</div>
        </div>
        <div className="spinBtn" onClick={handleClickSpin}>
          {spinning ? "Đang quay..." : "Quay"}
        </div>
      </div>
      <div className="py-5 text-2xl">
        Bạn còn lại: <span className="font-bold">1</span> lần quay
      </div> */}
    </div>
  );
}
