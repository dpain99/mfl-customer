"use client";
import { useRegisterUser } from "@/app/account/hooks/useRegisterUser";
import { IRegisterForm } from "@/app/account/type";
import EyeClose from "@/public/icon/eyes/EyeClose";
import EyeOpen from "@/public/icon/eyes/EyeOpen";
import IArrowLeft from "@/public/icon/IArrowLeft";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegisterProps {
  handleClickLogin: () => void;
}
export default function Register({ handleClickLogin }: RegisterProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formRegister, setFormRegister] = useState<IRegisterForm>({
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const { mutate, isSuccess } = useRegisterUser();

  const handleClickSubmit = () => {
    if (formRegister.password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    } else {
      setPasswordMismatch(false);
    }

    {
      mutate(formRegister);
    }
    if (isSuccess) {
      router.push("/account/register-success");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-row gap-5 items-center">
          <div onClick={handleClickLogin}>
            <IArrowLeft width={"1.6em"} height={"1.6em"} />
          </div>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng ký tài khoản của bạn
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
                  value={formRegister.email}
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
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={formRegister.password}
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
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Xác nhận lại mật khẩu
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="md:text-xl pl-5 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-600">
                  <button
                    type="button"
                    className="text-sm text-gray-600"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? <EyeClose /> : <EyeOpen />}
                  </button>
                </span>
              </div>
              {passwordMismatch && (
                <p className="text-red-500 text-sm mt-1">
                  Mật khẩu không khớp.
                </p>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={handleClickSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng ký
              </button>
            </div>
          </form>

          <p
            className="mt-10 text-center text-sm text-gray-500"
            onClick={handleClickLogin}
          >
            Bạn đã có tài khoản?{" "}
            <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
