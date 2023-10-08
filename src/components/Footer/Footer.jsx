import Bazaar from "../../assets/images/bazar.webp";
import Apple from "../../assets/images/appstore.png";
import Enamad from "../../assets/images/enamad.webp";
import Enamad2 from "../../assets/images/enamad2.webp";
import Samandehi from "../../assets/images/samandehi.png";

const Footer = () => {
  return (
      <div className="h-96 bg-[#f3f4f6] flex flex-col w-full">
        <div>
          <h2 className="text-center text-4xl pt-6 text-[#1f2937]">
            دانلود اپلیکیشن سیراف
          </h2>
        </div>
        <div className="flex justify-center">
          <div className="flex  items-center text-center mt-10 border w-52 h-20 p-3 rounded-md cursor-pointer">
            <img className="w-16 h-16" src={Bazaar} alt="" />
            <div className="mr-2">
              <p className="text-sm text-[#374151] font-light">Download on</p>
              <p className="text-lg text-[#1f2937]">Cafe Bazaar</p>
            </div>
          </div>
          <div className="flex  items-center text-center mt-10 border w-52 h-20 p-3 rounded-md mr-5 cursor-pointer">
            <img className="w-16 h-16" src={Apple} alt="" />
            <div className="mr-2">
              <p className="text-sm text-[#374151] font-light">Download on</p>
              <p className="text-lg text-[#1f2937]">Apple Store</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <img className="w-28 h-28 cursor-pointer" src={Enamad} alt="" />
          <img
            className="w-28 h-28 mr-2 cursor-pointer"
            src={Samandehi}
            alt=""
          />
          <img className="w-28 h-28 mr-2 cursor-pointer" src={Enamad2} alt="" />
        </div>
        <div className="flex justify-around mt-10">
          <p className="text-[#374151]">
            © کلیه حقوق متعلق به شرکت فکر بکر سیراف می باشد.
          </p>
          <p className="cursor-pointer text-[#374151]">درباره سیراف</p>
        </div>
      </div>
  );
};

export default Footer;
