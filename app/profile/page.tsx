"use client";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Order = {
  id: number;
  items: { id: number; name: string; price: number; quantity: number }[];
  total: number;
  paymentMethod: string;
  date: string;
};

const ProfilePage = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
    const hasAuth = document.cookie
      .split("; ")
      .some((c) => c.startsWith("auth="));
    if (!hasAuth) router.push("/signup");
  }, [router]);

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    localStorage.clear();
    alert("Logged out successfully!");
    router.push("/signup");
  };

  const deleteHistory = () => {
    if (confirm("Are you sure you want to delete all your order history?")) {
      localStorage.removeItem("orders");
      setOrders([]);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-yellow-400 min-h-screen p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-4xl font-extrabold text-center md:text-left flex-1">
            Profile / Order History
          </h1>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={deleteHistory}
              className="bg-black text-yellow-400 font-bold px-4 py-2 hover:bg-gray-500 rounded"
            >
              Delete History
            </button>
            <button
              onClick={handleLogout}
              className="bg-black text-yellow-400 font-bold px-4 py-2 hover:bg-gray-500 rounded"
            >
              LOGOUT
            </button>
            <Link href="/ordernow">
              <button className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">
                Order Booking
              </button>
            </Link>
            <Link href="/orderonline">
              <button className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">
                Order Menu
              </button>
            </Link>
          </div>
        </div>

        {orders.length === 0 ? (
          <p className="text-center text-lg">No orders yet.</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-black text-yellow-400 p-4 rounded shadow"
              >
                <h2 className="font-bold text-xl mb-2">
                  Order #{order.id} — {order.date}
                </h2>

                <div className="space-y-2">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between border-b border-yellow-400 pb-1"
                    >
                      <p>
                        {item.name} × {item.quantity}
                      </p>
                      <p>Rs {item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                <p className="font-semibold mt-2">Total: Rs {order.total}</p>
                <p>Payment: {order.paymentMethod}</p>
              </div>
            ))}
          </div>
        )}

        <div className="bg-yellow-400 flex justify-center mt-10">
          <a href="#" className="text-black text-lg font-bold hover:underline">
            MANAGE CONSENT PREFERENCE
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
