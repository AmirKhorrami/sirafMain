import Bazaar from "../../assets/images/bazar.webp";
import Sib from "../../assets/images/sib.svg";
import Enamad from "../../assets/images/enamad.webp";
import Enamad2 from "../../assets/images/enamad2.webp";
import Samandehi from "../../assets/images/samandehi.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#f3f4f6] flex flex-col w-full">
      <div>
        <h2 className="text-center text-4xl pt-6 text-[#1f2937]">
          دانلود اپلیکیشن سیراف
        </h2>
      </div>
      <div className="flex justify-center flex-col mt-10 sm:flex-row items-center">
        <a href="https://cafebazaar.ir/app/app.siraf" target="_blank">
          <div className="flex  items-center text-center mt-2 border w-52 h-20 p-3 mr-5 rounded-lg cursor-pointer">
            <img className="w-16 h-16" src={Bazaar} alt="" />
            <div className="mr-2 text-left">
              <p className="text-sm text-[#374151] font-light">Download on</p>
              <p className="text-lg text-[#1f2937]">Cafe Bazaar</p>
            </div>
          </div>
        </a>

        <div className="flex  items-center text-center mt-2 border w-52 h-20 p-3 rounded-lg mr-5 cursor-pointer">
          <div className="mr-2">
            <p className="text-sm text-[#374151]">دریافت مستقیم نسخه اندروید</p>
          </div>
        </div>
        <a
          href="https://sibapp.com/applications/Siraf%7CAccesstoRealestateofficesApplication?from=search"
          target="_blank"
        >
          <div className="flex  items-center text-center mt-2 border w-52 h-20 p-3 rounded-lg mr-5 cursor-pointer">
            <img className="w-12 h-12" src={Sib} alt="" />
            <div className="mr-2 text-left">
              <p className="text-sm text-[#374151] font-light">Download on</p>
              <p className="text-lg text-[#1f2937]">Sib App</p>
            </div>
          </div>
        </a>
      </div>
      <div className="flex justify-center mt-5">
        <a
          href="https://markazi.irannsr.org/index.php?module=web_directory&wd_id=106924&ctp_id=1086&id=39041"
          target="_blank"
        >
          <img className="w-28 h-28 cursor-pointer" src={Enamad} alt="" />
        </a>
        <img className="w-28 h-28 mr-2 cursor-pointer" src={Samandehi} alt="" />
        <a
          href="https://trustseal.enamad.ir/?id=363177&Code=5vWlQWr4lIUKE8eEvSch"
          target="_blank"
        >
          <img className="w-28 h-28 mr-2 cursor-pointer" src={Enamad2} alt="" />
        </a>
      </div>
      <div className="flex justify-around items-center flex-col sm:flex-row-reverse mt-10 mb-3">
        <Link
          to="/about"
          className="cursor-pointer text-[#374151] mb-10 sm:mb-0"
        >
          درباره سیراف
        </Link>
        <p className="text-[#374151]">
          © کلیه حقوق متعلق به شرکت فکر بکر سیراف می باشد.
        </p>
      </div>
    </div>
  );
};

export default Footer;
