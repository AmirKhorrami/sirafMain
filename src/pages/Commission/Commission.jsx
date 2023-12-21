import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import CityCreate from "../../components/CreateCo/CityCreate";

const Commission = () => {
  const [city, setCity] = useState([]);
  const [cityId, setCityId] = useState([]);
  const [close, setClose] = useState(false);
  const [result, setResult] = useState();
  const [total, setTotal] = useState();
  const [total2, setTotal2] = useState();
  const [rent, setRent] = useState();
  const [cal, setCal] = useState();
  const [cal2, setCal2] = useState();
  const closeHandler = () => {
    setClose(!close);
  };
  const resultHandler = (e) => {
    setResult(e.target.value);
    // if (!result.includes(e)) setResult(e);
  };
  const calculate = () => {
    axios
      .post("https://file.siraf.app/api/commission/calculateCommission/", {
        cityId: cityId,
        type: 1,
        total: parseInt(total),
        rent: parseInt(rent),
      })
      .then((res) => setCal(res.data.data));
    setTotal("");
    setCal("");
    // setCity("");
  };
  const calculate2 = () => {
    axios
      .post("https://file.siraf.app/api/commission/calculateCommission/", {
        cityId: cityId,
        type: 2,
        total: parseInt(total2),
        rent: parseInt(rent),
      })
      .then((res) => setCal2(res.data.data));
    setTotal2("");
    setRent("");
    setCal2("");
    // setCity("");
  };
  useEffect(() => {
    document.title = "محاسبه کمیسیون";
  }, [cal]);
  useEffect(() => {
    axios
      .get("https://file.siraf.app/api/city/citys/?web=true/")
      .then((res) => setCity(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(rent);
  console.log(cal2);
  // console.log(result);
  return (
    <div>
      <Header />
      <div>
        <div>
          <div className="container mx-auto max-w-xl">
            <header>
              <p className="text-black font-bold">محاسبه کمیسیون</p>
            </header>
            <main>
              <ul className="py-6">
                <CityCreate city={city} setCityId={setCityId} />
                <li class="flex justify-between items-center">
                  <div
                    id="select-box"
                    class="group w-full mt-4"
                    onClick={closeHandler}
                  >
                    <span class="text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500">
                      نوع معامله
                    </span>
                    <div class="select-box-button relative border w-full text-xs rounded ">
                      {/* <div>
                        <button class="flex items-center justify-between p-2 min-w-[10rem] w-full">
                          <span>{result || 'انتخاب'}</span>
                          <div class="flex items-center">
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
                              class="feather feather-chevron-down  "
                            >
                              <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                          </div>
                        </button>
                        {close && (
                          <div>
                            <div className="flex absolute w-full left-0 top-[calc(100%+3px)] z-[15]">
                              <ul className="bg-white w-full border rounded mx-auto transition-all duration-500 overflow-hidden divide-y">
                                <li
                                  id="option-item"
                                  data-value="1"
                                  value="خرید و فروش"
                                  className="px-2 py-3 hover:bg-zinc-100 cursor-pointer select-box-option "
                                  // onclick={(e) => setResult(e.target.value)}
                                  onclick={(e) => resultHandler(e)}
                                >
                                  خرید و فروش
                                </li>
                                <li
                                  id="option-item"
                                  data-value="2"
                                  data-name="رهن و اجاره"
                                  className="px-2 py-3 hover:bg-zinc-100 cursor-pointer select-box-option  "
                                  // onclick={(e)=>setResult("رهن و اجاره")}
                                  onclick={() => setResult("رهن و اجاره")}
                                >
                                  رهن و اجاره
                                </li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div> */}
                      <select onClick={(e) => setResult(e.target.value)}>
                        <option value="انتخاب" selected>
                          انتخاب
                        </option>
                        <option value="خرید و فروش">خرید و فروش</option>
                        <option value="رهن و اجاره">رهن و اجاره</option>
                      </select>
                    </div>
                  </div>
                </li>
                {result === "خرید و فروش" && (
                  <li class="flex justify-between items-center">
                    <div class="my-2 relative group w-full">
                      <label class="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900">
                        مبلغ کل
                      </label>
                      <div class="relative">
                        <input
                          maxlength=""
                          type="number"
                          placeholder="مثلا 2,400,000,000"
                          class="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                          value={total}
                          onChange={(e) => setTotal(e.target.value)}
                        />
                      </div>
                    </div>
                  </li>
                )}
                {result === "رهن و اجاره" && (
                  <li class="flex justify-between items-center">
                    <div class="my-2 relative group w-full">
                      <label class="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900">
                        مبلغ ودیعه
                      </label>
                      <div class="relative">
                        <input
                          maxlength=""
                          type="number"
                          placeholder="مثلا 2,400,000,000"
                          class="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                          value={total2}
                          onChange={(e) => setTotal2(e.target.value)}
                        />
                      </div>
                    </div>
                  </li>
                )}
                {result === "رهن و اجاره" && (
                  <li class="flex justify-between items-center">
                    <div class="my-2 relative group w-full">
                      <label class="text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900">
                        مبلغ اجاره
                      </label>
                      <div class="relative">
                        <input
                          maxlength=""
                          type="number"
                          placeholder="مثلا 1,400,000"
                          class="border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200"
                          value={rent}
                          onChange={(e) => setRent(e.target.value)}
                        />
                      </div>
                    </div>
                  </li>
                )}
              </ul>
              <p class="text-xs text-zinc-500">
                <span class="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
                کمیسیون قراردادهای جعاله بصورت توافقی میباشد.
              </p>
              {result === "خرید و فروش" && (
                <button
                  type="button"
                  className="rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300"
                  onClick={calculate}
                >
                  محاسبه
                </button>
              )}
              {result === "رهن و اجاره" && (
                <button
                  type="button"
                  className="rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300"
                  onClick={calculate2}
                >
                  محاسبه
                </button>
              )}
              {cal && result === "خرید و فروش" && (
                <div className="my-6">
                  <p className="text-base font-bold text-black">
                    <span className="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                    نتیجه _ با احتساب 9% مالیات بر ارزش افزوده
                  </p>
                  <div className="border rounded-md border-zinc-300 bg-gray-100 p-3 flex gap-y-2 w-full h-max items-center flex-col mt-3">
                    <div className="text-center flex justify-between items-center w-full">
                      <p className="text-sm font-bold">فروشنده</p>
                      <span className="text-sm text-gray-400">
                        {cal.landlord}
                      </span>
                    </div>
                    <div className="text-center flex justify-between items-center w-full">
                      <p className="text-sm font-bold">خریدار</p>
                      <span className="text-sm text-gray-400">
                        {cal.lessor}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {cal2 && result === "رهن و اجاره" && (
                <div className="my-6">
                  <p className="text-base font-bold text-black">
                    <span className="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>{" "}
                    نتیجه _ با احتساب 9% مالیات بر ارزش افزوده
                  </p>
                  <div className="border rounded-md border-zinc-300 bg-gray-100 p-3 flex gap-y-2 w-full h-max items-center flex-col mt-3">
                    <div className="text-center flex justify-between items-center w-full">
                      <p className="text-sm font-bold">موجر</p>
                      <span className="text-sm text-gray-400">
                        {cal2.landlord}
                      </span>
                    </div>
                    <div className="text-center flex justify-between items-center w-full">
                      <p className="text-sm font-bold">مستاجر</p>
                      <span className="text-sm text-gray-400">
                        {cal2.lessor}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {cal === "" && (
                <div class="my-6">
                  <p class="text-base font-bold text-black">
                    <span class="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                    نتیجه _ با احتساب 9% مالیات بر ارزش افزوده
                  </p>
                  <div class="border rounded-md border-zinc-300 bg-gray-100 p-3 flex w-full h-max items-center justify-center mt-3">
                    در حال بروز رسانی و در انتظار دریافت نرخنامه قانونی
                  </div>
                </div>
              )}
              {cal2 === "" && (
                <div class="my-6">
                  <p class="text-base font-bold text-black">
                    <span class="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                    نتیجه _ با احتساب 9% مالیات بر ارزش افزوده
                  </p>
                  <div class="border rounded-md border-zinc-300 bg-gray-100 p-3 flex w-full h-max items-center justify-center mt-3">
                    در حال بروز رسانی و در انتظار دریافت نرخنامه قانونی
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Commission;
