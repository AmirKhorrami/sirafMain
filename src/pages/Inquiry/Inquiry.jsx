import React, {useEffect} from "react";
import Header from '../../components/Navbar/Header'
import Footer from '../../components/Footer/Footer'

const Inquiry = () => {
        useEffect(() => {
          document.title = "استعلام ثبتی";
        }, []);
  return (
    <div>
      <div className="flex flex-col">
        <Header/>
        <div>
          <div className="my-10">
            <div className="container max-w-2xl mx-auto grid grid-cols-1 gap-2 px-4 ">
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/estate/originality-document/"
              >
                تصدیق اصالت سند مالکیت
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/ssar/originality-document/"
              >
                تصدیق اصالت اسناد و اوراق دفاتر اسناد رسمی
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/executive/inquery-exitban"
              >
                استعلام ممنوع الخروجی
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/ssar/request-status"
              >
                پیگیری استعلام الکترونیک ملک
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://www.ilenc.ir/LegalPersonSearch.aspx"
              >
                استعلام شناسه ملی
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/ssar/notary-office-capacity"
              >
                {" "}
                دفتر طلاق دارای ظرفیت ثبت واقعه
              </a>
              <a
                className="font-semibold hover:text-zinc-500 border rounded-lg m-1 p-3 lg:mx-12 px-5 shadow-md"
                href="https://my.ssaa.ir/portal/ssar/notary-office-capacity"
              >
                {" "}
                دفتر اسناد رسمی دارای ظرفیت ثبت سند
              </a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Inquiry;