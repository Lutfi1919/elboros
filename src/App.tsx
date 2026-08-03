import "./App.css";
import ParentComponent from "./components/ParentComponent";
import ChildrenProps from "./components/ChildrenProps";
import ListItem from "./components/ListItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { User } from "./types/User";
import { showUser } from "./services/user.service";

function App() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  const [user, setUser] = useState<User>();

  async function getUser() {
    try {
      const result = await showUser();
      
      setUser(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <button
        className="m-2 px-5 py-2 rounded-lg text-white bg-red-500 cursor-pointer"
        onClick={logout}
      >
        Logout
      </button>
      <div className="min-h-screen flex flex-col items-center justify-center">
        {user ? (
          <p className="mb-4">Halo, {user.name}</p>
        ) : (
          <p className="mb-4">Memuat data user...</p>
        )}
        <ParentComponent />
        <hr />
        <ChildrenProps>lorem</ChildrenProps>
        <ListItem />
      </div>
    </>
  );
}

export default App;
