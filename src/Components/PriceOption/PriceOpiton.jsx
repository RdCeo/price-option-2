import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-2xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow text-xs text-left">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <div className="mt-12">
      <button className="bg-green-500 w-full py-2 rounded-lg font-bold hover:bg-green-900">
        Buy Now
      </button>
      </div>
      
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
