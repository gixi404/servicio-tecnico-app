import { Link } from "wouter";
import { useStore } from "../utils/store";
import type { Component } from "../utils/types";
import { CircleArrowLeft } from "lucide-react";

function OrderToPrint(): Component {
  const { order } = useStore();
  return (
    <div className="h-full w-full">
      <div className="w-full flex gap-x-2 items-center justify-center duration-75 cursor-default fixed max-w-md z-50 top-10">
        <Link to="/">
          <CircleArrowLeft
            size={38}
            strokeWidth={1.5}
            className="rounded-full cursor-pointer text-slate-700 hover:text-slate-500 bg-white"
          />
        </Link>
      </div>
      <section
        onClick={() => print()}
        className="w-full max-w-3xl mx-auto px-6 h-[800px] select-none">
        <article className="border-b-2 border-dashed border-gray-400 h-2/4 flex flex-col justify-start w-full items-center">
          <div className="flex justify-between items-center mb-4 w-full">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <h1 className="text-xl font-bold">Carburaciones Miguél</h1>
            </div>
            <div className="text-right">
              <p className="font-semibold">Fecha de ingreso: 13/05/24</p>
              <p className="font-semibold">Nº de Orden: {order.id}</p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <div className="flex justify-start items-center w-full gap-x-2">
              <p className="font-bold">Equipo:</p>
              <p>{order.piece}</p>
            </div>
            <p className="font-bold mt-2">Síntomas:</p>
            <p>{order.symptoms}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4 flex flex-col justify-center items-start gap-y-1 w-full">
            <p className="font-bold">Información Importante</p>
            <p className="text-sm">
              Esta orden de recepción es necesaria para retirar el equipo. La
              empresa no se responsabiliza por equipos no retirados después de
              30 días. Para consultas sobre el estado de su reparación,
              contáctenos.
            </p>
          </div>
          <footer className="text-center text-sm w-full">
            <p>
              <b>Contacto:</b> 123 456 7890
            </p>
            <p>
              <b>Dirección:</b> Avenida siempre viva 123
            </p>
          </footer>
        </article>

        <article className="h-2/4 pt-10">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="mr-2"
              />
              <h1 className="text-xl font-bold">Carburaciones Miguél</h1>
            </div>
            <div className="text-right">
              <p className="font-semibold">Fecha de ingreso: 13/05/24</p>
              <p className="font-semibold">Nº de Orden: {order.id}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Equipo:</p>
            <p>{order.piece}</p>
            <p className="font-bold mt-2">Síntomas:</p>
            <p>{order.symptoms}</p>
            <p className="font-bold mt-2">Trabajo realizado:</p>
            <p className="font-bold mt-2">
              <b>Coste:</b>
            </p>
          </div>
          <div className="flex justify-between mt-8 items-center gap-x-40">
            <div className="w-1/2">
              <div className="border-t border-gray-400 pt-2">
                <p className="text-center">Firma del responsable</p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="border-t border-gray-400 pt-2">
                <p className="text-center">Firma de quien retira</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default OrderToPrint;
