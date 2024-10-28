import PropTypes from "prop-types";
import Feature from "../Feature/Feature";


const Price = ({option}) => {

    const {name, features, price} = option

    return (
        <div className="bg-blue-500 flex flex-col rounded-lg p-4 text-white">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">${price}</span>
                <span className="text-2xl font-semibold">/mon</span>
            </h2>
            <h4 className="text-3x text-center font-bold my-8">{name}</h4>

          <div className="pl-4 text-gray-50 flex-grow">
          {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
          </div>

          <button className="mt-12 bg-green-500 w-full rounded-lg py-2 font-bold hover:bg-green-900">Buy Now</button>
        </div>
    );
};

Price.PropTypes = {
    option: PropTypes.object
}
export default Price;