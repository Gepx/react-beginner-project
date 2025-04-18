import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Access to all features",
  "100 GB Storage",
  "24/7 Support",
  "Unlimited Projects",
  "Team Collaboration",
  "Advanced Analytics",
  "Priority Support",
];

const plans = [
  {
    name: "Basic",
    price: "$10",
    description: "Great for personal use",
    features: [true, true, false, false, false, false, false],
  },
  {
    name: "Pro",
    price: "$25",
    description: "Perfect for small teams",
    features: [true, true, true, true, true, false, false],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "$50",
    description: "Ideal for large organizations",
    features: [true, true, true, true, true, true, true],
  },
];

const Pricing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">
      <div className="flex flex-col items-center gap-6 max-w-5xl w-full">
        <div className="text-center">
          <span className="uppercase text-sm text-blue-600 font-bold tracking-wide">
            Pricing
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            Choose the plan that fits you
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Simple pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 rounded-2xl shadow-md bg-white border ${
                plan.isPopular
                  ? "border-blue-500 scale-105 shadow-lg"
                  : "border-gray-200"
              } transition-transform duration-300`}>
              <div>
                {plan.isPopular && (
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Most Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                <p className="text-sm text-gray-500">{plan.description}</p>
                <p className="text-3xl font-bold text-gray-800 mt-4">
                  {plan.price}
                  <span className="text-sm text-gray-500"> / month</span>
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <FaCheckCircle
                        className={`${
                          plan.features[index]
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                        size={14}
                      />
                      <span
                        className={`${
                          plan.features[index]
                            ? "text-gray-700"
                            : "text-gray-400 line-through"
                        }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
