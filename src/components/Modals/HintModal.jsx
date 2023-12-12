import React, { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";

const HintModal = () => {
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
            class="fixed flex items-center justify-center top-0 left-0 right-0 z-40 w-full overflow-x-hidden overflow-y-auto inset-0 h-full bg-black/30 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <div
              id="modal"
              class="relative w-full h-full false z-50 p-4"
              onClick={stopHandler}
            >
              <div class="max-w-xl mx-auto bg-white rounded">
                <header class=" flex justify-between border-b text-center p-4 font-bold">
                  <span>راهنمای آپلود فایل های تصویری</span>
                  <button class="bg-zinc-500 font-normal text-white p-1 rounded-md">
                    بستن
                  </button>
                </header>
                {/*body*/}
                <main class="p-4">
                  <div class="mb-4 text">
                    <h2 class="font-semibold mb-2">
                      <span class="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                      تصویر(نقشه)
                    </h2>
                    <div class="text-sm text-zinc-500 leading-6 text-justify">
                      <p>از تصاویر با کیفیت و واقعی استفاده کنید.</p>
                      <p>
                        از درج تصاویر تکراری و غیر مرتبط در فایل خودداری نمایید.
                      </p>
                      <p>تصاویری که حاوی اطلاعات شخصی باشند، حذف خواهند شد.</p>
                      <p>تصاویر متعلق به فایل دیگیری در سیراف نباشند.</p>
                      <p>
                        از درج شماره تماس و قیمت روی تصاویر فایل خودداری نمایید.
                      </p>
                      <p>
                        تصاویری که شامل هر نوع علامت تجاری باشند حذف خواهند شد.
                      </p>
                      <p>استفاده ابزاری از تصاویر اشخاص در فایل مجاز نیست.</p>
                      <p>
                        در صورت وجود عنوان برای تصویر، میبایست مرتبط با آن باشد.
                      </p>
                      <p>
                        در صورتی که تصویر نقشه میباشد ، ترجیحا برای آن عنوان
                        وارد کنید و از فایل با کیفیت استفاده نمایید.
                      </p>
                      <p>حداکثر حجم مورد پذیرش : 10Mb</p>
                      <p>فرمت های مورد پذیرش : Webp , TIFF , PNG , JPEG</p>
                    </div>
                  </div>
                  <div class="mb-4 text">
                    <h2 class="font-semibold mb-2">
                      <span class="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                      ویدیو
                    </h2>
                    <div class="text-sm text-zinc-500 leading-6 text-justify">
                      <p>از ویدیو با کیفیت و واقعی استفاده کنید.</p>
                      <p>
                        از درج ویدیوهای تکراری و غیر مرتبط در فایل خودداری
                        نمایید.
                      </p>
                      <p>
                        ویدیوهایی که حاوی اطلاعات شخصی باشند، حذف خواهند شد.
                      </p>
                      <p>ویدیو متعلق به فایل دیگیری در سیراف نباشند.</p>
                      <p>
                        از درج شماره تماس و قیمت روی ویدیو فایل خودداری نمایید.
                      </p>
                      <p>استفاده ابزاری از ویدیوهای اشخاص در فایل مجاز نیست.</p>
                      <p>حداکثر حجم مورد پذیرش : 30</p>
                      <p>فرمت های مورد پذیرش : MKV , AVI , 3GP , MP4 , MOV</p>
                    </div>
                  </div>
                  <div class="mb-4 text">
                    <h2 class="font-semibold mb-2">
                      <span class="inline-flex bg-black w-1.5 h-1.5 rounded-full ml-1"></span>
                      ویدیو
                    </h2>
                    <div class="text-sm text-zinc-500 leading-6 text-justify">
                      <p>
                        برای بارگذاری تور مجازی ابتدا اپلیکیشن Google street
                        view را بر روی گوشی خود نصب نموده و از محیط داخلی یا
                        بیرونی ملک مورد نظر، تصویر کروی 360درجه بسازید. خروجی
                        این اپلیکیشن که یک فایل تصویری با فرمت JPEG با حجم
                        نهایتا 10مگابایت را با استفاده از نرم افزار تحت ویندوز
                        krpano به تور مجازی 360 درجه ای تبدیل نمایید. در آخر
                        پوشه ایجاد شده مربوط را بصورت فایل فشرده با فرمتZip ،
                        درآورده و در قسمت آپلود امکانات تصویری فایل، وارد
                        کنید.تورمجازی بارگذاری شده بصورت خودکار پس از تایید
                        کارشناسان مربوطهدر مشخصات فایل شما قابل رویت است.
                      </p>
                      <a
                        class="block text-blue-500 hover:underline mb-4 mt-2"
                        href="/profile/files/create#"
                      >
                        جهت مشاهده آموزش ساخت تور مجازی اینجا کلیک کنید
                      </a>
                      <a
                        class="block text-blue-500 hover:underline"
                        href="/profile/files/create#"
                      >
                        لینک دانلود اپلیکیشن Google street view
                      </a>
                      <a
                        class="block text-blue-500 hover:underline"
                        href="/profile/files/create#"
                      >
                        لینک دانلود نرم افزار krpano
                      </a>
                    </div>
                  </div>
                </main>
                {/*footer*/}
              </div>
            </div>
          </div>
          {/* </div>
          </div>
        </div>  */}
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default HintModal;
