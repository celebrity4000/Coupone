import DeliveryInformation from "./DeliveryInformation";
import DeliveryItems from "./DeliveryItems";
import OrderSummary from "./OrderSummary";

const DeliveryForm: React.FC = () => {
  return (
    <div className=" w-[90%] mx-auto mt-14">
      {/* Main Container */}
      <div className="flex flex-wrap  justify-center gap-10">
        <DeliveryInformation />
        <DeliveryItems />
      </div>
      <OrderSummary />
    </div>
  );
};

export default DeliveryForm;
