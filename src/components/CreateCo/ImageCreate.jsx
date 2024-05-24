import React, { useState } from "react";

let filesPreview = [];
let selectedFiles = [];
const ImageCreate = ({ imagePreview, setImagePreview, setSelectedImage }) => {
  // const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const files = e.target.files;
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      selectedFiles.push(file);
      filesPreview.push(URL.createObjectURL(file));
    }

    setSelectedImage(selectedFiles);
    console.log(filesPreview);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function remove(array, index) {
    let list = [];

    for (let i = 0; i < array.length; i++) {
      if (i != index) {
        list.push(array[i]);
      }
    }
    return list;
  }
  const delHandler = (e, index) => {
    // console.log(index);

    filesPreview = remove(filesPreview, index);
    selectedFiles = remove(selectedFiles, index);
    setImagePreview(filesPreview);
    console.log(filesPreview.length);
    console.log(selectedFiles.length);
  };
  return (
    <div>
      <div className="py-3 border-t">
        <div className="font-semibold">
          <span className="inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1"></span>
          آپلود فایل های تصویری
          <button className="text-blue-600 text-xs mr-1">(راهنما)</button>
          <div className="text-gray-600 text-sm pt-1 font-light ">
            (عکس،نقشه،ویدیو و تورمجازی)
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 pt-5 w-full ">
          <label className="border-dashed border-[3px] border-zinc-400 rounded-lg flex cursor-pointer w-24 h-24 hover:opacity-50 ">
            <input
              type="file"
              className="hidden"
              multiple=""
              accept=".jpg , .jpeg , .png , .mp4 , .avi , .zip"
              onChange={handleImageChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-zinc-400 m-auto inline w-10 h-10"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
            </svg>
          </label>

          {filesPreview.map((item, index) => {
            return (
              <ul className="flex flex-wrap gap-4 col-span-3 sm:col-span-4 mr-8 sm:mr-0">
                <li className="relative flex">
                  {item && (
                    <img
                      className="w-24 h-24 rounded object-cover"
                      alt="Image Preview"
                      src={item}
                    />
                  )}
                  <p className="p-1 bg-[#00000075] w-full overflow-hidden absolute bottom-0 text-white rounded"></p>
                  <button
                    className="absolute top-2 left-2 bg-black/70 p-1 rounded-lg hover:opacity-30"
                    // file-index={item.index}
                    onClick={(e) => delHandler(e, index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
                    </svg>
                  </button>
                  <div
                    className="absolute top-2 right-0"
                    data-headlessui-state=""
                  >
                    <button
                      className="bg-black/70 p-1 rounded-lg hover:opacity-30"
                      type="button"
                      aria-expanded="false"
                      data-headlessui-state=""
                      id="headlessui-popover-button-:r0:"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pen fill-white"
                        viewBox="0 0 16 16"
                        id="IconChangeColor"
                      >
                        <path
                          d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                          id="mainIconPathAttribute"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div
                    style={{
                      position: "fixed",
                      top: "1px",
                      left: "1px",
                      width: "1px",
                      height: "0px",
                      padding: "0px",
                      margin: "-1px",
                      overflow: "hidden",
                      clip: "rect(0px, 0px, 0px, 0px)",
                      whiteSpace: "nowrap",
                      borderWidth: "0px",
                      display: "none",
                    }}
                  ></div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCreate;
