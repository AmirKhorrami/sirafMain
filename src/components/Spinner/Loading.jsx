import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <>
      <div className="w-full h-full flex my-20 justify-center">
        <div className="bg-slate-100 w-32 h-32 flex flex-col justify-center items-center rounded-lg border">
          <MoonLoader color="#000" size="40px" className="mb-3" />
          <p className="text-sm">Siraf.com</p>
        </div>
      </div>
    </>
  );
};

export default Loading;
