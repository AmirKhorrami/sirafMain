import React, { useEffect, useState } from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import Features from "../../components/Features/Features";
import TextModal from "../../components/Modals/TextModal";
import axios from "axios";
import Map from "../../components/Maps/Map";
import Slider from "../../components/Slider/Slider";
import { useParams } from "react-router-dom";
import Counselors from "../../components/Counselors/Counselors";
import { FiBookmark } from "react-icons/fi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { HiMiniInformationCircle } from "react-icons/hi2";
import PN from "persian-number";

const File = () => {
  const fileId = useParams().fileId;
  const [fileData, setFileData] = useState([]);
  const [counselor, setCounselor] = useState([]);
  const [section, setSection] = useState([]);
  useEffect(() => {
    document.title = "فایل";
  }, []);
  useEffect(() => {
    axios
      .get(`https://file.siraf.app/api/file/file/${fileId}/`)
      .then((res) => setFileData(res.data.data))
      .then((res) => setSection(fileData.propertys))
      .catch((err) => console.log(err));
  }, [fileData.id]);
  useEffect(() => {
    axios
      .get(
        `https://estate.siraf.app/api/consultant/consultantsFile/?fileId=${fileId}`
      )
      .then((res) => setCounselor(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  const section1 = section && section.filter((item) => item.section === 1);
  const section2 = section && section.filter((item) => item.section === 2);
  const section3 = section && section.filter((item) => item.section === 3);
  console.log(counselor.consultants);
  return (
    <div>
      <Header />
      <div className=" container my-4 flex">
        <div className="right w-4/12 col-span-10 lg:col-span-3 flex flex-col gap-y-1">
          <div className="mt-8 mx-8 text-gray-600 text-lg">
            <p className="text-xl font-normal">
              <span>مشخصات فایل :</span>
              <span className="font-bold text-black mx-1">
                {" "}
                {PN.convertEnToPe(fileData.id)}
              </span>
            </p>
          </div>
          <div className="w-[400px] mt-8 mx-8 flex bg-gray-50 items-center rounded-lg border border-solid shadow-sm">
            <div className="w-full flex flex-col">
              {section3 &&
                section3.length > 0 &&
                section3
                  .sort((a, b) => a.weightSection - b.weightSection)
                  .map((item, index) => (
                    <div key={item.index} className="flex justify-between">
                      <div className="w-1/2 flex items-center">
                        <p className="px-5 text-lg">{item.name}</p>
                      </div>
                      <div className="w-1/2 bg-white rounded-l-lg text-end">
                        <p className="my-5 text-xl font-bold mx-3">
                          {PN.convertEnToPe(PN.sliceNumber(item.valueItem))}{" "}
                          تومان
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
          <div className="w-[400px] mt-5  mx-8 rounded-lg flex flex-col border border-[#e5e7eb]">
            <div className="text-lg flex justify-center items-center h-1/5 bg-[#fafafa] w-full p-5">
              <p>لیست مشاوران</p>
            </div>
            {counselor?.consultants  ? counselor?.map((item, index) => (
              <Counselors
                key={item?.id}
                img={item?.consultant_id?.avatar || ''}
                estateName={item?.estateName}
                estateId={item?.estateId} 
                name={item?.consultant_id?.name  || ''}
              />
            )): 
            <p className="w-full flex justify-center mt-2">مشاوری وجود ندارد</p> 
            }
          </div>
        </div>
        <div className="left w-8/12 mr-5 mt-10">
          <div className=" w-full">
            {fileData && fileData.media && <Slider media={fileData?.media} />}
            <div className="flex w-full h-20 justify-between items-center">
              <div className="flex">
                <span className=" bg-gray-200 h-8 w-[1px] md:block"></span>
                <p className="text-xl font-bold flex mr-3">
                  {PN.convertEnToPe(fileData.name)}
                </p>
              </div>
              <div className="flex">
                <button className="rounded-full group hover:bg-gray-100 p-1 relative">
                  <FiBookmark
                    size={"35px"}
                    className="text-[#d4d4d8] cursor-pointer hover:bg-[#f3f4f6] hover:rounded-full border-[#e5e7eb]"
                  />
                  <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
                    نشان کردن
                  </span>
                </button>
                <button className="rounded-full group hover:bg-gray-100 p-1 relative">
                  <AiOutlineShareAlt
                    size={"35px"}
                    className="mr-3 cursor-pointer text-[#d4d4d8] hover:bg-[#f3f4f6] hover:rounded-full border-[#e5e7eb]"
                  />
                  <span className="tooltip z-10 rounded-sm text-xs absolute invisible group-hover:visible bg-zinc-900 text-white top-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap p-2 before:absolute before:w-3 before:h-3 before:-top-1 before:rotate-45 before:rounded-sm before:left-1/2 before:-translate-x-1/2 before:bg-zinc-900">
                    اشتراک گذاری
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-sm ml-3 text-zinc-500">
                  {PN.convertEnToPe(fileData.createDateTimeAgo)}
                  {}
                </p>
                <span className=" bg-gray-200 h-4 w-[1px] md:block ml-2"></span>
                <p className="text-sm text-zinc-500">{fileData.city}</p>
              </div>
            </div>
            <div className="flex mr-16">
              {section1 &&
                section1.length !== 0 &&
                section1
                  .sort((a, b) => a.weightSection - b.weightSection)
                  .map((item, index) => (
                    <div
                      className="mt-10 flex"
                      style={{
                        borderLeft:
                          index !== section1.length - 1
                            ? "1px solid #e5e7eb"
                            : "none",
                      }}
                      key={index}
                    >
                      <div className="flex flex-col items-center justify-center px-14">
                        <p className="mb-5 text-xl font-bold">
                          {PN.convertEnToPe(item.valueItem || "نامشخص")}
                        </p>
                        <p className="text-zinc-500 ">
                          {item.name || "نامشخص"}
                        </p>
                      </div>
                    </div>
                  ))}
            </div>
            <p className="text-xl mt-5">
              {PN.convertEnToPe(fileData.description)}
            </p>
            <Features section2={section2} />
          </div>
          <div className="flex justify-center my-10 rounded-lg">
            <Map lat={fileData.lat} long={fileData.long} />
          </div>
          <div className="border-t flex flex-col py-2 mt-20 mb-5">
            <div className="flex justify-start">
              <p className="text-[#71717a] text-xl cursor-pointer">
                ثبت تخلف و مشکل فایل
              </p>
              <button>
                <TextModal />
              </button>
            </div>
            <div className="flex text-[#1f2937] items-center bg-[#f9fafb] mt-3 p-6 rounded-lg">
              <HiMiniInformationCircle className="ml-3 mt-1" size="25px" />
              <p className="text-lg">
                برای افزودن یادداشت ابتدا وارد حساب کاربری خود شوید
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default File;
