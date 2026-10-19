import React from "react";
import { Leaf, Camera, MessageSquare, ShoppingBag, CloudSun, CheckCircle2 } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px] rounded-[44px] border-[10px] border-slate-900 bg-slate-900 p-2 shadow-2xl">
      {/* Speaker / Camera Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-900 rounded-full z-20 flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-slate-700 mr-2" />
        <div className="h-1.5 w-8 rounded-full bg-slate-800" />
      </div>

      {/* Screen Container */}
      <div className="relative h-[560px] w-full overflow-hidden rounded-[34px] bg-slate-50 flex flex-col select-none">
        {/* Top Status Bar */}
        <div className="h-9 bg-emerald-800 text-white px-5 flex items-center justify-between text-[11px] font-medium pt-1 z-10">
          <span>10:30</span>
          <div className="flex items-center gap-1.5">
            <span>4G</span>
            <span>98%</span>
          </div>
        </div>

        {/* App Header */}
        <div className="bg-emerald-700 text-white px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-1.5 font-bold text-sm">
            <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5 text-lime-300" />
            </div>
            <span>Krishi Mantra</span>
          </div>
          <span className="text-[10px] bg-emerald-800 text-lime-200 px-2 py-0.5 rounded-full font-semibold">
            EN | ने
          </span>
        </div>

        {/* App Body Content */}
        <div className="flex-1 overflow-hidden p-3.5 space-y-3 bg-emerald-50/50 text-slate-800">
          {/* Weather Widget */}
          <div className="bg-white rounded-xl p-2.5 border border-emerald-100 shadow-xs flex items-center justify-between">
            <div>
              <p className="text-[10px] text-slate-500 font-medium">Chitwan, Nepal • Today</p>
              <p className="text-xs font-bold text-slate-800">26°C Sunny • Good for Weeding</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
              <CloudSun className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Ask Your Problem Card */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-3 shadow-xs">
            <span className="text-[9px] bg-emerald-800/80 text-lime-300 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
              Free Advisory
            </span>
            <p className="text-xs font-bold mt-1">Have a crop or animal problem?</p>
            <p className="text-[10px] text-emerald-100 mt-0.5 leading-snug">
              Snap a photo or send a voice message. Our experts answer free.
            </p>
            <div className="mt-2 flex gap-2">
              <div className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                <Camera className="w-3 h-3 text-lime-300" /> Photo
              </div>
              <div className="bg-white/20 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                <MessageSquare className="w-3 h-3 text-lime-300" /> Voice
              </div>
            </div>
          </div>

          {/* Produce Marketplace Preview */}
          <div className="bg-white rounded-xl p-3 border border-emerald-100 shadow-xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-emerald-600" /> Local Produce
              </span>
              <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                COD Only
              </span>
            </div>
            <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 flex items-center gap-2">
              <div className="w-10 h-10 rounded-md bg-emerald-200/60 flex items-center justify-center text-emerald-800 text-xs font-bold">
                🥦
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-slate-800">Fresh Cauliflower</p>
                <p className="text-[9px] text-slate-500">Chitwan Farm • Rs. 40 / kg</p>
              </div>
              <div className="text-[9px] bg-emerald-600 text-white px-2 py-1 rounded font-semibold">
                Order
              </div>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="bg-emerald-100/70 rounded-xl p-2.5 border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <p className="text-[10px] text-emerald-950 font-medium leading-tight">
              100% Free • No Payment Details • Data Stays Yours
            </p>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="h-12 bg-white border-t border-slate-200 px-4 flex items-center justify-around text-slate-500 text-[10px] z-10">
          <div className="flex flex-col items-center text-emerald-700 font-bold">
            <Leaf className="w-4 h-4" />
            <span className="text-[8px] mt-0.5">Home</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[12px]">📚</span>
            <span className="text-[8px] mt-0.5">Learn</span>
          </div>
          <div className="flex flex-col items-center">
            <Camera className="w-4 h-4" />
            <span className="text-[8px] mt-0.5">Ask</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[8px] mt-0.5">Market</span>
          </div>
        </div>
      </div>
    </div>
  );
}
