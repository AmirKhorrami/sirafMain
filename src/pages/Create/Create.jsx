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
import { fromJSON } from "postcss";

const Create = () => {
  const [type, setType] = useState([]);
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState("");
  const [estate, setEstate] = useState([]);
  const [specs, setSpecs] = useState([]);
  const [resultid, setResultid] = useState();
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  // const [loc, setLoc] = useState("");
  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhoneNumber, setOwnerPhoneNumber] = useState("");
  const [visitName, setVisitName] = useState("");
  const [visitPhoneNumber, setVisitPhoneNumber] = useState("");
  const [securityDescription, setSecurityDescription] = useState("");
  const [merge, setMerge] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState([]);

  const saveTHandler = (data) => {
    setMerge((prev) => ({ ...prev, ...data }));
    // console.log(merge);
  };

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
  const add = () => {
    const formData = new FormData();
    formData.append("category_id", resultid);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("ownerName", ownerName);
    formData.append("ownerPhoneNumber", ownerPhoneNumber);
    formData.append("visitName", visitName);
    formData.append("visitPhoneNumber", visitPhoneNumber);
    formData.append("securityDescription", securityDescription);
    formData.append("fetcher", JSON.stringify(merge));
    formData.append("lat", 12.4154545454);
    formData.append("long", 16.1484848448);

    formData.append("city_id", cityId);
    formData.append("estateIds", null);
    formData.append("filesName", "798");

    selectedImage.forEach((item) => {
      formData.append("files", item);
    });

    axios
      .post(
        "https://file.siraf.app/api/file/addFileEstate/?web=true",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // 'Authorization': "Bearer " + localStorage.getItem("accessToken"),
            Authorization:
              "Bearer " +
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA1MDYwNzI5LCJpYXQiOjE3MDI0Njg3MjksImp0aSI6Ijc4MjUyMTNiNmFmNTQ4MGZiM2U1MmQ4ZDg3OTJmM2UyIiwidXNlcl9pZCI6Mzc2LCJpZCI6Mzc2LCJuYW1lIjoiXHUwNjI4XHUwNjJmXHUwNjQ4XHUwNjQ2IFx1MDY0Nlx1MDYyN1x1MDY0NSIsInVzZXJuYW1lIjpudWxsLCJhdmF0YXIiOiJodHRwczovL21pbmlvLnNpcmFmLmFwcC9hdXRoL3N0YXRpYy91cGxvYWQvdXNlci9hdmF0YXIvYXZhdGFyLnBuZyIsIm1vYmlsZVByaXZhdGUiOmZhbHNlLCJlbWFpbCI6bnVsbCwicGhvbmUiOiIwOTM4ODExMDU3NyIsImJpcnRoX2RhdGUiOm51bGwsInN0YXR1cyI6MSwiZ2VuZGVyIjowLCJiaW8iOm51bGwsInR5cGUiOjEsImNpdHlfaWQiOjF9.KCP39GHCSTBv0CPKOnYscYf6uVzxIVuORw2GPFH5iAE",
          },
        }
      )
      .then((res) => console.log(res));
  };
  console.log(localStorage.getItem("accessToken"));
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
                <InfoCreate
                  name={name}
                  setName={setName}
                  description={description}
                  setDescription={setDescription}
                  address={address}
                  setAddress={setAddress}
                />
                <MapCreate />
                <OwnerCreate
                  ownerName={ownerName}
                  setOwnerName={setOwnerName}
                  ownerPhoneNumber={ownerPhoneNumber}
                  setOwnerPhoneNumber={setOwnerPhoneNumber}
                  visitName={visitName}
                  setVisitName={setVisitName}
                  visitPhoneNumber={visitPhoneNumber}
                  setVisitPhoneNumber={setVisitPhoneNumber}
                />
              </ul>
              {specs && (
                <div>
                  <FeaturesCreate specs={specs} saveTHandler={saveTHandler} />
                  <FacilitiesCreate specs={specs} saveTHandler={saveTHandler} />
                  <OtherFCreate specs={specs} saveTHandler={saveTHandler} />
                </div>
              )}

              <ImageCreate
                imagePreview={imagePreview}
                setImagePreview={setImagePreview}
                setSelectedImage={setSelectedImage}
              />
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
                      className="border w-full placeholder:text-xs p-2 rounded focus:outline-none group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                      id="securityDescription"
                      value={securityDescription}
                      onChange={(e) => setSecurityDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </li>
              <EstatesCreate estate={estate} />
              <div>
                <button
                  type="button"
                  className="rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300"
                  onClick={add}
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
