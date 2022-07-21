import React from 'react'
import { UserAuth } from '../context/AuthContext'
import Link from 'next/link'

const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth()

    if (!user) {
        return <div className='flex justify-center items-center font-bold flex-col'>
            <h1 className='text-6xl my-5 font-mono'>Please Log in </h1>
            <Link href={'/login'}><div className="relative inline-block text-lg group cursor-pointer ">
                <span className="relative z-10 block px-8 py-5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-cyan-200"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#dc6c6c] group-hover:-rotate-180 ease"></span>
                    <span className="relative text">Log In</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </div>
            </Link>
        </div>
    } else {
        return children
    }
}

export default ProtectedRoute