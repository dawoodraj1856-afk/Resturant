"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const authCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="));
    setIsAuth(!authCookie);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);

    document.cookie = "auth=true; path=/";
    alert("Sign Up successfully!");
    router.push("/profile");
  };

  const handleLogout = () => {
    document.cookie = "auth=; Max-Age=0; path=/";
    localStorage.clear();
    alert("Logged out successfully!");
    setIsAuth(false);
    router.push("/signup");
  };

  return (
    <>
      <div className="bg-yellow-400 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex flex-col items-center px-4 sm:px-6 md:px-10 mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center">
            NEWSLETTER
          </h1>

          {isAuth ? (
            <div className="flex flex-col items-center mt-8 gap-4">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center">
                Hello, {localStorage.getItem("firstName")}!
              </p>
              <button
                onClick={handleLogout}
                className="px-6 py-2 border-2 border-black font-bold hover:bg-black hover:text-yellow-400 transition-colors"
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 p-6 rounded-lg bg-yellow-400 max-w-md w-full mt-8 
          "
            >
              <label className="font-semibold text-sm sm:text-base md:text-lg">
                FIRST NAME
              </label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                required
                className="border border-black p-2 rounded w-full text-sm sm:text-base md:text-lg"
              />

              <label className="font-semibold text-sm sm:text-base md:text-lg">
                LAST NAME
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                required
                className="border border-black p-2 rounded w-full text-sm sm:text-base md:text-lg"
              />

              <label className="font-semibold text-sm sm:text-base md:text-lg">
                EMAIL
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="border border-black p-2 rounded w-full text-sm sm:text-base md:text-lg"
              />

              <button
                type="submit"
                className="mt-4 py-2 border-2 border-black font-bold w-full hover:bg-black hover:text-yellow-400 transition-colors"
              >
                SEND
              </button>
            </form>
          )}

          <div className="flex justify-center mt-8">
            <a
              href="#"
              className="text-black text-lg sm:text-xl font-bold hover:underline"
            >
              MANAGE CONSENT PREFERENCE
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
