import { useDispatch, useSelector } from "react-redux";
import CartItemContainer from "./components/CartItemContainer";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
function App() {
  const cartItems = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartItemContainer />
    </main>
  );
}
export default App;
