import React, { useEffect, useState } from "react";

// 🧩 Dynamically import all image formats from /src/assets/models
const images = import.meta.glob(
  "/src/assets/models/*.{jpg,jpeg,png,webp,gif,avif}",
  { eager: true }
);

const Home = () => {
  const [namesMap, setNamesMap] = useState({});
  const [modelList, setModelList] = useState([]);

  // 🗂️ Load names.txt and parse into { img-1: 'Kiran', img-2: 'Ava', ... }
  useEffect(() => {
    fetch("/src/assets/names.txt")
      .then((res) => res.text())
      .then((text) => {
        const map = {};
        text.split("\n").forEach((line) => {
          const [key, value] = line.split("=");
          if (key && value) map[key.trim()] = value.trim();
        });
        setNamesMap(map);
      })
      .catch(() => setNamesMap({}));
  }, []);

  // 🔄 After namesMap is ready, prepare model list dynamically
  useEffect(() => {
    const list = Object.entries(images).map(([path, module], index) => {
      const fileName = path.split("/").pop()?.split(".")[0]; // e.g., 'img-1' or 'randomname'
      const displayName = namesMap[fileName] || "Iva"; // fallback name
      return {
        name: displayName,
        src: module.default,
      };
    });
    setModelList(list);
  }, [namesMap]);

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Filters */}
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

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {modelList.map((m, idx) => (
          <div
            key={idx}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="relative">
              <img
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                src={m.src}
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
