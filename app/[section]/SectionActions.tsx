"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export function SettingsSection() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">Hesap Ayarları</h2>
      <p className="mt-2 text-slate-500">Hesabından güvenli bir şekilde çıkış yapabilirsin.</p>
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isSigningOut}
        className="mt-6 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
      >
        {isSigningOut ? "Çıkış yapılıyor..." : "Çıkış Yap"}
      </button>
    </section>
  );
}

const initialReminders = [
  { id: 1, title: "Süt", text: "Son kullanma tarihi yaklaşıyor.", date: "20 Ağustos 2026", read: false },
  { id: 2, title: "Yoğurt", text: "Son kullanma tarihine 3 gün kaldı.", date: "21 Ağustos 2026", read: false },
  { id: 3, title: "Tavuk Göğsü", text: "Bu ürünü kısa sürede tüketmelisin.", date: "22 Ağustos 2026", read: true },
];

export function RemindersSection() {
  const [reminders, setReminders] = useState(initialReminders);

  const markAsRead = (id: number) => {
    setReminders((currentReminders) => currentReminders.map((reminder) => (
      reminder.id === id ? { ...reminder, read: true } : reminder
    )));
  };

  const unreadCount = reminders.filter((reminder) => !reminder.read).length;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div><h2 className="text-xl font-bold">Bildirimler</h2><p className="mt-1 text-slate-500">{unreadCount} okunmamış bildirim</p></div>
        <button type="button" onClick={() => setReminders((currentReminders) => currentReminders.map((reminder) => ({ ...reminder, read: true })))} className="font-semibold text-green-600 hover:text-green-700">Tümünü okundu işaretle</button>
      </div>
      <div className="space-y-3">
        {reminders.map((reminder) => (
          <button key={reminder.id} type="button" onClick={() => markAsRead(reminder.id)} className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition hover:border-green-400 ${reminder.read ? "border-slate-200 bg-white" : "border-green-200 bg-green-50"}`}>
            <span className="text-2xl">{reminder.read ? "✓" : "🔔"}</span>
            <span className="flex-1"><strong className="block">{reminder.title}</strong><span className="text-sm text-slate-600">{reminder.text}</span><span className="mt-1 block text-xs text-slate-500">{reminder.date}</span></span>
            {!reminder.read && <span className="h-3 w-3 rounded-full bg-green-600" />}
          </button>
        ))}
      </div>
    </section>
  );
}
