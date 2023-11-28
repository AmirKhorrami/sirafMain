import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Header";
import Footer from "../../components/Footer/Footer";
import RealEstateH from "../../components/Real-EstateCo/RealEstateH";
import RealEstateM from "../../components/Real-EstateCo/RealEstateM";
import RealEstateF from "../../components/Real-EstateCo/RealEstateF";
const RealEstate = () => {
  const agentId = useParams().agentId;
  const [REInfo, setREInfo] = useState();
  useEffect(() => {
    axios
      .get(`https://estate.siraf.app/api/estate/estate/${agentId}`)
      .then((res) => setREInfo(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(REInfo);
  return (
    <>
      <Navbar />
      {REInfo && (
        <div className="w-[1100px] mb-10 rounded-lg border border-[#e5e7eb] m-auto">
          <RealEstateH info={REInfo} />
          <RealEstateM info={REInfo} />
          <RealEstateF info={REInfo} />
        </div>
      )}
      <Footer />
    </>
  );
};

export default RealEstate;
