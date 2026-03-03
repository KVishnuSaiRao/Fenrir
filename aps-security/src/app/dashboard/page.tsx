
"use client";
import { MOCK_SCANS } from '@/data/mockData';
import { Search, Filter, Columns, Plus } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen bg-white dark:bg-[#0B0F12] transition-colors duration-300">      
      <div className="bg-white dark:bg-[#161B21] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100 dark:border-white/5 flex justify-between bg-white dark:bg-[#161B21]">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input className="w-full pl-12 pr-4 py-2 bg-gray-50 dark:bg-[#1C232B] rounded-xl outline-none text-gray-900 dark:text-white" placeholder="Search scans by name or type..." />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border dark:border-white/10 rounded-xl text-sm dark:text-gray-300"><Filter size={16}/> Filter</button>
            <button className="flex items-center gap-2 px-4 py-2 border dark:border-white/10 rounded-xl text-sm dark:text-gray-300"><Columns size={16}/> Column</button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2"><Plus size={16}/> New scan</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="text-[11px] uppercase text-gray-400 dark:text-gray-500 font-semibold bg-gray-50/50 dark:bg-[#161B21]">
              <tr>
                <th className="px-6 py-4">Scan Name</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4">Vulnerability</th>
                <th className="px-6 py-4 text-right">Last Scan</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {MOCK_SCANS.map((scan) => (
                <tr key={scan.id} className="border-t border-gray-50 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-[#1C232B] transition-colors">
                  <td className="px-6 py-5 font-medium text-gray-900 dark:text-gray-200">{scan.name}</td>
                  <td className="px-6 py-5 text-gray-500 dark:text-gray-400">{scan.type}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      scan.status === 'Completed' ? 'bg-green-500/10 text-green-500' : 
                      scan.status === 'Failed' ? 'bg-red-500/10 text-red-500' : 'bg-gray-500/10 text-gray-400'
                    }`}>
                      {scan.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="w-32 h-1.5 bg-gray-100 dark:bg-[#252D37] rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: `${scan.progress}%` }} />
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex gap-1.5">
                      {scan.vulns.map((v, i) => (
                        <span key={i} className={`w-6 h-6 flex items-center justify-center rounded text-[10px] font-bold text-white shadow-sm ${
                          ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'][i]
                        }`}>{v}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right text-gray-400 dark:text-gray-500">{scan.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}