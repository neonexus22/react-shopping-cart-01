import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import { listOrderMine } from "../redux/actions/orderActions";

const OrderHistoryScreen = (props) => {
  const { loading, error, orders } = useSelector(
    (state) => state.orderMineList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);

  return (
    <div>
      <h1>Order History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice.toFixed(2)}</td>
                <td>{order.isPaid ? order.paidAt.substring(0, 10) : "NO"}</td>
                <td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "NO"}
                </td>
                <td>
                  <button
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                    type="button"
                    className="small"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
