"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { useRouter } from "next/navigation";

const menuItems = [
  { id: 1, name: "Burger", price: 300 },
  { id: 2, name: "Zinger Burger", price: 450 },
  { id: 3, name: "Tower Burger", price: 550 },
  { id: 4, name: "Pizza Small", price: 800 },
  { id: 5, name: "Pizza Medium", price: 1200 },
  { id: 6, name: "Pizza Large", price: 1600 },
  { id: 7, name: "French Fries", price: 200 },
  { id: 8, name: "Loaded Fries", price: 350 },
  { id: 9, name: "Chicken Roll", price: 250 },
  { id: 10, name: "Chicken Shawarma", price: 280 },
  { id: 11, name: "Bihari Roll", price: 400 },
  { id: 12, name: "Fish Burger", price: 420 },
];

const Orderonline = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const hasAuth = document.cookie
      .split("; ")
      .some((c) => c.startsWith("auth="));
    if (!hasAuth) {
      router.push("/signup");
    } else {
      setIsAuth(true);
      const savedCart = localStorage.getItem("cart");
      if (savedCart) setCart(JSON.parse(savedCart));
    }
  }, [router]);

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    localStorage.clear();
    alert("Logged out successfully!");
    router.push("/signup");
  };

  const addToCart = (item: any) => {
    let newCart;
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
      newCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
      );
    } else {
      newCart = [...cart, { ...item, quantity: 1 }];
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    // Optional: small toast instead of alert
    alert(`${item.name} added to cart`);
  };

  if (!isAuth) return null; // prevents flicker

  return (
    <>
      <Navbar />
      <div className="p-10 bg-yellow-400 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-4xl font-extrabold">Menu Page</h1>

          <div className="flex gap-3">
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-black hover:bg-gray-900 font-bold text-yellow-400 rounded"
            >
              LOGOUT
            </button>
          </div>
        </div>

        <div className="flex gap-5 mb-8">
          <Link href="/ordernow">
            <button className="bg-black text-yellow-400 px-5 py-2 rounded hover:bg-gray-800">
              Order Booking
            </button>
          </Link>

          <Link href="/profile">
            <button className="bg-black text-yellow-400 px-5 py-2 rounded hover:bg-gray-800">
              Order History
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-yellow-400 text-black p-5 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p className="mb-3">Rs {item.price}</p>

              <button
                onClick={() => addToCart(item)}
                className="border-2 border-black w-full py-2 font-bold hover:bg-black hover:text-yellow-400 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orderonline;
