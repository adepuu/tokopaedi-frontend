type CartItem = {
  product: Product;
  quantity: number;
};

type Cart = {
  items: CartItem[];
  total: number;
};
