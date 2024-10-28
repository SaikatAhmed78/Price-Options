import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {

    return (
        <div className="">
           <p className="flex items-center ">
            <IoIosCheckmarkCircle className="text-green-500 mr-2" /> 
            {feature}
            </p> 
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;