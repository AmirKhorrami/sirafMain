import React, { useEffect, useState } from "react";
import FileItems from "../../components/Items/FileItems";
import axios from "axios";

const ListFileItems = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://file.siraf.app/api/file/files/?web=true&cityIds[]=39&lastId=0&"
      )
      .then((res) => setFiles(res.data.data.files))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="my-8 max-w-7xl">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {files.map((item) => (
            <FileItems
              key={files.id}
              cityName={item.city.name}
              name={item.name}
              properties={item.propertys}
              category={item.category.fullCategory}
              image={item.images[0].path}
              publishedAgo={item.publishedAgo}
              totalPrice={item.propertys[0].value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFileItems;
