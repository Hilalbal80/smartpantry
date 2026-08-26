"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const productsStorageKey = "smartpantry-products";
const categories = [
  { name: "Süt ve Kahvaltılık", icon: "🥛", description: "Süt, yoğurt, peynir ve yumurta" },
  { name: "Et ve Tavuk", icon: "🍗", description: "Et, tavuk ve balık ürünleri" },
  { name: "Kuru Gıda", icon: "🍝", description: "Makarna, pirinç, un ve bakliyat" },
  { name: "Sebze ve Meyve", icon: "🥦", description: "Taze sebze ve meyveler" },
  { name: "İçecekler", icon: "🧃", description: "Su, meyve suyu ve sıcak içecekler" },
  { name: "Atıştırmalıklar", icon: "🍪", description: "Bisküvi, kuruyemiş ve atıştırmalıklar" },
];

type Product = { name: string; amount: string; unit: string; date: string; finished?: boolean };

const getCategory = (productName: string) => {
  const name = productName.toLocaleLowerCase("tr-TR");
  if (["süt", "yoğurt", "peynir", "yumurta", "kaşar"].some((word) => name.includes(word))) return "Süt ve Kahvaltılık";
  if (["tavuk", "et", "balık"].some((word) => name.includes(word))) return "Et ve Tavuk";
  if (["makarna", "pirinç", "un", "bakliyat", "mercimek", "bulgur"].some((word) => name.includes(word))) return "Kuru Gıda";
  if (["domates", "salça", "sebze", "meyve", "elma", "muz"].some((word) => name.includes(word))) return "Sebze ve Meyve";
  if (["su", "kahve", "çay", "meyve suyu"].some((word) => name.includes(word))) return "İçecekler";
  if (["bisküvi", "çikolata", "cips", "kuruyemiş"].some((word) => name.includes(word))) return "Atıştırmalıklar";
  return "Diğer";
};

export default function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = window.setTimeout(() => {
      const savedProducts = window.localStorage.getItem(productsStorageKey);
      if (savedProducts) {
        try {
          setProducts(JSON.parse(savedProducts));
        } catch {
          window.localStorage.removeItem(productsStorageKey);
        }
      }
    }, 0);
    return () => window.clearTimeout(loadProducts);
  }, []);

  const selectedProducts = products.filter((product) => !product.finished && getCategory(product.name) === selectedCategory);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <button key={category.name} type="button" onClick={() => setSelectedCategory(category.name)} className={`rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-green-400 hover:shadow-md ${selectedCategory === category.name ? "border-green-500 ring-2 ring-green-100" : "border-slate-200"}`}>
            <div className="flex items-start gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">{category.icon}</span><span><h2 className="font-bold">{category.name}</h2><p className="mt-1 text-sm leading-5 text-slate-500">{category.description}</p></span></div>
          </button>
        ))}
      </div>

      {selectedCategory && (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-4"><div><h2 className="text-xl font-bold">{selectedCategory}</h2><p className="mt-1 text-sm text-slate-500">Bu kategorideki aktif ürünlerin.</p></div><Link href="/products" className="rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700">Ürünlere Git</Link></div>
          {selectedProducts.length === 0 ? <p className="rounded-xl bg-slate-50 p-5 text-center text-slate-500">Bu kategoride henüz aktif ürün yok.</p> : <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{selectedProducts.map((product) => <Link href="/products" key={`${product.name}-${product.date}`} className="rounded-xl border border-slate-200 p-4 transition hover:border-green-400"><p className="font-semibold">{product.name}</p><p className="mt-1 text-sm text-slate-500">{product.amount} {product.unit}</p></Link>)}</div>}
        </section>
      )}
    </section>
  );
}
