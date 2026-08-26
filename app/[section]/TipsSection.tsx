"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const productsStorageKey = "smartpantry-products";

type Product = {
  name: string;
  amount: string;
  unit: string;
  date: string;
  finished?: boolean;
};

const suggestions: Record<string, string> = {
  Süt: "Sütü smoothie, sütlaç veya çorba yaparak değerlendirebilirsin.",
  Yoğurt: "Yoğurtla cacık, yoğurtlu meze veya sos hazırlayabilirsin.",
  "Tavuk Göğsü": "Tavuk göğsünü salata, çorba veya fırın yemeğinde kullanabilirsin.",
  "Kaşar Peyniri": "Kaşar peyniriyle tost, fırın makarna veya omlet yapabilirsin.",
  Yumurta: "Yumurtayla omlet, menemen veya sebzeli frittata hazırlayabilirsin.",
};

const fallbackSuggestion = "Bu ürünü yakın zamanda tüketebileceğin bir tarifte değerlendirebilirsin.";

export default function TipsSection() {
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

  const activeProducts = products.filter((product) => !product.finished);

  return (
    <section className="rounded-2xl border border-green-100 bg-green-50 p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-4">
        <div className="text-5xl">💡</div>
        <div>
          <h2 className="text-2xl font-bold">Sana Özel İpuçları</h2>
          <p className="mt-1 text-slate-600">Ürünlerindeki malzemelere göre değerlendirme önerileri.</p>
        </div>
      </div>

      {activeProducts.length === 0 ? (
        <div className="rounded-xl bg-white p-8 text-center">
          <p className="text-slate-600">Öneri hazırlamam için önce aktif ürün eklemelisin.</p>
          <Link href="/products" className="mt-4 inline-block rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">Ürün Ekle</Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {activeProducts.map((product) => (
            <article key={`${product.name}-${product.date}`} className="rounded-xl border border-green-100 bg-white p-5">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-lg font-bold">{product.name}</h3><p className="mt-1 text-sm text-slate-500">{product.amount} {product.unit}</p></div>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Mevcut ürünün</span>
              </div>
              <p className="mt-4 leading-6 text-slate-700">{suggestions[product.name] ?? fallbackSuggestion}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
