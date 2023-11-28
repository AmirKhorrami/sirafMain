import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import {Link, useParams} from 'react-router-dom'
import { FiPhone } from "react-icons/fi";
import TextModal from "../Modals/TextModal"

const Counselors = ({ img, estateId, name, estateName }) => {
  // const agentId = useParams()?.estateId;
  console.log(estateId);
  return (
    <div>
      <div className="p-5 flex">
        <div className="w-1/4">
          <img
            className="w-24 h-24 rounded-full cursor-pointer"
            alt=""
            src={img}
          />
        </div>
        <div className="flex flex-col w-2/4">
          <div className="hover:text-[#71717a] cursor-pointer">
            <Link
              to={`/real-state/agency/${estateId}`}
              className="mr-4 font-medium"
            >
              {estateName}
            </Link>
          </div>
          <div className="mr-3 mt-3 flex ">
            <AiOutlineStar size="25px" />
            <AiOutlineStar size="25px" />
            <AiOutlineStar size="25px" />
            <AiOutlineStar size="25px" />
            <AiOutlineStar size="25px" />
          </div>
          <div className="flex items-center mr-4 mt-1 hover:text-[#71717a] cursor-pointer">
            <AiOutlineUser className="ml-2" />
            <p className="text-sm">{name}</p>
            <p className="text-sm">{estateId}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10  ml-3 rounded-xl cursor-pointer border border-slate-300 flex hover:text-[#1d4ed8] justify-center items-center">
            <button>
              <TextModal />
            </button>
          </div>
          <div className="w-10 h-10  rounded-xl cursor-pointer border border-slate-300 flex hover:text-[#1d4ed8] justify-center items-center">
            <FiPhone size="25px" />
          </div>
        </div>
      </div>
      <hr style={{ margin: "0px 15px" }} />
    </div>
  );
};

export default Counselors;
