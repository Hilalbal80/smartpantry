"use client";

import Link from "next/link";

const products = [
  {
    name: "Süt",
    amount: "1 L",
    date: "20 Ağustos 2026",
    remaining: "2 gün kaldı",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80",
  },
  {
    name: "Yoğurt",
    amount: "500 g",
    date: "21 Ağustos 2026",
    remaining: "3 gün kaldı",
    image:
      "https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=200&q=80",
  },
  {
    name: "Tavuk Göğsü",
    amount: "500 g",
    date: "22 Ağustos 2026",
    remaining: "4 gün kaldı",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&q=80",
  },
  {
    name: "Kaşar Peyniri",
    amount: "200 g",
    date: "24 Ağustos 2026",
    remaining: "6 gün kaldı",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&q=80",
  },
];

const recentProducts = [
  {
    name: "Yumurta",
    date: "18 Ağustos 2026",
    emoji: "🥚",
  },
  {
    name: "Un",
    date: "18 Ağustos 2026",
    emoji: "🌾",
  },
  {
    name: "Zeytinyağı",
    date: "17 Ağustos 2026",
    emoji: "🫒",
  },
  {
    name: "Salça",
    date: "17 Ağustos 2026",
    emoji: "🍅",
  },
];

const expiringSuggestions: Record<string, string> = {
  Süt: "Smoothie, sütlaç veya çorba hazırlayabilirsin.",
  Yoğurt: "Cacık, yoğurtlu meze veya marinasyon yapabilirsin.",
  "Tavuk Göğsü": "Tavuklu salata, çorba veya fırın yemeği hazırlayabilirsin.",
  "Kaşar Peyniri": "Tost, fırın makarna veya kaşarlı omlet yapabilirsin.",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="sticky top-0 z-40 flex min-h-screen w-[280px] self-start flex-col bg-[#073b3a] px-4 py-7 text-white">

          {/* Logo */}
          <div className="mb-10 flex items-center gap-3 px-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-2xl">
              🥫
            </div>

            <div className="text-[27px] font-bold tracking-tight">
              Smart<span className="text-[#32b768]">Pantry</span>
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-2">

            <Link
              href="/dashboard"
              className="flex items-center gap-4 rounded-xl bg-[#20a65a] px-4 py-4 text-[18px] font-semibold shadow-lg"
            >
              <span className="text-2xl">⌂</span>
              Anasayfa
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">▢</span>
              Ürünler
            </Link>

            <Link
              href="/finished-products"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">✓</span>
              Biten Ürünler
            </Link>

            <Link
              href="/categories"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">□</span>
              Kategoriler
            </Link>

            <Link
              href="/shopping-list"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">🛒</span>
              Alışveriş Listesi
            </Link>

            <Link
              href="/recipes"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">▤</span>
              Tarifler
            </Link>

            <Link
              href="/statistics"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">▥</span>
              İstatistikler
            </Link>

            <Link
              href="/reminders"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">♧</span>
              Hatırlatmalar
            </Link>

            <Link
              href="/tips"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">💡</span>
              İpuçları
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"
            >
              <span className="text-2xl">⚙</span>
              Ayarlar
            </Link>

          </nav>

          {/* User */}
          <div className="flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-400 text-xl font-semibold">
              K
            </div>

            <div className="flex-1">
              <p className="font-semibold">Kullanıcı</p>
              <p className="text-sm text-slate-300">
                kullanici@mail.com
              </p>
            </div>

            <span className="text-xl">⌄</span>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="min-h-screen flex-1 px-8 py-7">

          {/* Header */}
          <div className="mb-8 flex items-start justify-between">
            <div>
              <h1 className="text-[30px] font-bold">
                Hoş geldin, Kullanıcı! 👋
              </h1>

              <p className="mt-1 text-[17px] text-slate-500">
                Mutfak stoklarını kolayca yönet, israfı önle.
              </p>
            </div>

            <div className="relative cursor-pointer text-3xl">
              🔔
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#159447] text-xs font-bold text-white">
                3
              </span>
            </div>
          </div>

          {/* STAT CARDS */}
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

            {/* Total */}
            <Link href="/products" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                  🥫
                </div>

                <div>
                  <p className="text-[15px] font-medium">
                    Toplam Ürün
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    42
                  </p>

                  <p className="mt-2 text-sm font-medium text-green-600">
                    +5 bu hafta
                  </p>
                </div>
              </div>
            </Link>

            {/* Expiry */}
            <Link href="/reminders" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-3xl">
                  📅
                </div>

                <div>
                  <p className="text-[15px] font-medium">
                    Yaklaşan Son Kullanma
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    7
                  </p>

                  <p className="mt-2 text-sm font-medium text-orange-500">
                    Dikkat edilmesi gerekiyor
                  </p>
                </div>
              </div>
            </Link>

            {/* Shopping */}
            <Link href="/shopping-list" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                  🛒
                </div>

                <div>
                  <p className="text-[15px] font-medium">
                    Alışveriş Listesi
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    6
                  </p>

                  <p className="mt-2 text-sm font-medium text-green-600">
                    Ürün listede
                  </p>
                </div>
              </div>
            </Link>

            {/* Categories */}
            <Link href="/categories" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
                  ▦
                </div>

                <div>
                  <p className="text-[15px] font-medium">
                    Kategoriler
                  </p>

                  <p className="mt-1 text-3xl font-bold">
                    8
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Aktif kategori
                  </p>
                </div>
              </div>
            </Link>

          </div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 gap-7 xl:grid-cols-[1fr_1.15fr]">

            {/* LEFT COLUMN */}
            <div className="space-y-7">

              {/* Stock Status */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <h2 className="mb-7 text-xl font-bold">
                  Stok Durumu
                </h2>

                <div className="flex flex-col items-center justify-center gap-8 md:flex-row">

                  {/* DONUT */}
                  <div
                    className="relative flex h-56 w-56 items-center justify-center rounded-full"
                    style={{
                      background:
                        "conic-gradient(#3fb86a 0deg 223deg, #f9b923 223deg 309deg, #ef4438 309deg 360deg)",
                    }}
                  >
                    <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white">
                      <span className="text-3xl font-bold">
                        42
                      </span>
                      <span className="text-sm text-slate-500">
                        Toplam
                      </span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="w-full space-y-5 md:w-auto">

                    <div className="flex items-center gap-3">
                      <span className="h-3.5 w-3.5 rounded-full bg-green-500" />
                      <span className="flex-1">
                        Yeterli Stok
                      </span>
                      <strong>26</strong>
                      <span className="text-slate-500">
                        (%62)
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
                      <span className="flex-1">
                        Azalan Stok
                      </span>
                      <strong>10</strong>
                      <span className="text-slate-500">
                        (%24)
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                      <span className="flex-1">
                        Tükenen Stok
                      </span>
                      <strong>6</strong>
                      <span className="text-slate-500">
                        (%14)
                      </span>
                    </div>

                  </div>
                </div>

                <Link
                  href="/products"
                  className="mt-7 flex items-center justify-center rounded-xl bg-green-50 py-3.5 font-semibold text-green-700 transition hover:bg-green-100"
                >
                  Tüm ürünleri görüntüle
                  <span className="ml-3 text-xl">›</span>
                </Link>

              </div>

              {/* Recent Products */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    Son Eklenen Ürünler
                  </h2>

                  <Link
                    href="/products"
                    className="font-semibold text-green-600"
                  >
                    Tümünü Gör
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

                  {recentProducts.map((product) => (
                    <div key={product.name}>
                      <div className="flex h-28 items-center justify-center rounded-xl bg-slate-100 text-6xl">
                        {product.emoji}
                      </div>

                      <p className="mt-3 font-semibold">
                        {product.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {product.date}
                      </p>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-7">

              {/* Expiring Products */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    Yaklaşan Son Kullanma Tarihli Ürünler
                  </h2>

                  <Link
                    href="/products"
                    className="whitespace-nowrap font-semibold text-green-600"
                  >
                    Tümünü Gör
                  </Link>
                </div>

                <div>

                  {products.map((product, index) => (
                    <div
                      key={product.name}
                      className={`flex items-center gap-5 py-4 ${
                        index !== products.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">
                        <p className="text-lg font-semibold">
                          {product.name}
                        </p>

                        <p className="mt-1 text-slate-500">
                          {product.amount}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-red-500">
                          {product.date}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {product.remaining}
                        </p>
                      </div>

                      <span className="text-3xl text-slate-400">
                        ›
                      </span>

                    </div>
                  ))}

                </div>

              </div>

              {/* Suggestions */}
              <div className="rounded-2xl border border-green-100 bg-green-50 p-7">
                <div className="mb-5 flex gap-5">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h3 className="text-lg font-bold">İpucu</h3>
                    <p className="mt-2 leading-7 text-slate-700">
                      SKT&apos;si yaklaşan ürünleri önce tüketerek israfı önleyebilirsin.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {products.map((product) => (
                    <div key={product.name} className="rounded-xl border border-green-100 bg-white/80 p-4">
                      <p className="font-semibold text-slate-900">{product.name}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {expiringSuggestions[product.name] ?? "Bu ürünü yakın zamanda tüketebileceğin bir tarifte değerlendirebilirsin."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </main>
      </div>
    </div>
  );
}