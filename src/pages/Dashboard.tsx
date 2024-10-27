import { PlusCircle, Search } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";
import { useStore } from "../utils/store";
import type { Component } from "../utils/types";

function Dashboard(): Component {
  const { resetOrder } = useStore();

  useEffect(() => resetOrder(), []);

  return (
    <main className="w-full flex flex-col items-center justify-center p-4 rounded-lg select-none">
      <div className="flex flex-col items-center justify-center gap-y-8">
        <header className="text-5xl w-full text-center font-semibold">
          Taller
        </header>
        <section className="w-full flex items-center justify-center flex-col gap-y-4">
          <Link
            to="/new-order"
            className="py-12 px-20 bg-slate-800 hover:bg-slate-700 text-white rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center gap-x-3.5 w-full">
            <PlusCircle className="h-8 w-8" />
            <p className="text-2xl">Nueva orden</p>
          </Link>
          <Link
            to="/orders"
            className="py-12 px-20 text-xl bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center gap-x-3.5 w-full border-2 border-slate-300">
            <Search className="h-8 w-8" />
            <p className="text-2xl">Buscar orden</p>
          </Link>
        </section>

        <footer className="text-center text-sm text-slate-500 w-full">
          <p>Soporte Técnico</p>
          <p>261 252 0993 - gixi.tsx@gmail.com</p>
        </footer>
      </div>
    </main>
  );
}

export default Dashboard;
