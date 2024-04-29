"use client";
import AddToCartMenu from "@/app/components/add-to-cart-menu/AddToCartMenu";
import SearchInput from "@/app/components/search-input/SearchInput";
import SocialBtn2 from "@/app/components/social-btn-2/SocialBtn2";
import logoImg from "@/public/images/logo.png";
import { RootState, dispatch } from "@/redux/store";
import { Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetCurrentUser } from "./hooks/use-get-current-user";
import HotLine from "./hot-line/HotLine";
import MenuBar from "./menu-bar/MenuBar";
import "./style.scss";
import { setProfileUser } from "@/redux/slices/user";
import SearchBar from "./search-bar/SearchBar";
import MenuAccount from "@/app/account/menu-account/MenuAccount";
export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const accessToken = useSelector(
    (state: RootState) => state.authenSlice.accessToken
  );

  const cartItems = useSelector(
    (state: RootState) => state.showCart.infoProduct
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

  return (
    <>
      <header className="page-header h-12 md:h-16 shadow-lg lg:shadow-none">
        <AddToCartMenu />
        {showSearchBar && (
          <SearchBar
            onClose={() => setShowSearchBar(false)}
            autoFocus={showSearchBar ? true : false}
          />
        )}
        <div className="container mx-auto px-4">
          <div className="flex flex-row">
            <div className="flex basis-1/3 justify-start items-center gap-10 ">
              <HotLine />
              <div className="hidden lg:block">
                <SocialBtn2 />
              </div>
            </div>
            <div className="flex basis-1/3 justify-center items-center">
              <Link href="/">
                <Image
                  src={logoImg}
                  alt="logo-medi-fast-links"
                  className="size-10 sm:size-16"
                />
              </Link>
            </div>
            <div className="flex basis-1/3 justify-end items-center gap-4 sm:gap-10">
              <div className="hidden lg:flex">
                <SearchInput onFocusSearch={handleFocusSearch} />
              </div>
              <Link href={"/cart"} className="relative">
                <span className="bg-red-500 absolute -right-2 -top-1 text-white rounded-full w-5 h-5 text-center text-sm">
                  {lengthCart}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
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
              </Link>
              <Tooltip placement="bottom" title={infoAcc?.email}>
                <MenuAccount nameAcc={infoAcc?.email} />
                {/* <div className="hidden lg:block">
                    {" "}
                    {infoAcc?.email ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.7em"
                        height="1.7em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 4c-.6 0-1 .4-1 1v1h-1.5l-1.4-3c-.1-.2-.2-.4-.4-.5c-.5-.5-1.3-.6-2-.3l-.7.2l-.7-.3c-.7-.3-1.5-.2-2 .3c-.2.2-.3.4-.4.6L7.5 6H6V5c0-.6-.4-1-1-1s-1 .4-1 1v1c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-.5-.4-1-1-1M4 22v-3c0-2.67 5.33-4 8-4s8 1.33 8 4v3zm14.1-1.9V19c0-.64-3.13-2.1-6.1-2.1S5.9 18.36 5.9 19v1.1zM16 9v1c0 2.21-1.79 4-4 4s-4-1.79-4-4V9h2v1a2 2 0 1 0 4 0V9z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.7em"
                        height="1.7em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
                        />
                      </svg>
                    )}
                  </div> */}
              </Tooltip>

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

              {/* {openMenu && <MenuBar onClickClose={handleClickMenu} />} */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
