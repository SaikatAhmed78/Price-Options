import Price from "../../Price/Price";


const PriceOption = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Free fitness assessment",
                "Access to locker rooms",
                "Complimentary water bottle",
                "Monthly fitness newsletter",
                "Discounts on workshops"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Free fitness assessment",
                "Access to locker rooms",
                "1 personal training session per month",
                "Discount on merchandise",
                "Access to online workout plans",
                "Invitations to member-only events"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 70,
            "features": [
                "Access to gym facilities",
                "Unlimited group classes",
                "Free fitness assessment",
                "Access to locker rooms",
                "4 personal training sessions per month",
                "Free nutrition consultation",
                "Access to exclusive workshops",
                "Priority booking for classes",
                "Free gym merchandise upon signup"
            ]
        },
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices In The Town</h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {
                priceOptions.map(option => <Price option={option} key={option.id}> </Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;