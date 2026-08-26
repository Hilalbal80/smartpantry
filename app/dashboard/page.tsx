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

export default function DashboardPage() {
  const menuItems = [
    ["/dashboard", "⌂", "Anasayfa"],
    ["/products", "▢", "Ürünler"],
    ["/finished-products", "✓", "Biten Ürünler"],
    ["/categories", "□", "Kategoriler"],
    ["/shopping-list", "🛒", "Alışveriş Listesi"],
    ["/recipes", "▤", "Tarifler"],
    ["/statistics", "▥", "İstatistikler"],
    ["/reminders", "♧", "Hatırlatmalar"],
    ["/tips", "💡", "İpuçları"],
    ["/settings", "⚙", "Ayarlar"],
  ];

  return (
    <div className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="sticky top-0 z-40 flex w-full flex-col border-b border-slate-200 bg-white px-4 py-5 md:min-h-screen md:w-[245px] md:self-start md:border-b-0 md:border-r md:px-3 md:py-7">
          <Link href="/dashboard" className="mb-6 flex items-center gap-3 px-3 md:mb-10">
            <img src="/smartpantry-logo.png" alt="SmartPantry logosu" className="h-11 w-11 rounded-2xl object-cover" />
            <div>
              <div className="text-[25px] font-bold tracking-tight text-[#155b35]">Smart<span className="text-[#2caa62]">Pantry</span></div>
              <p className="mt-0.5 text-[10px] font-semibold leading-3 text-[#155b35]">Akıllı Kiler · İsrafı Azalt · Geleceği Koru.</p>
            </div>
          </Link>

          <nav className="grid grid-cols-2 gap-2 md:block md:space-y-1">
            {menuItems.map(([href, icon, label], index) => (
              <Link key={href} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-green-50 md:text-[15px] ${index === 0 ? "bg-[#168542] text-white shadow-sm hover:bg-[#168542]" : "text-slate-700"}`}>
                <span className="w-6 text-center text-xl">{icon}</span>{label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 hidden items-center gap-3 rounded-2xl border border-slate-200 p-3 md:mt-auto md:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">K</div>
            <div className="min-w-0 flex-1"><p className="font-semibold">Kullanıcı</p><p className="truncate text-xs text-slate-500">kullanici@mail.com</p></div>
            <span className="text-lg text-slate-400">›</span>
          </div>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-7 lg:px-10 lg:py-8">
          <header className="mb-7 flex items-start justify-between gap-4">
            <div><h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Merhaba, Kullanıcı! 👋</h1><p className="mt-1 text-sm text-slate-500 sm:text-base">Bugün israfı önlemek için harika bir gün!</p></div>
            <div className="flex items-center gap-2">
              <Link href="/reminders" aria-label="Bildirimleri aç" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl shadow-sm transition hover:border-green-400">🔔<span className="absolute right-1 top-0 h-4 min-w-4 rounded-full bg-green-600 px-1 text-center text-[10px] font-bold text-white">3</span></Link>
              <Link href="/barcode" className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-green-700 shadow-sm transition hover:border-green-400 sm:flex"><span className="text-lg">⌗</span> Barkod Oku</Link>
            </div>
          </header>

          <section className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Link href="/products" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">🥫</span><div><p className="text-sm font-medium">Toplam Ürün</p><p className="text-2xl font-bold">42</p><p className="text-xs font-semibold text-green-600">+5 bu hafta</p></div></div></Link>
            <Link href="/reminders" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-3xl">◷</span><div><p className="text-sm font-medium">Yaklaşan Ürünler</p><p className="text-2xl font-bold">7</p><p className="text-xs font-semibold text-orange-500">7 gün içinde dolacak</p></div></div></Link>
            <Link href="/finished-products" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-3xl">♲</span><div><p className="text-sm font-medium">Biten Ürünler</p><p className="text-2xl font-bold">6</p><p className="text-xs font-semibold text-red-500">Bu ay tüketildi</p></div></div></Link>
            <Link href="/statistics" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"><div className="flex items-center gap-4"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl">♧</span><div><p className="text-sm font-medium">Tasarruf</p><p className="text-2xl font-bold">324 ₺</p><p className="text-xs font-semibold text-green-600">Bu ay tahmini kazanç</p></div></div></Link>
          </section>

          <section className="grid gap-6 xl:grid-cols-[0.95fr_1.25fr]">
            <div className="space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Yaklaşan Ürünler</h2><Link href="/reminders" className="text-sm font-semibold text-green-700">Tümünü Gör</Link></div>{products.slice(0, 3).map((product) => <Link href="/products" key={product.name} className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-0"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">{product.name === "Süt" ? "🥛" : product.name === "Yoğurt" ? "🥣" : "🍗"}</div><div className="min-w-0 flex-1"><p className="font-semibold">{product.name}</p><p className="text-xs text-slate-500">Son kullanma: {product.date}</p></div><span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">{product.remaining}</span></Link>)}<Link href="/tips" className="mt-3 block rounded-xl bg-green-50 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-100">Önce bunları tüketmeni öneririz →</Link></section>
              <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Alışveriş Listem</h2><Link href="/shopping-list" className="text-sm font-semibold text-green-700">Düzenle</Link></div><div className="grid grid-cols-2 gap-3 text-sm"><span>◯ Ekmek</span><span>◯ Pirinç</span><span>◯ Zeytinyağı</span><span className="font-semibold text-green-700">● Makarna</span><span className="font-semibold text-green-700">● Yoğurt</span><span>◯ Muz</span></div><Link href="/shopping-list" className="mt-5 block rounded-xl bg-slate-50 py-3 text-center text-sm font-semibold text-slate-600 transition hover:bg-green-50 hover:text-green-700">Listeyi görüntüle →</Link></section>
            </div>

            <div className="space-y-6"><section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-bold">Tarif Önerileri</h2><Link href="/recipes" className="text-sm font-semibold text-green-700">Tümünü Gör</Link></div><p className="mb-4 text-sm text-slate-500">Elindeki malzemelerle ne yapabilirsin?</p><div className="grid gap-3 sm:grid-cols-3">{[["🍳", "Menemen", "15 dk · Kolay"], ["🥚", "Omlet", "10 dk · Kolay"], ["🥗", "Peynirli Salata", "10 dk · Kolay"]].map(([icon, title, meta]) => <Link href="/recipes" key={title} className="rounded-xl border border-slate-100 p-3 transition hover:border-green-300 hover:shadow-sm"><div className="flex h-24 items-center justify-center rounded-lg bg-orange-50 text-5xl">{icon}</div><p className="mt-2 font-semibold">{title}</p><p className="text-xs text-slate-500">{meta}</p></Link>)}</div><Link href="/recipes" className="mt-4 block rounded-xl bg-green-50 py-3 text-center text-sm font-semibold text-green-700 transition hover:bg-green-100">Daha fazla tarif keşfet →</Link></section><div className="grid gap-6 md:grid-cols-2"><Link href="/statistics" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"><h2 className="font-bold">İsraf Analizi</h2><div className="mt-4 flex items-center gap-4"><div className="flex h-28 w-28 items-center justify-center rounded-full" style={{ background: "conic-gradient(#ef4444 0 28%, #fecaca 28% 100%)" }}><div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white"><strong className="text-2xl">2</strong><span className="text-xs text-slate-500">ürün</span></div></div><p className="text-sm text-slate-600">Bu ay çöpe giden ürün<br /><strong className="text-slate-900">Süt</strong></p></div></Link><Link href="/statistics" className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md"><h2 className="text-left font-bold">Tasarruf Takibi</h2><div className="mt-4 text-6xl">🌱</div><p className="mt-2 text-sm text-slate-500">Bu ay tahmini tasarruf</p><strong className="text-2xl text-green-700">324 ₺</strong></Link></div></div>
          </section>
        </main>
      </div>
    </div>
  );
}