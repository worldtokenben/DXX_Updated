import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "month",
    features: [
      "Access to selected galleries",
      "Standard resolution",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "month",
    featured: true,
    features: [
      "Full site access",
      "High-resolution content",
      "Priority support",
      "Early releases",
    ],
  },
  {
    name: "Studio",
    price: "$39",
    period: "month",
    features: [
      "Everything in Pro",
      "Exclusive behind-the-scenes",
      "Download allowances",
      "VIP email concierge",
    ],
  },
];

const Memberships = () => {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Memberships
        </h1>
        <p className="mt-3 text-slate-600">
          Choose a plan to preview. Payments are not enabled yet. This page only
          displays available options for onboarding.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl hover:scale-105 transition-all duration-300 hover:border-slate-900 border ${
              plan.featured
                ? "border-slate-900 shadow-xl"
                : "border-slate-200 shadow-sm"
            } bg-white p-6 flex flex-col`}
          >
            {plan.featured && (
              <div className="absolute -top-3 right-4 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                Most popular
              </div>
            )}
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-semibold">{plan.name}</div>
            </div>
            <div className="mt-4 flex items-baseline gap-1">
              <div className="text-4xl font-extrabold">{plan.price}</div>
              <div className="text-slate-500">/ {plan.period}</div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                plan.featured
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
              disabled
            >
              Coming soon
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
        <div>
          <span className="font-semibold">Address:</span> 14356 E Tennessee Ave,
          Aurora, Colorado
        </div>
        <div className="mt-1">
          <span className="font-semibold">Support:</span>{" "}
          support@dxx.photography · +1 (802) 231-4061
        </div>
        <div className="mt-1">
          <span className="font-semibold">Hours:</span> Monday to Friday, 9:00am
          – 5:00pm EST
        </div>
      </div>
    </div>
  );
};

export default Memberships;
