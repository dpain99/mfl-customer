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
    { value: "10%", img: "Voucher 10%" },
    { value: "15%", img: "Voucher 15%" },
    { value: "20%", img: "Voucher 20%" },
    { value: "25%", img: "Voucher 25%" },
    { value: "GoodLuck", img: "Good Luck" },
    { value: "Iphone 15", img: "IPhone 15" },
    { value: "Freeship", img: `Freeship` },
    { value: "10k", img: "Voucher 10k" },
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
        <div className="circle-container">
          <div className="circle-light-1"></div>
          <div className="circle-light-2"></div>
          <div className="circle-light-3"></div>
          <div className="circle-light-4"></div>
          <div className="circle-light-5"></div>
          <div className="circle-light-6"></div>
          <div className="circle-light-7"></div>
          <div className="circle-light-8"></div>
        </div>
        <div className="wheel" ref={wheelRef}>
          {voucher.map((item, id) => (
            <div className={`reward-${id + 1}`} key={item.value}>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12 14.052l1.656 1.015q.217.137.441-.022q.224-.158.169-.426l-.443-1.886l1.465-1.258q.216-.192.126-.437q-.091-.246-.364-.27l-1.917-.176l-.76-1.767q-.103-.242-.372-.242t-.374.242l-.76 1.767l-1.917.175q-.273.025-.363.27t.125.438l1.465 1.258l-.442 1.886q-.056.268.168.426q.224.159.441.022zM9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348z"
                  />
                </svg>
              </div>

              <span>{item.img}</span>
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
