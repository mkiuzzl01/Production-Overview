import React from "react";
import useProducts from "../../lib/useProducts";

const OrderList = () => {
  const { orders } = useProducts();

  return (
    <div>
      <h1 className="font-bold text-xl text-center">Product Order List</h1>
      <div className="flex justify-between items-center py-5">
          <h4 className=" w-full text-lg">Total: {orders.length}</h4>
        <div className="w-full flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-full"
          />
          <button className="btn">Search</button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="bg-base-200">
                <th>SL</th>
                <th>OrderId</th>
                <th>ProductName</th>
                <th>Deadline</th>
                <th>Quantity</th>
                <th>Completion</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{order?.orderId}</td>
                  <td>{order?.productName}</td>
                  <td>{order?.deadline}</td>
                  <td>{order?.quantity}</td>
                  <td>{order?.completion} %</td>
                  <td>{order?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
