import {FC} from "react";
import Card from "../component/Card";
import CheckoutCta from "../component/CheckoutCta";
import Header from "../component/Header";
import {PRODUCT} from "../constants/products.ts";

const Home: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 pt-20 relative">
      <Header />
      {PRODUCT.map((product, index) => (
        <Card key={index} {...product} />
      ))}
      <CheckoutCta />
    </div>
  );
}

export default Home;