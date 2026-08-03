import './App.css'
// import { useState, useEffect } from 'react'
import ParentComponent from './components/ParentComponent';
import ChildrenProps from './components/ChildrenProps';
import ListItem from './components/ListItem';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const logout = (event: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.removeItem("token")

    console.log(event.target);

    navigate("/login")
  }

  return (
    <>
      <button className='m-2 p-2 rounded-2xl bg-red-500 cursor-pointer' onClick={logout}>
        Logout
      </button>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <ParentComponent />
        <hr />
        <ChildrenProps>lorem</ChildrenProps>
        <ListItem />
      </div>
    </>
  )
}

export default App
