import React, { useEffect, useState } from "react";
import Header from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import Sib from '../../assets/images/sib.svg'

const RealEstate = () => {
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState('');
  const closeHandler = (e) => {
    setOpen(e.target.id);
    setClose(!close);
  };

  useEffect(() => {
    document.title = "ثبت دفتر املاک";
  }, []);
  console.log(open);
  return (
    <div>
      <Header />
      <div>
        <div className="w-full flex justify-center">
          <main>
            <div className="container max-w-6xl my-6 px-4 mr-24">
              <h2 className="text-xl font-bold py-5">ثبت دفتر املاک</h2>
              <div className="flex flex-col-reverse lg:flex-row items-start justify-center lg:justify-between gap-12">
                <div className="w-full lg:w-1/2 wrapper__list-real">
                  <div className="flex items-center mb-4">
                    <h3 className="text-medium font-bold ">
                      مزایای ثبت دفتر املاک :
                    </h3>
                    <div className="mr-auto flex"></div>
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="1"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        1.مدیریت کامل دفتر املاک
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '1' && (
                      <div className=" accordion-content ">
                        <ul className="text-sm text-zinc-500">
                          <li>
                            مدیریت همه جانبه فایل ها و درخواست های مشتریان و
                            انطباق هوشمند آن ها .
                          </li>
                          <li>مدیریت کامل مشاورین و رنج بندی آن ها .</li>
                          <li>
                            امکان تنظیم پروفایل اختصاصی دفتر املاک به همراه
                            کیوآر کد اختصاصی .
                          </li>
                          <li>
                            امکان مشاهده آمار دقیق و لحظه به لحظه دفتر املاک (
                            فایل ها، درخواست های مشتریان و مشاوران) .
                          </li>
                          <li>
                            تقویم اختصاصی جهت برنامه ریزی امور دفتر املاک.
                          </li>
                          <li>
                            دسترسی آسان تر به دفاتر املاک دیگر جهت همکاری.
                          </li>
                          <li>
                            امکان محرمانه نمودن فایل های دفتر جهت جلوگیری از
                            نمایش عمومی.
                          </li>
                          <li>
                            امکان خروجی گرفتن لحظه ای از کلیه فایل ها و درخواست
                            های دفتر در قالب فایل اکسل.
                          </li>
                          <li>
                            امکان ثبت رایگان و بدون محدودیت فایل، درخواست مشتری
                            و مشاور برای دفتر املاک.
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="2"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        2.دسترسی به ویترین مشتریان و فایل های اختصاصی سیراف
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '2' && (
                      <div className=" accordion-content  ">
                        <ul className="text-sm text-zinc-500">
                          <li>
                            امکان دریافت فایل و درخواست مشتریان شهر مورد فعالیت
                            در صورت پذیرش حداقل 10 درصد از املاک شهر و تبلیغات
                            شهری.
                          </li>
                          <li>
                            امکان درج فایل و درخواست مشتریان دفتر املاک در
                            ویترین جهت همکاری با سایر دفاتر املاک.
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="3"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        3.بهره مندی از امکانات منحصر به فرد برای ارائه فایل
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '3' && (
                      <div className=" accordion-content  ">
                        <p className="text-sm text-zinc-500">
                          بالابردن سرعت بازدیدها توسط ایجاد تور مجازی رایگان و
                          ساخت ویدیو و تصویر برای فایل های دفتر و جلوگیری از
                          بازدید های بی مورد
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="4"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        4.سهولت در ارتباط با مشتریان
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '4' && (
                      <div className=" accordion-content  ">
                        <ul className="text-sm text-zinc-500">
                          <li>امکان گفتگوی آنلاین مشتریان با مشاورین .</li>
                          <li>
                            دسترسی مشتریان از راه دور به پروفایل دفتر املاک توسط
                            کیوآر کد و لینک اختصاصی و مشاهده فایل های دفتر.
                          </li>
                          <li>
                            ارائه فایل و درخواست توسط مشتریان به دفتر املاک بدون
                            مراجعه حضوری و تنها از طریق پروفایل.
                          </li>
                          <li>
                            نمایش دفتر املاک ثبت شده بر روی نقشه در کنار سایر
                            دفاتر املاک و افزایش تعامل با مشتری.
                          </li>
                          <li>
                            بهره مندی از تبلیغات رایگان شهری پلتفرم سیراف در
                            صورت پذیرش حداقل 10 درصد از دفاتر املاک شهر در این
                            پلتفرم.
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="5"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        5.بهره مندی از محتواهای آموزشی اختصاصی حوزه املاک
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '5' && (
                      <div className=" accordion-content  ">
                        <p className="text-sm text-zinc-500">
                          تیم آموزشی سیراف با کمک کارشناسان مجرب خود به طور
                          پیوسته آموزش&zwnj;های اختصاصی و کاربردی برای کاربران
                          خود تهیه می&zwnj; نماید که به حرفه&zwnj;ای تر شدن شما
                          و بالا رفتن آگاهی کاربران کمک شایانی میکند. با ثبت نام
                          دفتر املاک خود می توانید به صورت رایگان از این امکان
                          نیز بهره&zwnj;مند شوید.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 ">
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="6"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        6.صرفه جویی در زمان و هزینه و افزایش سرعت و بهره وری
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '6' && (
                      <div className=" accordion-content  ">
                        <p className="text-sm text-zinc-500">
                          با استفاده از امکانات پلتفرم سیراف که موجب بالا رفتن
                          سرعت شما شده و دسترسی به آمار دقیق و لحظه به لحظه از
                          فعالیت های دفتر املاک خود که موجب منظم و دقیق پیش رفتن
                          کارها می شود و با وجود در دسترس قرار گرفتن دفتر املاک
                          شما برای عموم مردم، طبیعتا بهره وری دفتر شما چند برابر
                          شده و در پی آن، کسب و کار املاک شما رونق چشمگیری خواهد
                          یافت.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-3 bg-gray-100 px-3 rounded-md border border-zinc-200 mb-2 " >
                    <div
                      className="w-full cursor-pointer flex items-center justify-between "
                      id="7"
                      onClick={closeHandler}
                    >
                      <h2 className="text-sm font-semibold ">
                        7.کسب درآمد از طریق عضویت در تیم فروش سیراف
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                      </svg>
                    </div>
                    {close && open === '7' && (
                      <div className=" accordion-content  ">
                        <p className="text-sm text-zinc-500">
                          مدیران و مشاوران املاک می توانند با عضویت در تیم فروش
                          سیراف، از درآمد چشمگیری بهره مند گردند. جهت کسب
                          اطلاعات بیشتر با شماره 09021181929 و یا پشتیبانی بخش
                          فروش و بازاریابی در ارتباط باشید.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="my-4 text-justify text-sm">
                    <span>
                      برای استفاده از پلتفرم سیراف نیاز به خرید سیستم کامپیوتری
                      و حضور فیزیکی مدیر املاک و مشاوران در دفتر املاک نمی&zwnj;
                      باشد و می &zwnj;توانند از راه دور و فقط با تلفن همراه خود
                      به فعالیت بپردازند.
                    </span>
                  </div>
                  <div className="my-5 text-justify  text-sm">
                    <span>
                      سیراف با توجه به نظرات ارزشمند فعالان حوزه املاک و کاربران
                      عزیز لحظه به لحظه در حال به روز رسانی و ایجاد امکانات جدید
                      در پلتفرم می&zwnj;باشد لذا اپلیکیشن خود را همیشه بروز نگه
                      دارید. همچنین می توانید نظرات ارزشمند خود را از طریق شماره
                      09021181929 و یا بخش پشتیبانی با ما در میان بگذارید.
                    </span>
                  </div>
                  <div className="text-justify  text-sm">
                    <span>
                      برای ایجاد یک تحول اساسی و بالا بردن بهره &zwnj;وری و رونق
                      کسب و کارتان همین الان می &zwnj;توانید دفتر املاک خود را
                      با نصب اپلیکیشن سیراف و از طریق لینک &zwnj;های زیر ثبت
                      نمایید . جهت راهنمایی و کسب اطلاعات بیشتر در خصوص ثبت دفتر
                      املاک، عدد 8 را به شماره 10008447 ارسال فرمایید.
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div>
                      <div className="mt-8 mb-3">
                        <span className="text-lg ">دانلود اپلیکیشن املاک</span>
                      </div>
                      <a
                        target="blank"
                        className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 mb-3"
                        href="https://minio.siraf.app/auth/static/apps/estate.apk"
                      >
                        <div className="text-left">
                          <p className="text-xs text-gray-700 p-3">
                            دریافت مستقیم نسخه اندروید
                          </p>
                        </div>
                      </a>
                      <div className="flex items-center border rounded-lg px-4 mt-3 py-2 mb-1 w-52 mx-2 order-3 max-md:order-3">
                        <a
                          className="flex "
                          target="blank"
                          href="https://sibapp.com/applications/Siraf|RealestateOfficeManagementApplication?from=category"
                        >
                          <img
                            className="w-7 md:w-8"
                            src={Sib}
                            width="175"
                            height="240"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <div className="text-left mr-3 ">
                            <p className="text-xs text-gray-700 mt-1">
                              Download on{" "}
                            </p>
                            <p className="text-xs md:text-sm"> Sib App </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className=" mt-8 mb-3">
                        <span className="text-lg ">دانلود اپلیکیشن مشاور</span>
                      </div>
                      <a
                        target="blank"
                        className="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 mb-3"
                        href="https://minio.siraf.app/auth/static/apps/consultant.apk"
                      >
                        <div className="text-left">
                          <p className="text-xs text-gray-700 m-3">
                            دریافت مستقیم نسخه اندروید
                          </p>
                        </div>
                      </a>
                      <div className="flex items-center border rounded-lg px-4 mt-3 py-2 mb-1 w-52 mx-2 order-3 max-md:order-3">
                        <a
                          className="flex "
                          target="blank"
                          href="https://sibapp.com/applications/RealestateconsultantApplication?from=category"
                        >
                          <img
                            className="w-7 md:w-8"
                            src={Sib}
                            width="175"
                            height="240"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                          <div className="text-left mr-3 ">
                            <p className="text-xs text-gray-700 mt-1">
                              Download on{" "}
                            </p>
                            <p className="text-xs md:text-sm"> Sib App </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-100 h-100 relative cursor-pointer">
                  <video
                    className=" video-player"
                    id="videoPlayer"
                    // autoPlay
                    controls
                  >
                    <source
                      src="https://minio.siraf.app/auth/static/baseFile/inter.m4v"
                      type="video/mp4"
                    />
                  </video>
                  <div></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealEstate;
