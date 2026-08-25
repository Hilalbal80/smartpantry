"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
if (error) {
  setMessage("Giriş başarısız: " + error.message);
} else {
  router.push("/dashboard");

      }
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage("Hesap oluşturulamadı: " + error.message);
      } else {
        setMessage("Hesabın oluşturuldu! ✅");
      }
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 text-center mb-2">
          SmartPantry
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Mutfağındaki ürünleri kolayca takip et.
        </p>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Giriş Yap" : "Hesap Oluştur"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="E-posta adresin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border rounded-lg p-3 text-gray-800"
          />

          <input
            type="password"
            placeholder="Şifren"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border rounded-lg p-3 text-gray-800"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700"
          >
            {isLogin ? "Giriş Yap" : "Hesap Oluştur"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-gray-700">
            {message}
          </p>
        )}

        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
          className="w-full mt-6 text-green-600 font-semibold"
        >
          {isLogin
            ? "Hesabın yok mu? Hesap Oluştur"
            : "Zaten hesabın var mı? Giriş Yap"}
        </button>
      </div>
    </main>
  );
}