import React from "react";

const models = [
  { name: "Ava", id: "1520975916090-3105956dac38" },
  { name: "Mia", id: "1519340241574-2cec6aef0c01" },
  { name: "Luna", id: "1492633423870-43d1cd2775eb" },
  { name: "Ivy", id: "1520975916090-3105956dac38" },
  { name: "Nora", id: "1519340241574-2cec6aef0c01" },
  { name: "Eden", id: "1492633423870-43d1cd2775eb" },
  { name: "Luna", id: "1492633423870-43d1cd2775eb" },
  { name: "Ivy", id: "1520975916090-3105956dac38" },
  { name: "Nora", id: "1519340241574-2cec6aef0c01" },
  { name: "Eden", id: "1492633423870-43d1cd2775eb" },
];

const Home = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Popular Models
          </h1>
          <p className="mt-1 text-slate-600">
            A curated gallery of trending profiles.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <input
            placeholder="Search models"
            className="w-56 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300"
          />
          <button className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-800">
            Add Model
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50">
          All
        </button>
        <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white hover:bg-slate-800">
          Trending
        </button>
        <button className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50">
          New
        </button>
        <button className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50">
          Top Rated
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {models.map((m, idx) => (
          <div
            key={`${m.name}-${idx}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative">
              <img
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                src={`https://images.unsplash.com/photo-${m.id}?q=80&w=1600&auto=format&fit=crop`}
                alt={m.name}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button
                type="button"
                aria-label="Favorite"
                className="absolute right-3 top-3 grid h-8 w-8 place-content-center rounded-full bg-white/90 text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-white"
              >
                ♥
              </button>
              <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                <div className="text-sm font-semibold">{m.name}</div>
                <div className="mt-0.5 text-xs text-white/80">Featured</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
