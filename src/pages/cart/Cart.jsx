import "./Cart.css";
const Cart = ({ cart }) => {
  if (!cart) {
    return <div>Cart is empty</div>;
  }

  if (!Array.isArray(cart)) {
    return <div>Invalid cart data</div>;
  }
  return (
    <>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.firstname} - {item.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;
