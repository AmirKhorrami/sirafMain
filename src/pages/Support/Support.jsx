import React, {useEffect} from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";

const Support = () => {
  useEffect(()=>{
    document.title= 'پشتیبانی'
  },[])
  return (
    <div>
      <Header />
      <div>
        <div>
          <div className="overflow-y-auto">
            <p className="font-medium text-sm pr-10 translate-y-2">پشتیبانی</p>
            <div className="container w-full h-max px-2 mr-8">
              <div className="w-full h-max flex justify-center mt-6 ">
                <div className=" false max-[426px]:w-[300px] h-[550px] w-[410px] sm:w-[500px] sm:h-[750px] border overflow-y-auto overflow-x-hidden ">
                  <div className="w-full h-[57px] flex items-center justify-between border-b px-4 ">
                    <button className="rounded-full group hover:none p-1 text-cyan-700 inline-block font-semibold text-sm">
                      ایجاد تیکت جدید
                    </button>
                    <div className="flex items-center gap-x-6 false  fill-zinc-500 ">
                      <button
                        title="آیا از حذف اطمینان دارید؟"
                        className="w-max h-max"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
                        </svg>
                      </button>
                      <button title="جستجو" className="w-max h-max">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 cursor-pointer"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                        </svg>
                      </button>
                      <button title="انتخاب همه" className="w-max h-max ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#71717a"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </button>
                      <div className="w-full h-11/12 hidden  items-center justify-center rounded-md  border px-1 transition duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 cursor-pointer fill-zinc-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
                        </svg>
                        <input
                          className="w-11/12 h-7 px-1 outline-none text-zinc-500 text-sm "
                          type="text"
                          value=""
                        />
                        <button className="w-max h-max">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 fill-zinc-500 cursor-pointer"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" hidden  w-10/12 mx-2 h-[550px] sm:w-[800px] sm:h-[750px]  border relative lg:mx-0 lg:block  ">
                  <p className="text-center mt-80 text-zinc-500 text-sm">
                    هیچ تیکتی وجود ندارد
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
