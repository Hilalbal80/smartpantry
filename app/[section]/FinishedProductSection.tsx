"use client";

import { useEffect, useState } from "react";

const productsStorageKey = "smartpantry-products";

type Product = {
  name: string;
  amount: string;
  unit: string;
  date: string;
  icon: string;
  finished?: boolean;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));

export default function FinishedProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedProducts = window.localStorage.getItem(productsStorageKey);
    const loadProducts = window.setTimeout(() => {
      if (savedProducts) {
        try {
          setProducts(JSON.parse(savedProducts));
        } catch {
          window.localStorage.removeItem(productsStorageKey);
        }
      }
      setIsLoaded(true);
    }, 0);

    return () => window.clearTimeout(loadProducts);
  }, []);

  const restoreProduct = (productToRestore: Product) => {
    const updatedProducts = products.map((product) =>
      product === productToRestore ? { ...product, finished: false } : product,
    );
    setProducts(updatedProducts);
    window.localStorage.setItem(productsStorageKey, JSON.stringify(updatedProducts));
  };

  const finishedProducts = products
    .filter((product) => product.finished)
    .sort((firstProduct, secondProduct) => secondProduct.date.localeCompare(firstProduct.date));

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold">Biten / Tükenen Ürünler</h2>
      <p className="mb-6 text-slate-500">Aktif stoktan çıkarılan ürünler burada tutulur.</p>
      {finishedProducts.length === 0 ? (
        <div className="rounded-xl bg-slate-50 p-8 text-center text-slate-500">Henüz bitmiş ürün bulunmuyor.</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {finishedProducts.map((product) => (
            <article key={`${product.name}-${product.date}`} className="rounded-xl border border-slate-200 p-4">
              <div className="flex h-32 items-center justify-center rounded-xl bg-slate-100 text-6xl grayscale">{product.icon}</div>
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
              <p className="mt-1 text-slate-500">{product.amount} {product.unit}</p>
              <p className="mt-3 text-sm text-slate-500">SKT: {formatDate(product.date)}</p>
              <button type="button" onClick={() => restoreProduct(product)} className="mt-4 w-full rounded-lg border border-green-600 px-3 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50">Stoka geri al</button>
            </article>
          ))}
        </div>
      )}
      {isLoaded && finishedProducts.length > 0 && <p className="mt-5 text-sm text-slate-500">Toplam {finishedProducts.length} bitmiş ürün</p>}
    </section>
  );
}
