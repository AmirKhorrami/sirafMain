import React, { useEffect, useState } from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import CatCreate from "../../components/CreateCo/CatCreate";
import CityCreate from "../../components/CreateCo/CityCreate";
import EstatesCreate from "../../components/CreateCo/EstatesCreate";
import MapCreate from "../../components/CreateCo/MapCreate";
import OwnerCreate from "../../components/CreateCo/OwnerCreate";
import ImageCreate from "../../components/CreateCo/ImageCreate";
import InfoCreate from "../../components/CreateCo/InfoCreate";
import FacilitiesCreate from "../../components/CreateCo/FacilitiesCreate";
import FeaturesCreate from "../../components/CreateCo/FeaturesCreate";
import OtherFCreate from "../../components/CreateCo/OtherFCreate";
// import HintModal from "../../components/Modals/HintModal";
import axios from "axios";

const Create = () => {
  const [type, setType] = useState([]);
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState('')
  const [estate, setEstate] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [resultid, setResultid] = useState();
  const [result, setResult] = useState("");
  // const resultHandler = (e) => {
  //   if (!result.includes(e)) setResult(e);
  //   // setCloseEn(!closeEn);
  //   // setCloseIn(!closeIn);
  // };
  useEffect(() => {
    document.title = "ثبت فایل";
  }, []);
  useEffect(() => {
    axios
      .get("https://file.siraf.app/api/category/categorys/")
      .then((res) => setType(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("https://file.siraf.app/api/city/citys/?web=true/")
      .then((res) => setCity(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://estate.siraf.app/api/estate/estates/?web=true&cityIds[]=39&cityIds[]=187"
      )
      .then((res) => setEstate(res.data.data.estats))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://file.siraf.app/api/property/propertyFields/?catId=${resultid}&type=insert`
      )
      .then((res) => setSpecs(res.data.data))
      .catch((err) => console.log(err));
  }, [result]);
  console.log(cityId);
  return (
    <div className="flex flex-col">
      <Header />
      <div>
        <div>
          <main className="max-w-xl mx-auto py-5 px-4">
            <div className="text-xl font-bold py-5">ثبت فایل</div>
            <div className="max-h-max">
              <div className="font-semibold">
                <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                مشخصات کلی
              </div>
              <ul>
                <CatCreate
                  type={type}
                  resultid={resultid}
                  setResultid={setResultid}
                  result={result}
                  setResult={setResult}
                />
                <CityCreate city={city} setCityId={setCityId} />
                <InfoCreate />
                <MapCreate />
                <OwnerCreate />
              </ul>
              {specs && (
                <div>
                  <FeaturesCreate specs={specs} />
                  <FacilitiesCreate specs={specs} />
                  <OtherFCreate specs={specs} />
                </div>
              )}

              <ImageCreate />
              <li className="flex justify-between items-center">
                <div className=" group w-full">
                  <label
                    className="text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900"
                    htmlFor="securityDescription"
                  >
                    توضیحات محرمانه
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      rows="4"
                      className="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                      id="securityDescription"
                    ></textarea>
                  </div>
                </div>
              </li>
              <EstatesCreate estate={estate} />
              <div>
                <button
                  type="button"
                  className="rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300"
                >
                  ثبت نهایی
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
