import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import PN from "persian-number";

const Features = ({ section2 }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <>
      <div className="mt-20 w-full">
        <div
          className="flex justify-between border-b py-2 cursor-pointer"
          onClick={openHandler}
        >
          <h2 className="text-xl mb-2 text-[#71717a]">
            سایر امکانات و ویژگی ها
          </h2>
          <IoIosArrowDown size="25px" className="text-[#71717a]" />
        </div>
        <div className="flex-col">
          {open ? (
            <div>
              {section2 &&
                section2.length !== 0 &&
                section2
                  .sort((a, b) => a.weightSection - b.weightSection)
                  .map((item, index) => (
                    <div
                      className=" flex w-full justify-between py-2"
                      style={{
                        borderBottom:
                          index !== section2.length - 1
                            ? "1px solid #e5e7eb"
                            : "none",
                      }}
                      key={item.id}
                    >
                      <p className="text-lg text-zinc-500">{item.name}</p>
                      <p className="text-xl font-bold">
                        {PN.convertEnToPe(item.value)}
                      </p>
                    </div>
                  ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Features;