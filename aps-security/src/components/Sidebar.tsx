"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Shield, Calendar, Moon, Sun, Bell, Settings, LifeBuoy } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function Sidebar() {
  const pathname = usePathname();
  const { isDark, toggleTheme } = useTheme();

  if (pathname === '/') return null;

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard', disabled: false },
    { name: 'Scans', icon: Shield, href: '/scans', disabled: false },
    { name: 'Projects', icon: Shield, href: '/projects', disabled: true },
    { name: 'Schedule', icon: Calendar, href: '/schedule', disabled: true },
    { name: 'Notifications', icon: Bell, href: '/notifications', disabled: true },
    { name: 'Settings', icon: Settings, href: '/settings', disabled: true },
    { name: 'Support', icon: LifeBuoy, href: '/support', disabled: true },
  ];

  return (
    <aside className="w-64 border-r border-gray-100 dark:border-white/10 flex flex-col p-6 bg-white dark:bg-[#0F0F0F] shrink-0 h-screen transition-all duration-300">
      <div className="flex items-center gap-2 mb-10 text-teal-500 font-bold text-2xl">
        <div className="w-6 h-6 bg-teal-500 rounded-full" /> aps
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = item.href === '/dashboard' 
            ? pathname === '/dashboard' 
            : pathname.startsWith(item.href);
          
          return (
            <div key={item.name}>
              {item.disabled ? (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 dark:text-gray-700 cursor-not-allowed opacity-50">
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ) : (
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-teal-500/10 text-teal-500 font-bold' 
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-gray-100 dark:border-white/5 space-y-2">
        <button 
          onClick={toggleTheme} 
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl transition-all"
        >
          {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
          <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </aside>
  );
}