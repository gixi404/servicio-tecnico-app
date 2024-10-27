import { ArrowDownToLine, CircleArrowLeft, Printer } from "lucide-react";
import { Link } from "wouter";
import { useStore } from "../utils/store";
import type { Component } from "../utils/types";

function NewOrder(): Component {
  const { order, setOrder } = useStore();

  return (
    <div className="h-full max-h-[600px] flex items-center justify-center flex-col gap-y-4 w-full max-w-sm relative">
      <div className="w-full flex gap-x-2 items-center justify-end duration-75 cursor-default absolute -top-8 z-50">
        <Link to="/">
          <CircleArrowLeft
            size={38}
            strokeWidth={1.5}
            className="rounded-full cursor-pointer text-slate-700 hover:text-slate-500 bg-white"
          />
        </Link>
      </div>
      <form className="flex justify-center items-center flex-col w-full gap-y-8">
        <div className="flex flex-col justify-center items-start gap-y-6 w-full">
          <div className="w-full flex flex-col justify-start items-start gap-y-1">
            <label
              htmlFor="name"
              className="block pl-0.5 text-xl font-medium text-gray-700">
              Nombre
            </label>
            <input
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              onChange={e => setOrder({ ...order, clientName: e.target.value })}
              id="name"
              name="name"
              type="text"
              autoFocus
              className="relative block w-full px-3 py-2.5 border-2 border-slate-300 placeholder-gray-400 text-gray-900 rounded-md outline-0 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="Ingrese nombre y apellido"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-y-1">
            <label
              htmlFor="phone"
              className="block pl-0.5 text-xl font-medium text-gray-700">
              Celular
            </label>
            <input
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              onChange={e =>
                setOrder({ ...order, phoneNumber: e.target.value })
              }
              id="phone"
              name="phone"
              type="text"
              className="relative block w-full px-3 py-2.5 border-2 border-slate-300 placeholder-gray-400 text-gray-900 rounded-md outline-0 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="Ingrese número de celular"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-y-1">
            <label
              htmlFor="piece"
              className="block pl-0.5 text-xl font-medium text-gray-700">
              Equipo
            </label>
            <input
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              onChange={e => setOrder({ ...order, piece: e.target.value })}
              id="piece"
              name="piece"
              type="text"
              className="relative block w-full px-3 py-2.5 border-2 border-slate-300 placeholder-gray-400 text-gray-900 rounded-md outline-0 focus:ring-indigo-400 focus:border-indigo-400"
              placeholder="Ingrese el equipo"
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-y-1">
            <label
              htmlFor="symptoms"
              className="block pl-0.5 text-xl font-medium text-gray-700">
              Síntomas
            </label>
            <textarea
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              onChange={e => setOrder({ ...order, symptoms: e.target.value })}
              id="symptoms"
              name="symptoms"
              className="relative block w-full px-3 py-2.5 border-2 border-slate-300 placeholder-gray-400 text-gray-900 rounded-md outline-0 focus:ring-indigo-400 focus:border-indigo-400 resize-none h-32"
              placeholder="Ingrese los síntomas"
            />
          </div>
        </div>
        <div className="w-full flex justify-end items-start gap-x-4">
          <Link
            to="/"
            className="bg-slate-200 hover:bg-slate-300 border-2 border-slate-300 text-black rounded-lg w-1/4 h-14 text-lg flex justify-center items-center gap-x-3 duration-100">
            <ArrowDownToLine />
          </Link>
          <Link
            to="/order-to-print"
            className="bg-slate-800 hover:bg-slate-700 text-white rounded-lg w-1/4 h-14 text-lg flex justify-center items-center gap-x-3 duration-100">
            <Printer strokeWidth={1.7} />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default NewOrder;
