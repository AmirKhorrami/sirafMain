import React, { useState, useEffect } from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import PN from "persian-number";

export default function Modal({ getApi }) {
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [city, setCity] = useState([]);
  const [idArr, setIdArr] = useState([]);
  const [open, setOpen] = useState("");
  const [close, setClose] = useState(false);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://file.siraf.app/api/city/citys/?web=true/${Url}`)
      .then((res) => setCity(res.data.data));
    // .catch((err) => log)
  }, []);
  const stopHandler = (e) => {
    e.stopPropagation();
  };
  const filterUrl = "cities[]=" + idArr?.map(String).join("&cities[]=");
  const Url = useParams().filterUrl;
  let entryUrl = "?web=true&cityIds[]";
  if (idArr.length > 0) {
    for (let i = 0; i < idArr.length - 1; i++) {
      entryUrl += `=${idArr[i]}&` + "cityIds[]";
    }
    entryUrl += `=${idArr[idArr.length - 1]}&lastId=0&`;
  }
  // console.log(entryUrl);
  const clshandler = () => {
    setResult([]);
    setShowModal(false);
    setSearchParams("");
  };
  const cityHandler = (item) => {
    setOpen(item.id);
    setClose(!close);
  };
  const closeHandler = (item) => {
    const index = result.indexOf(item);
    if (index > -1) {
      idArr.splice(index, 1);
    }
    if (index !== -1) {
      const update = [...result];
      update.splice(index, 1);
      setResult(update);
    }
  };
  const resultHandler = (e, id) => {
    if (!result.includes(e)) setResult([...result, e]);
    if (!idArr.includes(id)) setIdArr([...idArr, id]);
  };
  const onClose = () => {
    navigate(`/?${filterUrl}`);
    setShowModal(false);
    getApi(entryUrl, filterUrl);
  };
  // console.log(idArr);
  return (
    <>
      <button
        className=" mx-2 text-[#6b7280]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {result && result.length === 1 ? (
          result
        ) : result && result.length === 0 ? (
          <div className="text-sm flex justify-center items-center">
            <p className="ml-1 mt-1">{PN.convertEnToPe(0)}</p>
            <p>شهر</p>
          </div>
        ) : result && result.length > 1 ? (
          <div>
            <p>{PN.convertEnToPe(result.length)}</p>
            <p>شهر</p>
          </div>
        ) : (
          ""
        )}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-start my-10 flex overflow-x-hidden fixed inset-0 z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className=" w-[800px] h-[1000px] max-w-3xl  rounded-lg  bg-white overflow-y-scroll"
              onClick={stopHandler}
            >
              {/*content*/}
              <div className="border-0 h-full">
                {/*header*/}
                <div className="px-5 pt-3 pb-2 relative border-b shadow-sm">
                  <div className="my-2 group">
                    <div className="flex items-center mb-5">
                      <input
                        type="text"
                        placeholder="انتخاب استان ..."
                        className="border w-full h-14 placeholder:text-xs p-2 rounded focus:outline-none  group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                        value={searchParams.get("filter") || ""}
                        onChange={(event) => {
                          let filter = event.target.value;
                          if (filter) {
                            setSearchParams({ filter });
                          } else {
                            setSearchParams({});
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-row flex-wrap">
                      {result &&
                        result.length > 0 &&
                        result?.map((item, index) => {
                          return (
                            <div
                              className="items-center justify-between p-2 rounded-md font-semibold flex flex-row bg-gray-100 text-[#1f2937] ml-4 my-2"
                              key={index}
                            >
                              <p className="mb-1 ml-4">{item}</p>
                              <AiOutlineClose
                                onClick={() => closeHandler(item)}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="flex items-center absolute left-8 top-7">
                    <button className="rounded-full group hover:bg-gray-100 p-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current w-5 h-5"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                {/*body*/}
                <div className="flex flex-col w-full justify-start items-start">
                  <div className="w-full">
                    {city
                      .filter((city) => {
                        let filter = searchParams.get("filter");
                        if (!filter) return true;
                        let name = city.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                      })
                      .map((item, index) => {
                        return (
                          <div
                            className="flex flex-col justify-between items-center w-full pt-5"
                            key={item.id}
                          >
                            <div
                              onClick={() => cityHandler(item)}
                              onKeyPress={(e) => e.target.value}
                              className="flex items-center justify-between w-full border-b px-5 pb-3"
                            >
                              <p className="text-lg font-bold pb-4">
                                {item.name}
                              </p>
                              <MdKeyboardArrowDown size="25px" />
                            </div>
                            <div className="flex flex-col items-start justify-start w-full bg-grey-50">
                              {close &&
                                open === item.id &&
                                item.county
                                  // .filter((city) => {
                                  //   let filter = searchParams.get("filter");
                                  //   if (!filter) return true;
                                  //   let name = city.name.toLowerCase();
                                  //   return name.startsWith(
                                  //     filter.toLowerCase()
                                  //   );
                                  // })
                                  .map((con, index) => (
                                    <div
                                      className="flex flex-col items-start justify-start w-full"
                                      key={con.id}
                                      onClick={() =>
                                        resultHandler(con.name, con.id)
                                      }
                                    >
                                      <p className="text-base flex items-center hover:bg-gray-200/50 py-5 w-full px-5">
                                        {con.name}
                                      </p>
                                    </div>
                                  ))}
                            </div>
                            <hr />
                          </div>
                        );
                      })}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-between p-6 rounded-b">
                  <button
                    className="bg-white hover:bg-zinc-100/80 text-zinc-500 h-12 flex items-center p-3 text-base rounded disabled:bg-[#e5e7eb] border border-gray-300"
                    type="button"
                    onClick={clshandler}
                  >
                    <span>انصراف</span>
                  </button>

                  <button
                    className=" hover:shadow h-12 rounded disabled:bg-[#e5e7eb] border p-4 text-base px-14 border-gray-300 opacity-50 bg-zinc-900 text-white flex items-center justify-center"
                    type="button"
                    onClick={onClose}
                  >
                    <span>تایید</span>
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
