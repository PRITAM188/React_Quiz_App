import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='bg-gray-200 px-5 items-center h-20 justify-between flex w-full'>
            <div>
                <h1 className='text-3xl font-extrabold'>Quiz App</h1>
            </div>
            <div className='flex space-x-5 text-lg'>
                <h1 className='text-blue-500 hover:text-blue-700 hover:underline'><Link to="/">Quiz Page</Link></h1>
                <h1 className='text-blue-500 hover:text-blue-700 hover:underline'><Link to="/admin">Admin Page</Link></h1>
            </div>
        </div>
    )
}

export default NavBar