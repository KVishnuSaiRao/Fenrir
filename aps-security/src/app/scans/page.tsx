"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LOG_ENTRIES } from '@/data/mockData';

export default function ScanDetailPage() {
  const params = useParams();
  const scanId = params.id;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F0F0F] transition-colors">
      <header className="p-6 border-b dark:border-white/5 flex justify-between items-center">
        <h1 className="font-bold text-gray-900 dark:text-white">Scan Detail: {scanId}</h1>
        <button className="text-red-500 bg-red-500/10 px-4 py-2 rounded-xl text-sm font-bold border border-red-500/20">
          Stop Scan
        </button>
      </header>
      
      <div className="p-8 grid grid-cols-12 gap-8 flex-1 overflow-hidden">
        <div className="col-span-8 bg-white dark:bg-[#1A1A1A] rounded-3xl border dark:border-white/5 flex flex-col overflow-hidden shadow-sm">
          <div className="p-4 border-b dark:border-white/5 text-sm font-bold text-gray-700 dark:text-gray-300">
            Live Scan Console
          </div>
          <div className="flex-1 p-6 font-mono text-xs space-y-4 overflow-y-auto bg-gray-50 dark:bg-black/20 text-gray-800 dark:text-gray-300">
            {LOG_ENTRIES.map((log, i) => (
              <p key={i}>
                <span className="text-gray-400 dark:text-gray-500">[{log.time}]</span> {log.text}
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-4 space-y-4">
          <h2 className="font-bold text-sm text-gray-900 dark:text-white">Finding Log</h2>
          <div className="bg-white dark:bg-[#1A1A1A] border dark:border-white/5 p-4 rounded-2xl relative overflow-hidden shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
            <span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">Critical</span>
            <h3 className="font-bold text-sm mt-2 text-gray-900 dark:text-white">SQL Injection Detected</h3>
            <p className="text-[10px] text-teal-500 font-mono">/api/auth/login</p>
          </div>
        </div>
      </div>
    </div>
  );
}