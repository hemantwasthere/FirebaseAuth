import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
                <Link href={'/signup'}><button className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button></Link>
                <Link href={'/login'}><button className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign In</button></Link>
        
    </div>
  )
}

export default HomePage