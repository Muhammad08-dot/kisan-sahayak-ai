"use client";

import React, { useState } from "react";
import { Sprout, CloudSun, TrendingUp, Mic, ShieldCheck, Sparkles, Upload } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"diagnosis" | "irrigation" | "market" | "voice">("diagnosis");
  const [cropName, setCropName] = useState("Gandum (Wheat)");
  const [language, setLanguage] = useState("Urdu");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleDiagnosis = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call to FastAPI backend
    setTimeout(() => {
      setResult({
        disease: "Yellow Rust (Puccinia striiformis)",
        confidence: 96.8,
        treatment: "سپرے پروپیکونازول 25% ای سی بحساب 200 ملی لیٹر فی ایکڑ 150-200 لیٹر پانی میں ملا کر کریں۔14 دن بعد دوبارہ دہرایں۔",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#040d08] text-emerald-100 flex flex-col">
      {/* Header / Navbar */}
      <header className="border-b border-emerald-900/60 bg-[#06180e]/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Sprout className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-emerald-400 tracking-wide">Kisan Sahayak AI 🌾</h1>
            <p className="text-xs text-emerald-600 font-mono">PRODUCTION FULL-STACK AI PLATFORM</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs text-emerald-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>FastAPI + Qdrant + LangGraph</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1 space-y-3">
          <button
            onClick={() => setActiveTab("diagnosis")}
            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
              activeTab === "diagnosis"
                ? "bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950"
                : "bg-[#081b10]/60 border-emerald-900/40 text-emerald-500 hover:border-emerald-700"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Sprout className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Crop Diagnosis</span>
            </div>
            <Sparkles className="w-4 h-4 text-emerald-500" />
          </button>

          <button
            onClick={() => setActiveTab("irrigation")}
            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
              activeTab === "irrigation"
                ? "bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950"
                : "bg-[#081b10]/60 border-emerald-900/40 text-emerald-500 hover:border-emerald-700"
            }`}
          >
            <div className="flex items-center space-x-3">
              <CloudSun className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Smart Irrigation</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("market")}
            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
              activeTab === "market"
                ? "bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950"
                : "bg-[#081b10]/60 border-emerald-900/40 text-emerald-500 hover:border-emerald-700"
            }`}
          >
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Market Prices</span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("voice")}
            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
              activeTab === "voice"
                ? "bg-emerald-900/40 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950"
                : "bg-[#081b10]/60 border-emerald-900/40 text-emerald-500 hover:border-emerald-700"
            }`}
          >
            <div className="flex items-center space-x-3">
              <Mic className="w-5 h-5 text-emerald-400" />
              <span className="font-semibold">Urdu Voice AI</span>
            </div>
          </button>
        </div>

        {/* Dynamic Workspace */}
        <div className="lg:col-span-3 bg-[#081b10]/60 border border-emerald-900/50 rounded-2xl p-6 shadow-2xl">
          {activeTab === "diagnosis" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-emerald-400">Crop Disease Diagnostic AI</h2>
                <p className="text-sm text-emerald-600">Upload a leaf/crop image or specify parameters for ViT diagnosis.</p>
              </div>

              <form onSubmit={handleDiagnosis} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-emerald-400 mb-1">Crop Type</label>
                    <select
                      value={cropName}
                      onChange={(e) => setCropName(e.target.value)}
                      className="w-full bg-[#05130b] border border-emerald-800 rounded-lg p-3 text-emerald-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option>Gandum (Wheat)</option>
                      <option>Kapas (Cotton)</option>
                      <option>Chawal (Rice)</option>
                      <option>Makai (Corn)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-emerald-400 mb-1">Output Language</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full bg-[#05130b] border border-emerald-800 rounded-lg p-3 text-emerald-200 focus:outline-none focus:border-emerald-500"
                    >
                      <option>Urdu (اردو)</option>
                      <option>Roman Urdu</option>
                      <option>English</option>
                    </select>
                  </div>
                </div>

                <div className="border-2 border-dashed border-emerald-800/60 hover:border-emerald-500 rounded-xl p-8 text-center bg-[#05130b]/40 transition-all cursor-pointer">
                  <Upload className="w-10 h-10 mx-auto text-emerald-500 mb-2" />
                  <p className="text-sm font-medium text-emerald-300">Drag & Drop Leaf Photo Here</p>
                  <p className="text-xs text-emerald-600 mt-1">Supports PNG, JPG, JPEG up to 10MB</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-black font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {loading ? "Analyzing Image with LangGraph..." : "🚀 Diagnose Crop Disease"}
                </button>
              </form>

              {result && (
                <div className="mt-6 border border-emerald-600/50 bg-[#072413] rounded-xl p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Diagnosis Output</span>
                    <span className="bg-emerald-950 text-emerald-400 border border-emerald-700 px-3 py-1 rounded-full text-xs font-mono">
                      {result.confidence}% Confidence
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{result.disease}</h3>
                  <div className="border-t border-emerald-900 pt-3 text-emerald-200 text-sm leading-relaxed whitespace-pre-line font-medium">
                    {result.treatment}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "irrigation" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-emerald-400">Weather-Based Smart Irrigation</h2>
              <p className="text-sm text-emerald-600">Integrates OpenWeather API with local soil moisture parameters.</p>
              <div className="p-4 border border-emerald-800 rounded-xl bg-[#06180e]">
                <h3 className="font-semibold text-emerald-300">Faisalabad Region Advisory:</h3>
                <p className="text-sm text-emerald-400 mt-1">Light precipitation expected in 48 hours. Postpone wheat irrigation to prevent root rot.</p>
              </div>
            </div>
          )}

          {activeTab === "market" && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-emerald-400">Market Price Forecasting</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-emerald-800 rounded-xl bg-[#06180e] text-center">
                  <span className="text-xs text-emerald-500 uppercase">Wheat / 40kg</span>
                  <div className="text-xl font-bold text-emerald-300 mt-1">Rs. 3,950</div>
                </div>
                <div className="p-4 border border-emerald-800 rounded-xl bg-[#06180e] text-center">
                  <span className="text-xs text-emerald-500 uppercase">Cotton / 40kg</span>
                  <div className="text-xl font-bold text-emerald-300 mt-1">Rs. 8,400</div>
                </div>
                <div className="p-4 border border-emerald-800 rounded-xl bg-[#06180e] text-center">
                  <span className="text-xs text-emerald-500 uppercase">Rice / 40kg</span>
                  <div className="text-xl font-bold text-emerald-300 mt-1">Rs. 4,200</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "voice" && (
            <div className="space-y-4 text-center py-8">
              <Mic className="w-16 h-16 text-emerald-400 mx-auto animate-pulse" />
              <h2 className="text-xl font-bold text-emerald-300">Urdu Voice Assistant Active</h2>
              <p className="text-sm text-emerald-600">Speak into microphone to get crop advice in Urdu.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
