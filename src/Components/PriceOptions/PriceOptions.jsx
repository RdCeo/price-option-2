import PriceOption from "../PriceOption/PriceOpiton";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      billing: "Monthly",
      features: [
        "Access to cardio and weight equipment",
        "Locker room access",
        "One free personal training session per month",
        "Access to gym during staffed hours",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      billing: "Monthly",
      features: [
        "24/7 gym access",
        "Access to cardio, weight, and functional training areas",
        "Locker room and steam room access",
        "Three free personal training sessions per month",
        "Group fitness classes included",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 69.99,
      billing: "Monthly",
      features: [
        "24/7 gym access",
        "All-access pass to cardio, weight, functional training, and yoga rooms",
        "Locker room, steam room, and sauna access",
        "Five free personal training sessions per month",
        "Unlimited group fitness and specialty classes",
        "Guest pass privileges",
      ],
    },
    {
      id: 4,
      name: "VIP Membership",
      price: 99.99,
      billing: "Monthly",
      features: [
        "24/7 gym access",
        "Exclusive VIP locker room access with complimentary towels",
        "Dedicated personal trainer and nutrition consultation monthly",
        "Unlimited personal training sessions",
        "Access to all classes, including VIP-only specialty workshops",
        "Free gym apparel and accessories",
        "Priority access to events and workshops",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the Town</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
