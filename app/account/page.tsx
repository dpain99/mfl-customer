"use client";
import { postDataForClient } from "@/lib/api";
import EyeClose from "@/public/icon/eyes/EyeClose";
import EyeOpen from "@/public/icon/eyes/EyeOpen";
import Link from "next/link";
import { useState } from "react";
import { IRegisterForm } from "./type";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/slices/authen";

export default function Account() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formLogin, setFormLogin] = useState<IRegisterForm>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };
  const dispatch = useDispatch();

  const handleClickSubmit = async () => {
    try {
      const responseData = await postDataForClient("auth/login", formLogin);
      if (responseData.accessToken !== undefined) {
        router.push("/");
      }
      dispatch(
        setToken({
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken,
        })
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập tài khoản của bạn
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Địa chỉ Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formLogin.email}
                  onChange={handleInputChange}
                  className="md:text-xl pl-5 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formLogin.password}
                  onChange={handleInputChange}
                  className="md:text-xl pl-5 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600">
                  <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeClose /> : <EyeOpen />}
                  </button>
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={handleClickSubmit}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn chưa có tài khoản?{" "}
            <Link
              href="/account/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
