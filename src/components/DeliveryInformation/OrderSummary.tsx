import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
const OrderSummary: React.FC = () => {
  const userContext = useContext(UserContext);
  const { numberOfItems1, numberOfItems2 } = userContext;
  return (
    <div className="w-[90%]  mx-auto mt-14">
      <div className=" bg-white border rounded-md shadow-md">
        {/* Subtotal and Shopping */}
        <div className="p-5 border-b">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="text-gray-900 font-semibold min-w-[100px]">
              ${numberOfItems1 * 100 + numberOfItems2 * 200}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Shopping</span>
            <span className="text-gray-900 font-semibold min-w-[100px]">
              {numberOfItems1 + numberOfItems2}
            </span>
          </div>
        </div>

        {/* Total */}
        <div className="p-5 border-b">
          <div className="flex justify-between">
            <span className="text-gray-700 font-medium">Total (USD)</span>
            <span className="text-gray-900 font-bold text-lg min-w-[100px]">
              ${numberOfItems1 * 100 + numberOfItems2 * 200}
            </span>
          </div>
        </div>
      </div>

      {/* Confirm Order Button */}
      <div className="mt-8">
        <button className="w-full bg-gray-800 text-white py-3 rounded-md font-medium hover:bg-gray-700">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
