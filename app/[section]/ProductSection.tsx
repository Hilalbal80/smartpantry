"use client";

import { FormEvent, useState } from "react";

const initialProducts = [
  { name: "Süt", amount: "1", unit: "litre", date: "2026-08-20", icon: "🥛" },
  { name: "Yoğurt", amount: "500", unit: "g", date: "2026-08-21", icon: "🥣" },
  { name: "Tavuk Göğsü", amount: "500", unit: "g", date: "2026-08-22", icon: "🍗" },
  { name: "Kaşar Peyniri", amount: "200", unit: "g", date: "2026-08-24", icon: "🧀" },
];

const units = ["adet", "kg", "g", "litre"];

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));

export default function ProductSection() {
  const [products, setProducts] = useState(initialProducts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [unit, setUnit] = useState("adet");
  const [date, setDate] = useState(getToday);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProducts((currentProducts) => [
      ...currentProducts,
      { name, amount, unit, date, icon: "🥫" },
    ]);
    setName("");
    setAmount("");
    setUnit("adet");
    setDate(getToday());
    setIsFormOpen(false);
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold">Tüm Ürünler</h2>
        <button
          type="button"
          onClick={() => setIsFormOpen((open) => !open)}
          className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          {isFormOpen ? "Formu Kapat" : "+ Ürün Ekle"}
        </button>
      </div>

      {isFormOpen && (
        <form onSubmit={handleSubmit} className="mb-6 grid gap-3 rounded-xl bg-green-50 p-4 md:grid-cols-4">
          <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ürün adı" required className="rounded-lg border border-slate-300 bg-white p-3" />
          <div className="flex">
            <input type="number" min="0" step="any" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Miktar" required className="min-w-0 flex-1 rounded-l-lg border border-slate-300 bg-white p-3" />
            <select value={unit} onChange={(event) => setUnit(event.target.value)} className="w-24 rounded-r-lg border border-l-0 border-slate-300 bg-white p-3" aria-label="Miktar birimi">
              {units.map((availableUnit) => <option key={availableUnit} value={availableUnit}>{availableUnit}</option>)}
            </select>
          </div>
          <label className="flex flex-col gap-1 text-sm font-medium text-slate-600">
            Son kullanma tarihi
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required className="rounded-lg border border-slate-300 bg-white p-3 text-base font-normal text-slate-900" />
          </label>
          <button type="submit" className="rounded-lg bg-[#073b3a] px-4 py-3 font-semibold text-white transition hover:bg-[#0a5553]">Kaydet</button>
        </form>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[...products].sort((firstProduct, secondProduct) => firstProduct.date.localeCompare(secondProduct.date)).map((product) => (
          <article key={`${product.name}-${product.date}`} className="rounded-xl border border-slate-200 p-4 transition hover:border-green-400 hover:shadow-sm">
            <div className="flex h-32 items-center justify-center rounded-xl bg-green-50 text-6xl">{product.icon}</div>
            <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
            <p className="mt-1 text-slate-500">{product.amount} {product.unit}</p>
            <p className="mt-3 text-sm text-red-500">Son kullanma: {formatDate(product.date)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
