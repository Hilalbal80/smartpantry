import Link from "next/link";
import { notFound } from "next/navigation";
import ProductSection from "./ProductSection";
import FinishedProductSection from "./FinishedProductSection";
import TipsSection from "./TipsSection";
import BarcodeSection from "./BarcodeSection";
import CategoriesSection from "./CategoriesSection";
import { RemindersSection, SettingsSection } from "./SectionActions";

const sections = {
  products: {
    title: "Ürünler",
    description: "Mutfağındaki tüm ürünleri tek yerden takip et.",
    icon: "🥫",
  },
  "finished-products": {
    title: "Biten Ürünler",
    description: "Tükettiğin ürünleri burada takip et.",
    icon: "✓",
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
  tips: {
    title: "İpuçları",
    description: "Sahip olduğun ürünleri değerlendirmek için öneriler al.",
    icon: "💡",
  },
  barcode: {
    title: "Barkod Tara",
    description: "Ürün barkodunu kamerayla okut.",
    icon: "▦",
  },
  settings: {
    title: "Ayarlar",
    description: "Hesap ve uygulama ayarlarını düzenle.",
    icon: "⚙",
  },
} as const;

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
    <div className="min-h-screen bg-[#f7faf8] text-slate-900">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="sticky top-0 z-40 flex w-full flex-col border-b border-slate-200 bg-white px-4 py-5 md:min-h-screen md:w-[245px] md:self-start md:border-b-0 md:border-r md:px-3 md:py-7">
          <Link href="/dashboard" className="mb-6 flex items-center gap-3 px-3 md:mb-10">
            <img src="/smartpantry.png" alt="SmartPantry logosu" className="h-11 w-11 rounded-2xl object-cover" />
            <div>
              <div className="text-[25px] font-bold tracking-tight text-[#155b35]">Smart<span className="text-[#2caa62]">Pantry</span></div>
              <p className="mt-0.5 text-[10px] font-semibold leading-3 text-[#155b35]">Akıllı Kiler · İsrafı Azalt · Geleceği Koru.</p>
            </div>
          </Link>

          <nav className="grid grid-cols-2 gap-2 md:block md:space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-green-50 md:text-[15px]"><span className="w-6 text-center text-xl">⌂</span>Anasayfa</Link>
            {Object.entries(sections).filter(([key]) => key !== "barcode").map(([key, item]) => (
              <Link key={key} href={`/${key}`} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:bg-green-50 md:text-[15px] ${key === section ? "bg-[#168542] font-semibold text-white shadow-sm hover:bg-[#168542]" : "font-semibold text-slate-700"}`}>
                <span className="w-6 text-center text-xl">{item.icon}</span>{item.title}
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
          <header className="mb-7 flex items-center gap-4">
            {section !== "products" && <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl">{currentSection.icon}</div>}
            <div><h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{currentSection.title}</h1><p className="mt-1 text-sm text-slate-500 sm:text-base">{currentSection.description}</p></div>
          </header>

          {section === "products" ? (
            <ProductSection />
          ) : section === "finished-products" ? (
            <FinishedProductSection />
          ) : section === "settings" ? (
            <SettingsSection />
          ) : section === "reminders" ? (
            <RemindersSection />
          ) : section === "tips" ? (
            <TipsSection />
          ) : section === "barcode" ? (
            <BarcodeSection />
          ) : section === "categories" ? (
            <CategoriesSection />
          ) : (
            <section className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm"><div className="text-6xl">{currentSection.icon}</div><h2 className="mt-4 text-2xl font-bold">{currentSection.title}</h2><p className="mt-2 text-slate-500">Bu bölüm için işlemler burada yönetilir.</p></section>
          )}
        </main>
      </div>
    </div>
  );
}
