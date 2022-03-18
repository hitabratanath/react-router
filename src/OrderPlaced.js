import { useNavigate } from "react-router-dom";

const OrderPlaced = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="order-placed">
        <h1>Thank you for placing your order!</h1>
      </div>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};
export default OrderPlaced;
