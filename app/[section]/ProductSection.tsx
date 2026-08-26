"use client";

import { FormEvent, useState } from "react";

const initialProducts = [
  { name: "Süt", amount: "1 L", date: "20 Ağustos 2026", icon: "🥛" },
  { name: "Yoğurt", amount: "500 g", date: "21 Ağustos 2026", icon: "🥣" },
  { name: "Tavuk Göğsü", amount: "500 g", date: "22 Ağustos 2026", icon: "🍗" },
  { name: "Kaşar Peyniri", amount: "200 g", date: "24 Ağustos 2026", icon: "🧀" },
];

export default function ProductSection() {
  const [products, setProducts] = useState(initialProducts);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProducts((currentProducts) => [
      ...currentProducts,
      { name, amount, date, icon: "🥫" },
    ]);
    setName("");
    setAmount("");
    setDate("");
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
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Miktar" required className="rounded-lg border border-slate-300 bg-white p-3" />
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Son kullanma tarihi" required className="rounded-lg border border-slate-300 bg-white p-3" />
          <button type="submit" className="rounded-lg bg-[#073b3a] px-4 py-3 font-semibold text-white transition hover:bg-[#0a5553]">Kaydet</button>
        </form>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article key={`${product.name}-${product.date}`} className="rounded-xl border border-slate-200 p-4 transition hover:border-green-400 hover:shadow-sm">
            <div className="flex h-32 items-center justify-center rounded-xl bg-green-50 text-6xl">{product.icon}</div>
            <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
            <p className="mt-1 text-slate-500">{product.amount}</p>
            <p className="mt-3 text-sm text-red-500">Son kullanma: {product.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
