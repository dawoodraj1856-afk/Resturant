"use client";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const OrderNowPage = () => {
  const router = useRouter();
  const [cart, setCart] = useState<any[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const updateCart = (newCart: any[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id: number) =>
    updateCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));

  const decreaseQty = (id: number) =>
    updateCart(
      cart
        .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter(item => item.quantity > 0)
    );

  const removeItem = (id: number) => updateCart(cart.filter(item => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    if (!paymentMethod) return alert("Please select a payment method");

    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      paymentMethod,
      date: new Date().toLocaleString(),
    };

    const savedOrders = localStorage.getItem("orders");
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert(`Order Placed Successfully!\nPayment: ${paymentMethod}\nTotal: Rs ${total}`);

    localStorage.removeItem("cart");
    setCart([]);
    setPaymentMethod("");
  };

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    localStorage.clear();
    alert("Logged out successfully!");
    router.push("/signup");
  };

  return (
    <>
      <Navbar />

      <div className="bg-yellow-400 min-h-screen py-10 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-4xl font-extrabold text-center flex-1">Cart / Place Order</h1>
          <div className="flex flex-wrap gap-3">
            <Link href="/profile">
              <button className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">Order History</button>
            </Link>
            <Link href="/orderonline">
              <button className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800">Menu</button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-black text-yellow-400 px-4 py-2 rounded hover:bg-gray-800"
            >
              LOGOUT
            </button>
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-lg font-semibold mt-10">Your cart is empty</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-black text-yellow-400 p-4 rounded shadow"
              >
                <div className="text-center sm:text-left">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p>Rs {item.price} × {item.quantity}</p>
                  <p className="font-semibold">Total: Rs {item.price * item.quantity}</p>
                </div>

                <div className="flex gap-2 mt-3 sm:mt-0">
                  <button onClick={() => decreaseQty(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">−</button>
                  <button onClick={() => increaseQty(item.id)} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
                  <button onClick={() => removeItem(item.id)} className="px-3 py-1 border border-yellow-400 hover:bg-yellow-400 hover:text-black rounded">Remove</button>
                </div>
              </div>
            ))}

            <div className="flex justify-end font-bold text-xl">Grand Total: Rs {total}</div>

            <div className="bg-black text-yellow-400 p-6 rounded shadow mt-6">
              <h3 className="text-xl font-bold mb-4">Payment Method</h3>
              <div className="flex flex-col gap-3">
                {["Cash on Delivery", "Card Payment"].map(method => (
                  <label key={method} className="flex gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={e => setPaymentMethod(e.target.value)}
                    />
                    {method}
                  </label>
                ))}
              </div>
              <button
                onClick={placeOrder}
                className="mt-4 w-full bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-300"
              >
                Place Order
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10 mb-10">
          <a href="#" className="text-black text-lg font-bold hover:underline">
            MANAGE CONSENT PREFERENCE
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrderNowPage;
