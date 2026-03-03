"use client";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0F0F0F]">
      <div className="hidden lg:flex w-1/2 bg-[#0A0A0A] p-16 flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-6">Expert level <span className="text-teal-400">Cybersecurity</span> in <span className="text-teal-400 italic">hours</span>.</h1>
        <p className="text-gray-400 max-w-sm">Effortlessly map targets and uncover hidden flaws in hours, not weeks.</p>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <form onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }} className="w-full max-w-md bg-white dark:bg-[#1A1A1A] p-10 rounded-3xl border dark:border-white/5 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Sign up</h2>
          <div className="space-y-4">
            <input className="w-full p-4 rounded-xl border dark:bg-transparent dark:border-white/10 outline-none focus:border-teal-400" placeholder="Email address*" required />
            <input className="w-full p-4 rounded-xl border dark:bg-transparent dark:border-white/10 outline-none focus:border-teal-400" type="password" placeholder="Password*" required />
            <button className="w-full bg-teal-400 text-black font-bold py-4 rounded-xl hover:bg-teal-300 transition">Create account</button>
          </div>
        </form>
      </div>
    </div>
  );
}