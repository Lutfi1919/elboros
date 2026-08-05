import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "./types/User";
import { showUser } from "./services/user.service";
import type { Transaction } from "./types/Transaction";
import { show } from "./services/transaction.service";
import Swal from "sweetalert2";
import ListTransactionCard from "./components/ListTransactionCard";

function App() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");

    Swal.fire({
      title: "Logout berhasil!",
      text: "Login kembali kapan saja",
      icon: "warning",
    });
  };

  const [user, setUser] = useState<User>();
  const [userTr, setUserTr] = useState<Transaction[]>([]);

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

      setUserTr(result.data);

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
      <div className="px-10">
        <button
          className="m-2 px-5 py-2 rounded-lg text-white bg-red-500 cursor-pointer"
          onClick={logout}
        >
          Logout
        </button>
        <ListTransactionCard data={userTr} />


        <div className="">
          <form>
            <div className="mb-3">
              <label htmlFor="judul" className="block">Judul</label>
              <input type="text" id="judul" className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300" />
            </div>
            <div className="mb-3">
              <label htmlFor="catatan" className="block">Catatan</label>
              <input type="text" id="catatan" className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300" />
            </div>
            <div className="">
              <label htmlFor="nominal" className="block">Nominal</label>
              <input type="number" id="nominal" className="w-140 rounded px-2 py-1 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300" />
            </div>

            <button type="submit" className="mt-3 px-5 py-2 rounded-lg text-white bg-blue-500 cursor-pointer">Submit</button>
          </form>
        </div>


        <div className="min-h-screen flex flex-col items-center justify-center">
          {user ? <p className="mb-4">Halo, {user.name}</p> : <p>Loading...</p>}
          {user ? <p className="mb-4">Email: {user.email}</p> : <p>Loading...</p>}
        </div>

      </div>
    </>
  );
}

export default App;
