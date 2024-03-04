"use client";
import MyBtn from "@/app/components/button/MyBtn";
import Success from "@/public/icon/success/Success";

export default function RegisterSuccess() {
  const handleClickStart = () => {
    console.log("a");
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col gap-10 justify-center items-center">
        <Success />
        <span className="text-3xl">Đăng ký thành công</span>
        <div className="flex flex-col gap-5 items-center">
          <span className="text-xl italic">Xin chào, Dũng</span>
          <span className="text-xl">Tiếp tục mua sắm với tài khoản này</span>
        </div>

        <MyBtn title={"Bắt Đầu"} onClick={handleClickStart} />
      </div>
    </div>
  );
}
