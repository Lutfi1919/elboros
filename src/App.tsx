import "./App.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import type { User } from "./types/User";
import { showUser } from "./services/user.service";
import type { Transaction } from "./types/Transaction";
import { create, show } from "./services/transaction.service";
import Swal from "sweetalert2";
import ListTransactionCard from "./components/ListTransactionCard";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [userTr, setUserTr] = useState<Transaction[]>([]);
  const [form, setForm] = useState<Partial<Transaction>>({
    judul: "",
    catatan: "",
    nominal: 0,
  });

  // jujur gua ga ngerti function ini🤣
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(
      (prev) =>
        ({
          ...prev,
          [name]: name === "nominal" ? Number(value) : value,
        }) as Partial<Transaction>,
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await create(form as Transaction);

      Swal.fire({
        title: "Berhasil",
        text: "Transaksi berhasil dibuat",
        icon: "success",
      });

      setForm({ judul: "", catatan: "", nominal: 0 });

      await getUserTransactions();
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Gagal membuat transaksi", "error");
    }
  }

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");

    Swal.fire({
      title: "Logout berhasil!",
      text: "Login kembali kapan saja",
      icon: "warning",
    });
  };

  async function getUser() {
    try {
      const result = await showUser();

      setUser(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getUserTransactions() {
    try {
      const result = await show();

      const todayTransactions = result.data.filter((transaction: Transaction) => {
        const today = new Date();
        const createdAt = new Date(transaction.createdAt ?? "");

        return createdAt.toDateString() === today.toDateString();
      });

      setUserTr(todayTransactions);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
    getUserTransactions();
  }, []);

  return (
    <>
      <div className="px-10 bg-[#f6f6f6] min-h-screen">
        <button
          className="m-2 px-5 py-2 rounded-lg text-white bg-red-500 cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>

        <div className="grid grid-cols-2 gap-4">
          <ListTransactionCard data={userTr} />
          <form
            onSubmit={handleSubmit}
            className="border shadow-xl border-gray-200 rounded-xl p-5"
          >
            <div className="mb-3">
              <label htmlFor="judul" className="block">
                Judul
              </label>
              <input
                name="judul"
                type="text"
                id="judul"
                value={form.judul ?? ""}
                onChange={handleChange}
                className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="catatan" className="block">
                Catatan
              </label>
              <input
                name="catatan"
                type="text"
                id="catatan"
                value={form.catatan ?? ""}
                onChange={handleChange}
                className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
              />
            </div>
            <div className="">
              <label htmlFor="nominal" className="block">
                Nominal
              </label>
              <input
                name="nominal"
                type="number"
                id="nominal"
                value={form.nominal}
                onChange={handleChange}
                className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="mt-3 px-5 py-2 rounded-lg text-white bg-blue-500 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
