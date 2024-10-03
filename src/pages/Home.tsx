import axios from "axios";
import {
  FC,
  useEffect,
  useState
} from "react";
import Card from "../component/Card";
import CheckoutCta from "../component/CheckoutCta";
import Header from "../component/Header";
import {Product} from "../types/product";

const Home: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data from an API Endpoint and wait until request is done
       const { data } = await axios.get("http://localhost:8080/products");
        // When request is done, parse the JSON data as Product[] and set the state
        setProducts(data as Product[]);
      } catch (err) {
        console.error(err)
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="grid grid-cols-2 gap-4 px-4 pt-20 relative">
      <Header />
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
      <CheckoutCta />
    </div>
  );
}

export default Home;