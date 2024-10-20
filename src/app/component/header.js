import React from 'react'

const header = () => {
  return (
    <header className="main text-white">
      <div className=" mx-auto flex main  items-center py-6">
        <h3 className="text-2xl font-bold">ASTRAL</h3>
        <nav className='flex items-center space-x-6 '>
          <ul className="flex space-x-6 ">
            <li className="hover:text-yellow-500 cursor-pointer">About</li>
            <li className="hover:text-yellow-500 cursor-pointer">Category</li>
            <li className="hover:text-yellow-500 cursor-pointer">Services</li>
            <li className="hover:text-yellow-500 cursor-pointer">Colours</li>
            <li className="hover:text-yellow-500 cursor-pointer">Downloads</li>
            <li className="hover:text-yellow-500 cursor-pointer">Become A Dealer</li>
            <li className="hover:text-yellow-500 cursor-pointer">Blogs</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
          <button className='button'>Enquire Now</button>
          
        </nav>
      </div>
    </header>
  )
}

export default header
