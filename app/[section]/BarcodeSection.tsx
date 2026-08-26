"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Detector = new (options?: { formats: string[] }) => {
  detect: (source: HTMLVideoElement) => Promise<Array<{ rawValue: string }>>;
};

type CameraWindow = Window & {
  BarcodeDetector?: Detector;
};

export default function BarcodeSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [barcode, setBarcode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let isActive = true;
    let scanTimer: number | undefined;

    const startScanner = async () => {
      const DetectorClass = (window as CameraWindow).BarcodeDetector;
      if (!DetectorClass) {
        setMessage("Tarayıcın otomatik barkod taramayı desteklemiyor. Barkod numarasını elle girebilirsin.");
        return;
      }

      try {
        streamRef.current = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
        });
        if (!isActive || !videoRef.current) return;
        videoRef.current.srcObject = streamRef.current;
        await videoRef.current.play();
        setIsScanning(true);

        const detector = new DetectorClass({ formats: ["ean_13", "ean_8", "upc_a", "upc_e", "code_128"] });
        const scan = async () => {
          if (!isActive || !videoRef.current) return;
          try {
            const results = await detector.detect(videoRef.current);
            if (results[0]?.rawValue) {
              setBarcode(results[0].rawValue);
              setMessage("Barkod başarıyla okundu. Ürünü eklemek için Ürünler sayfasına geçebilirsin.");
              return;
            }
          } catch {
            setMessage("Barkod okunamadı. Kamerayı ürüne biraz daha yaklaştır.");
          }
          scanTimer = window.setTimeout(scan, 500);
        };
        scan();
      } catch {
        setMessage("Kamera açılamadı. Tarayıcı ayarlarından kamera izni ver veya barkod numarasını elle gir.");
      }
    };

    startScanner();
    return () => {
      isActive = false;
      if (scanTimer) window.clearTimeout(scanTimer);
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  return (
    <section className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div><h2 className="text-2xl font-bold">Barkod Tara</h2><p className="mt-1 text-slate-500">Ürünün barkodunu kamera ile okut.</p></div>
        <span className="text-4xl">▦</span>
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-slate-900">
        <video ref={videoRef} className="aspect-video w-full object-cover" playsInline muted />
        <div className="pointer-events-none absolute inset-8 rounded-xl border-2 border-green-400" />
        {!isScanning && <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">Kamera bekleniyor...</div>}
      </div>
      {message && <p className="mt-4 rounded-xl bg-green-50 p-4 text-sm text-slate-700">{message}</p>}
      <div className="mt-6 border-t border-slate-200 pt-5"><label className="block text-sm font-semibold text-slate-700" htmlFor="barcode">Barkod numarasını elle gir</label><div className="mt-2 flex gap-3"><input id="barcode" value={barcode} onChange={(event) => setBarcode(event.target.value)} placeholder="Örn. 869..." className="min-w-0 flex-1 rounded-xl border border-slate-300 p-3" /><Link href="/products" className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700">Ürüne geç</Link></div></div>
    </section>
  );
}
