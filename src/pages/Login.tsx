import React, { useState } from "react";
import { login } from "../services/user.service";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await login({ email, password });
      // console.log("Response dari API:", data);

      localStorage.setItem("token", data.data.token);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-120 p-6 rounded-lg shadow-sm bg-white hover:-translate-y-1 duration-300">
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
                  className="w-full bg-blue-600 text-white py-2 rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
