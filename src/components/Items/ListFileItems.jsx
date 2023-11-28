import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import FileItems from "../../components/Items/FileItems";
import axios from "axios";
import noImage from "../../assets/images/noImage.jpg";
import Loading from "../../components/Spinner/Loading";


const ListFileItems = ({ apii }) => {
  const [files, setFiles] = useState(null);
  const [flag, setFlag] = useState(true);
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    setFlag(true);
    axios
      .get("https://file.siraf.app/api/file/files/" + apii)
      .then((res) => {
        setFiles(res.data.data.files);
        setFlag(false);
      })
      // .then((res) => console.log(files[1]))
      .catch((err) => {
        console.log(err);
        setFlag(false);
      });
  }, [apii]);
  // useEffect(() => {
  //   const cities = queryParams.getAll("cities[]");
  //   if (files.length !== 0 && cities.length !== 0) {
  //     const filteredData = files?.filter((item) => {
  //       const cityId = item.city.id.toString();
  //       return cities.includes(cityId);
  //     });

  //     setFiles(filteredData);
  //   }
  // }, [queryParams, files]);
  // console.log(files);
  if (files === null || flag) {
    return <Loading />;
  }
  return (
    <>
      {files?.length > 0 ? (
        <div className="flex justify-center">
          <div className="my-8 max-w-7xl">
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {files &&
                files.length > 0 &&
                files.map((item) => (
                  <Link to={`/files/${item.id}`}>
                    <FileItems
                      key={files.id}
                      cityName={item.city.name}
                      name={item.name}
                      properties={item.propertys}
                      category={item.category.fullCategory}
                      image={item.images || noImage}
                      publishedAgo={item.publishedAgo}
                      totalPrice={item.propertys[0].value}
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p>فایلی یافت نشد</p>
      )}
    </>
  );
};

export default ListFileItems;
