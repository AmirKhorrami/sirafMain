import React, { useEffect } from "react";
import Header from "../../components/Navbar/Header";
import Footer from '../../components/Footer/Footer'

const RealEstate = () => {
  useEffect(() => {
    document.title = "ثبت دفتر املاک";
  }, []);
  return (
    <div>
      <Header />
      <div>
        <main>
          <div className="container max-w-6xl my-6 px-4">
            <h2 className="text-xl font-bold py-5">ثبت دفتر املاک</h2>
            <div className="flex flex-col-reverse lg:flex-row items-start justify-center lg:justify-between gap-12">
              <div className="w-full lg:w-1/2 wrapper_list-real">
                <div className="flex items-center mb-4">
                  <h3 className="text-medium font-bold">
                    مزایای ثبت دفتر املاک :
                  </h3>
                  <div className="mr-auto flex"></div>
                </div>
              </div>
              <div className="w-100 h-100 relative cursor-pointer"></div>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default RealEstate;
