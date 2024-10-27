import {
  ChevronRight,
  CircleArrowLeft,
  Hash,
  Printer,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { normalize } from "../utils/helpers";
import type { Component, Order } from "../utils/types";
import { useStore } from "../utils/store";

const initialOrders: Order[] = [
  {
    id: 1,
    clientName: "Juan Pérez",
    phoneNumber: "123-456-7890",
    symptoms: "Pantalla rota",
    piece: "Microondas",
  },
  {
    id: 2,
    clientName: "María García",
    phoneNumber: "098-765-4321",
    symptoms: "No carga",
    piece: "Horno eléctrico",
  },
  {
    id: 3,
    clientName: "Carlos López",
    phoneNumber: "555-555-5555",
    symptoms: "No enciende",
    piece: "Licuadora",
  },
  {
    id: 4,
    clientName: "Ana Rodríguez",
    phoneNumber: "123-123-1234",
    symptoms: "Ruido extraño",
    piece: "Refrigerador",
  },
  {
    id: 5,
    clientName: "José Martínez",
    phoneNumber: "321-321-4321",
    symptoms: "No enfría",
    piece: "Aire acondicionado",
  },
  {
    id: 6,
    clientName: "Laura Sánchez",
    phoneNumber: "987-654-3210",
    symptoms: "Goteo",
    piece: "Lavadora",
  },
  {
    id: 7,
    clientName: "Pedro Ramírez",
    phoneNumber: "456-456-7890",
    symptoms: "Fuga de gas",
    piece: "Estufa",
  },
  {
    id: 8,
    clientName: "Luis Ortiz",
    phoneNumber: "789-123-4567",
    symptoms: "No gira",
    piece: "Ventilador",
  },
  {
    id: 9,
    clientName: "Elena Jiménez",
    phoneNumber: "654-321-0987",
    symptoms: "Falla en pantalla",
    piece: "Televisor",
  },
  {
    id: 10,
    clientName: "Miguel Torres",
    phoneNumber: "123-789-4560",
    symptoms: "Sin señal",
    piece: "Radio",
  },
  {
    id: 11,
    clientName: "Sofía Castillo",
    phoneNumber: "456-789-0123",
    symptoms: "Sin agua",
    piece: "Cafetera",
  },
  {
    id: 12,
    clientName: "Tomás Silva",
    phoneNumber: "789-654-1230",
    symptoms: "No calienta",
    piece: "Secadora",
  },
  {
    id: 13,
    clientName: "Natalia Rivas",
    phoneNumber: "098-123-4567",
    symptoms: "Fuga de agua",
    piece: "Lavavajillas",
  },
  {
    id: 14,
    clientName: "Andrés Vargas",
    phoneNumber: "432-987-1234",
    symptoms: "No congela",
    piece: "Congelador",
  },
  {
    id: 15,
    clientName: "Daniela Espinoza",
    phoneNumber: "234-567-8901",
    symptoms: "No funciona",
    piece: "Plancha",
  },
  {
    id: 16,
    clientName: "Francisco Hernández",
    phoneNumber: "678-901-2345",
    symptoms: "Huele a quemado",
    piece: "Aspiradora",
  },
  {
    id: 17,
    clientName: "Isabel Mora",
    phoneNumber: "345-678-9012",
    symptoms: "No enfría",
    piece: "Mini refrigerador",
  },
  {
    id: 18,
    clientName: "Gabriel Vega",
    phoneNumber: "789-012-3456",
    symptoms: "Se apaga solo",
    piece: "Computadora portátil",
  },
  {
    id: 19,
    clientName: "Lucía Castro",
    phoneNumber: "901-234-5678",
    symptoms: "No reproduce discos",
    piece: "Reproductor de DVD",
  },
  {
    id: 20,
    clientName: "Jorge Paredes",
    phoneNumber: "567-890-1234",
    symptoms: "No enciende la pantalla",
    piece: "Monitor",
  },
  {
    id: 21,
    clientName: "Emilia Morales",
    phoneNumber: "234-678-9012",
    symptoms: "Sin conexión a Wi-Fi",
    piece: "Router",
  },
  {
    id: 22,
    clientName: "David Romero",
    phoneNumber: "876-543-2109",
    symptoms: "Batería no carga",
    piece: "Tablet",
  },
  {
    id: 23,
    clientName: "Valeria Suárez",
    phoneNumber: "109-876-5432",
    symptoms: "Parlantes rotos",
    piece: "Altavoz",
  },
  {
    id: 24,
    clientName: "Mauricio Contreras",
    phoneNumber: "543-210-9876",
    symptoms: "Botones no funcionan",
    piece: "Control remoto",
  },
  {
    id: 25,
    clientName: "Ángela Paz",
    phoneNumber: "210-543-8765",
    symptoms: "No proyecta imagen",
    piece: "Proyector",
  },
  {
    id: 26,
    clientName: "Fernando Quiroga",
    phoneNumber: "876-210-5432",
    symptoms: "Sin sonido",
    piece: "Home theater",
  },
  {
    id: 27,
    clientName: "Camila Bravo",
    phoneNumber: "543-876-2109",
    symptoms: "Se reinicia solo",
    piece: "Tablet",
  },
  {
    id: 28,
    clientName: "Martín Guzmán",
    phoneNumber: "210-876-5432",
    symptoms: "Pantalla con líneas",
    piece: "Televisor",
  },
  {
    id: 29,
    clientName: "Renata Cárdenas",
    phoneNumber: "654-321-7890",
    symptoms: "No imprime",
    piece: "Impresora",
  },
  {
    id: 30,
    clientName: "Iván Alarcón",
    phoneNumber: "789-012-3456",
    symptoms: "Humo en el motor",
    piece: "Lavadora",
  },
  {
    id: 31,
    clientName: "Ximena León",
    phoneNumber: "345-789-0123",
    symptoms: "No sube temperatura",
    piece: "Calentador de agua",
  },
  {
    id: 32,
    clientName: "Ricardo Ramos",
    phoneNumber: "901-345-6789",
    symptoms: "Ruido fuerte",
    piece: "Aspiradora",
  },
  {
    id: 33,
    clientName: "Adriana Fuentes",
    phoneNumber: "123-901-4567",
    symptoms: "No guarda hielo",
    piece: "Refrigerador",
  },
  {
    id: 34,
    clientName: "Óscar Arias",
    phoneNumber: "567-234-8901",
    symptoms: "No detecta discos",
    piece: "Reproductor de Blu-ray",
  },
  {
    id: 35,
    clientName: "Patricia Cruz",
    phoneNumber: "234-901-5678",
    symptoms: "No enciende",
    piece: "Cafetera",
  },
  {
    id: 36,
    clientName: "Cristian Flores",
    phoneNumber: "567-890-3456",
    symptoms: "Fallo en luz LED",
    piece: "Lámpara",
  },
  {
    id: 37,
    clientName: "Sandra Delgado",
    phoneNumber: "789-123-2345",
    symptoms: "Pierde señal",
    piece: "Router",
  },
  {
    id: 38,
    clientName: "Rodrigo Herrera",
    phoneNumber: "345-678-0123",
    symptoms: "Sobrecalentamiento",
    piece: "Calentador",
  },
  {
    id: 39,
    clientName: "Karen Orozco",
    phoneNumber: "456-012-3456",
    symptoms: "No carga",
    piece: "Celular",
  },
  {
    id: 40,
    clientName: "Javier Barrios",
    phoneNumber: "678-345-9012",
    symptoms: "No funciona",
    piece: "Control remoto",
  },
  {
    id: 41,
    clientName: "Carmen Peña",
    phoneNumber: "890-123-4567",
    symptoms: "Imagen distorsionada",
    piece: "Televisor",
  },
  {
    id: 42,
    clientName: "Luis Ávila",
    phoneNumber: "234-567-8901",
    symptoms: "Ruido extraño",
    piece: "Ventilador",
  },
  {
    id: 43,
    clientName: "Silvia Garza",
    phoneNumber: "456-789-0123",
    symptoms: "No enciende",
    piece: "Lavadora",
  },
];

function Orders(): Component {
  const [orders] = useState<Order[]>(initialOrders);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setOrder } = useStore();

  const filteredOrders: Order[] = orders.filter(
    order =>
      normalize(order.clientName).includes(normalize(searchTerm)) ||
      normalize(order.phoneNumber).includes(normalize(searchTerm)) ||
      normalize(order.symptoms).includes(normalize(searchTerm)) ||
      normalize(order.piece).includes(normalize(searchTerm))
  );

  // const handlePrint = (orderId: number): void => {
  //   console.log(`Imprimiendo orden ${orderId}`);
  // };

  return (
    <div className="h-full w-full max-w-md bg-white mt-14">
      <div className="w-full flex gap-x-2 items-center justify-center duration-75 cursor-default fixed max-w-md z-50">
        <Link to="/">
          <CircleArrowLeft
            size={38}
            strokeWidth={1.5}
            className="rounded-full cursor-pointer text-slate-700 hover:text-slate-500 bg-white"
          />
        </Link>
      </div>
      <div className="mb-10 mt-6 flex flex-col justify-center items-center gap-y-4 pt-10 relative">
        <Search className="absolute left-10 top-12 h-6 w-6 text-slate-400 z-0" />
        <input
          autoFocus
          type="search"
          placeholder="Buscar órdenes..."
          className="w-full p-2 border-2 border-slate-300 bg-transparent rounded-md outline-0 max-w-sm pl-10 pr-4 z-10"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="flex gap-x-2 w-full justify-center items-center max-w-sm">
          <button className="bg-transparent border-2 rounded-md py-2 px-4">
            Órden
          </button>
          <button className="bg-slate-600 text-white border-2 border-slate-600 rounded-md py-2 px-4">
            Nombre
          </button>
          <button className="bg-transparent border-2 rounded-md py-2 px-4">
            Celular
          </button>
          <button className="bg-transparent border-2 rounded-md py-2 px-4">
            Síntomas
          </button>
        </div>
      </div>
      <ul className="space-y-4 pb-20">
        {filteredOrders.map(order => (
          <li
            key={order.id}
            className="border-slate-300/50 bg-slate-50 p-4 rounded-md border-2">
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-lg flex items-center gap-x-1.5 justify-start w-full text-slate-900">
                <Hash size={18} className="" />
                <span>{order.id}</span>
              </div>
              <Link
                to="/order-to-print"
                onClick={() => setOrder(order)}
                className="p-2 text-black bg-white duration-100 hover:border-slate-400 border-2 border-slate-300/70 rounded-md">
                <Printer className="w-6 h-6" strokeWidth={1.5} />
              </Link>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-x-0.5 justify-start w-full">
                <ChevronRight strokeWidth={1.3} size={18} className="mt-0.5" />
                <p>{order.clientName}</p>
              </div>
              <div className="flex items-center gap-x-0.5 justify-start w-full">
                <ChevronRight strokeWidth={1.3} size={18} className="mt-0.5" />
                <p>{order.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-x-0.5 justify-start w-full">
                <ChevronRight strokeWidth={1.3} size={18} className="mt-0.5" />
                <p>{order.piece}</p>
              </div>
              <div className="flex items-center gap-x-0.5 justify-start w-full">
                <ChevronRight strokeWidth={1.3} size={18} className="mt-0.5" />
                <p>{order.symptoms}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
