import Price from "../../Price/Price";


const PriceOptions = () => {

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
        {
            "id": 4,
            "name": "Family Membership",
            "price": 120,
            "features": [
                "Access for up to 4 family members",
                "Unlimited group classes for all members",
                "Free fitness assessments for all members",
                "Access to locker rooms",
                "2 personal training sessions per month for each member",
                "Discount on family workshops",
                "Family fitness events",
                "Monthly family fitness challenges",
                "Access to kids' activities during workout sessions"
            ]
        }
    ]


    return (
        <div>
            <h2 className="text-5xl">Best Prices In The Town</h2>

            {
                priceOptions.map(option => <Price option={option} key={option.id}> </Price>)
            }
        </div>
    );
};

export default PriceOption;