import {
  FC,
  useEffect,
} from "react";
import Card from "../component/Card";
import CheckoutCta from "../component/CheckoutCta";
import Header from "../component/Header";
import {fetchProducts} from "../features/product/productSlice.ts";
import {
  useAppDispatch,
  useAppSelector
} from "../hooks/useSelector";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { items, error, status } = useAppSelector(state => state.products)
  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  
  console.log(status, error)
  
  return (
    <div className="grid grid-cols-2 gap-4 px-4 pt-20 relative">
      <Header />
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Something Wrong Happened, {error}</div>}
      {status === "succeeded" && items.map((product, index) => (
        <Card key={index} {...product} />
      ))}
      <CheckoutCta />
    </div>
  );
}

export default Home;