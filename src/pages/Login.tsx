import React, { useEffect, useState } from "react";
import { login } from "../services/user.service";
import { useNavigate } from "react-router-dom";
import  Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });

      localStorage.setItem("token", data.data.token);

      navigate("/");

      Swal.fire({
        title: "Berhasil Login",
        text: "Login berhasil",
        icon: "success"
      })

    } catch (error) {
      setError("Pastikan mengisi email dan password dengan benar!")
    }
  };

  useEffect(() => {
    if (error) {
        const timer = setTimeout(() => {
            setError("");
        }, 3000);

        return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-120 p-6 rounded-lg shadow-sm bg-white">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#808080] rounded px-3 py-2 focus:outline-0"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-[#808080] rounded px-3 py-2 focus:outline-0"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:ring hover:ring-inset hover:ring-blue-600 hover:text-blue-600 hover:bg-transparent transition-all duration-150 cursor-pointer"
                >
                  Login
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${error ? "max-h-20 opacity-100 translate-y-0 mt-3" : "max-h-0 opacity-0 -translate-y-2"}`}>
                    <div className="bg-red-50 border border-red-200 text-red-500 text-sm rounded-lg px-4 py-3">
                        {error}
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
