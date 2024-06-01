"use client";
import MenuAccount from "@/app/account/menu-account/MenuAccount";
import Divider from "@/app/components/divider/Divider";
import { playfairDisplay } from "@/fonts/font";
import { setProfileUser } from "@/redux/slices/user";
import { dispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { useGetCurrentUser } from "./hooks/use-get-current-user";
import SearchBar from "./search-bar/SearchBar";
import HotLine from "./hot-line/HotLine";
import MenuBar from "./menu-bar/MenuBar";

export default function RootHeader() {
  const cartItems = useSelector(
    (state: RootState) => state.showCart.infoProduct
  );
  const accessToken = useSelector(
    (state: RootState) => state.authenSlice.accessToken
  );

  const lengthCart = cartItems?.length || 0;
  const { data: infoAcc } = useGetCurrentUser(accessToken || "");

  useEffect(() => {
    if (infoAcc) {
      dispatch(
        setProfileUser({
          user: infoAcc,
        })
      );
    }
  }, [JSON.stringify(infoAcc)]);

  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);

  const handleFocusSearch = () => {
    setShowSearchBar(true);
  };

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-white">
      {showSearchBar && (
        <SearchBar
          onClose={() => setShowSearchBar(false)}
          autoFocus={showSearchBar ? true : false}
        />
      )}
      <header className="container mx-auto px-2 py-2 flex flex-row">
        <div className="flex justify-start  items-center basis-1/3 ">
          <div className="hidden lg:flex">
            <HotLine />
          </div>
        </div>
        <div className="basis-1/3  flex justify-center items-center">
          <Link href="/">
            <span
              className={`${playfairDisplay.className} font-bold text-base lg:text-3xl tracking-wider text-logo whitespace-nowrap`}
            >
              Medi Fast Links JSC
            </span>
          </Link>
        </div>
        <div className="flex basis-1/3 justify-end items-center gap-3">
          <div className="justify-end items-center gap-3 hidden lg:flex">
            <div
              className="border border-solid border-black rounded-full p-2 text-black hover:cursor-pointer"
              onClick={handleFocusSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z" />
                  <path
                    strokeLinecap="round"
                    d="M26.657 14.343A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                  />
                </g>
              </svg>
            </div>
            <Divider width={"2"} height={"5"} />
            <Link href={"/cart"} className="relative">
              <div className="border border-solid border-black rounded-full p-2 text-black">
                <span className="bg-red-500 absolute -right-2 -top-1 text-white rounded-full w-5 h-5 text-center text-sm">
                  {lengthCart}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608z" />
                    <path
                      strokeLinecap="round"
                      d="m5 7l-.81-3.243A1 1 0 0 0 3.22 3H2m6 18h2m6 0h2"
                    />
                  </g>
                </svg>
              </div>
            </Link>
            <Divider width={"2"} height={"5"} />
            <MenuAccount nameAcc={infoAcc?.email} />
          </div>

          <div className="block lg:hidden" onClick={handleClickMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.8em"
              height="1.8em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 7a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1"
              />
            </svg>
          </div>

          {openMenu && <MenuBar onClickClose={handleClickMenu} />}
        </div>
      </header>
    </div>
  );
}
