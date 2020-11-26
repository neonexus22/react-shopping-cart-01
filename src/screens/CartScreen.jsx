import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const CartScreen = (props) => {
  const dispatch = useDispatch();
  console.log(props.location.search);
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductId: {productId}, Qty: {qty}
      </p>
    </div>
  );
};

export default CartScreen;
