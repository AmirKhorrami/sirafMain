import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [check, setCheck] = useState(true);
  const isShowModal = () => {
    setShowModal(false);
    setCheck(true);
  };
  const checkHandler = () => {
    setCheck(!check);
  };
  const stopHandler = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <button
        className=" px-6 py-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineMessage size="25px" />
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className=" w-[500px] h-[350px] max-w-3xl"
              onClick={stopHandler}
            >
              {/*content*/}
              <div className="border-0 h-full rounded-lg shadow-lg bg-white">
                {/*header*/}
                <div className="mx-4 border-b border-solid border-blueGray-200 pt-3 rounded-t">
                  <h3 className="text-xl font-bold mb-5 text-[#000]">
                    ورود به حساب کاربری
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="my-5 flex flex-col  mx-2 text-[#71717a]">
                  <div className="flex items-center">
                    <BsCircleFill size={"10px"} className="mx-2" />
                    <p className="">لطفا شماره موبایل خود را وارد کنید</p>
                  </div>

                  <div className="mx-6 my-3 mt-6 rounded">
                    <input
                      type="text"
                      className="text-center rounded-md w-full h-14 border"
                    />
                  </div>
                  <div className="flex items-center mr-2">
                    <Link
                      className="text-xl text-bold text-[#3b82f6]"
                      to="/about"
                    >
                      قوانین و مقررات سیراف را میپذیرم
                    </Link>
                    <input
                      type="checkbox"
                      className="w-6 h-6 rounded-lg text-black border-2 mt-1 mx-3"
                      onClick={checkHandler}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                  <button
                    className="bg-zinc-500 hover:bg-zinc-600 text-[#fff]  w-full h-14 text-lg rounded disabled:bg-[#e5e7eb]"
                    type="button"
                    disabled={check}
                    onClick={isShowModal}
                  >
                    ارسال کد تایید
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
