import Link from "next/link";
import { notFound } from "next/navigation";

const sections = {
  products: {
    title: "Ürünler",
    description: "Mutfağındaki tüm ürünleri tek yerden takip et.",
    icon: "🥫",
  },
  categories: {
    title: "Kategoriler",
    description: "Ürünlerini kategorilere ayırarak düzenli tut.",
    icon: "▦",
  },
  "shopping-list": {
    title: "Alışveriş Listesi",
    description: "Alınması gereken ürünleri burada yönet.",
    icon: "🛒",
  },
  recipes: {
    title: "Tarifler",
    description: "Elindeki ürünlerle hazırlayabileceğin tarifleri keşfet.",
    icon: "▤",
  },
  statistics: {
    title: "İstatistikler",
    description: "Mutfak stoklarının genel durumunu incele.",
    icon: "▥",
  },
  reminders: {
    title: "Hatırlatmalar",
    description: "Son kullanma tarihi yaklaşan ürünleri takip et.",
    icon: "♧",
  },
  settings: {
    title: "Ayarlar",
    description: "Hesap ve uygulama ayarlarını düzenle.",
    icon: "⚙",
  },
} as const;

const products = [
  { name: "Süt", amount: "1 L", date: "20 Ağustos 2026", icon: "🥛" },
  { name: "Yoğurt", amount: "500 g", date: "21 Ağustos 2026", icon: "🥣" },
  { name: "Tavuk Göğsü", amount: "500 g", date: "22 Ağustos 2026", icon: "🍗" },
  { name: "Kaşar Peyniri", amount: "200 g", date: "24 Ağustos 2026", icon: "🧀" },
];

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const currentSection = sections[section as keyof typeof sections];

  if (!currentSection) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900">
      <div className="flex min-h-screen">
        <aside className="fixed left-0 top-0 z-40 flex h-screen w-[280px] flex-col bg-[#073b3a] px-4 py-7 text-white">
          <Link href="/dashboard" className="mb-10 flex items-center gap-3 px-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-2xl">🥫</div>
            <div className="text-[27px] font-bold tracking-tight">Smart<span className="text-[#32b768]">Pantry</span></div>
          </Link>

          <nav className="flex-1 space-y-2">
            <Link href="/dashboard" className="flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] font-medium transition hover:bg-white/10"><span className="text-2xl">⌂</span>Anasayfa</Link>
            {Object.entries(sections).map(([key, item]) => (
              <Link key={key} href={`/${key}`} className={`flex items-center gap-4 rounded-xl px-4 py-4 text-[18px] transition hover:bg-white/10 ${key === section ? "bg-[#20a65a] font-semibold shadow-lg" : "font-medium"}`}>
                <span className="text-2xl">{item.icon}</span>{item.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 border-t border-white/10 pt-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-400 text-xl font-semibold">K</div>
            <div><p className="font-semibold">Kullanıcı</p><p className="text-sm text-slate-300">kullanici@mail.com</p></div>
          </div>
        </aside>

        <main className="ml-[280px] min-h-screen flex-1 px-8 py-7">
          <header className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">{currentSection.icon}</div>
            <div><h1 className="text-[30px] font-bold">{currentSection.title}</h1><p className="mt-1 text-[17px] text-slate-500">{currentSection.description}</p></div>
          </header>

          {section === "products" ? (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between"><h2 className="text-xl font-bold">Tüm Ürünler</h2><button className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">+ Ürün Ekle</button></div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {products.map((product) => (
                  <article key={product.name} className="rounded-xl border border-slate-200 p-4 transition hover:border-green-400 hover:shadow-sm">
                    <div className="flex h-32 items-center justify-center rounded-xl bg-green-50 text-6xl">{product.icon}</div>
                    <h3 className="mt-4 text-lg font-bold">{product.name}</h3><p className="mt-1 text-slate-500">{product.amount}</p><p className="mt-3 text-sm text-red-500">Son kullanma: {product.date}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm"><div className="text-6xl">{currentSection.icon}</div><h2 className="mt-4 text-2xl font-bold">{currentSection.title} ekranı hazır</h2><p className="mt-2 text-slate-500">Bu bölüm için içerik ve işlemler yakında burada olacak.</p></section>
          )}
        </main>
      </div>
    </div>
  );
}
