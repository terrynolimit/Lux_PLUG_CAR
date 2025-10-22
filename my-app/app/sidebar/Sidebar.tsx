"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  ClipboardList,
  Package,
  Users,
  Settings,
  BarChart2,
} from "lucide-react";
// import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={18} />,
    href: "Admin/",
  },

  {
    name: "Bookings",
    icon: <ClipboardList size={18} />,
    href: "Admin/booking",
  },
  { name: "inventory", icon: <Package size={18} />, href: "Admin/cars" },
  { name: "Customers", icon: <Users size={18} />, href: "/customers" },
  { name: "Settings", icon: <Settings size={18} />, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-screen bg-white shadow-md flex flex-col p-20 item-center rounded-2xl text-xl ">
      <div className="flex items-center space-x-2 mb-10">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
          {/* <LayoutDashboard className="text-white" size={20} /> */}
        </div>
        <h1 className="text-xl font-semibold text-gray-800">LUX Rentals</h1>
      </div>

      <ul className=" space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-20 border-t border-gray-300 pt-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Kehinde Ojo</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          {/* <LogOut size={18} className="text-gray-500" /> */}
        </button>
      </div>
    </div>
  );
}
