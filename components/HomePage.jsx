import React from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const { logOut, user } = UserAuth()
  const LogOut = () => {
    toast.success('Logged Out', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      darkmode: true,
    });
    return logOut()
  }
  return (
    <div>
      <Link href={'/signup'}><button className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button></Link>
      <Link href={'/login'}><button className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign In</button></Link>
      {user?.email && <button onClick={LogOut} className=' bg-cyan-600 py-3 my-6 rounded font-bold '>Logout</button>}
    </div>
  )
}

export default HomePage