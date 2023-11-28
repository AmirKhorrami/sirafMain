import {useState} from 'react'
import Header from "../../components/Navbar/Header";
import Loading from "../../components/Spinner/Loading";
import Footer from "../../components/Footer/Footer";
import ListFileItems from "../../components/Items/ListFileItems";

const Home = () => {
const [apii, setApii] = useState("?web=true&cityIds[]=39&lastId=0&");
const [url, setUrl] = useState("files?cities[]=39");
  const getApi = (entryUrl, filterUrl) => {
    setApii(entryUrl);
    setUrl(filterUrl);
  };
  return (
    <div>
      <Header getApi={getApi} />
      <ListFileItems apii={apii} />
      <Footer />
    </div>
  );
};

export default Home;
