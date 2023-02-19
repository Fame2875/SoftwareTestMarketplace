import React from 'react'
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { BellAlertIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'


function Navbar() {

return (
  <>
    <nav class="w-screen   bgmain py-2 px-5 ">
      <div className="flex flex-row justify-between items-center mb-2">
        <div>LOGO</div>

        <form className="flex items-center justify-center flex-1 ">
          <div className="relative w-1/3 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              // onKeyPress={(event) => {
              //   if (!/^[0-9]*[.,]?[0-9]*$/.test(event.key)) {
              //     event.preventDefault()
              //   }
              // }}
              onChange={(e) => {
                //   setId(e.target.value)
              }}
              className="bg-white   outline-none  text-gray-900 text-sm rounded-lg  w-full pl-10 p-4  "
              placeholder="Search"
              required
            />
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              // loadMap(id)
            }}
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg  hover:opacity-50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="flex flex-row space-x-5">
           <Link to={`/cart`}>
              <ShoppingCartIcon class="Icon" />
           </Link>
          <BellAlertIcon class="Icon" />
          <div className="flex flex-row items-center space-x-2">
            <span className="text3xl font-semibold text-white">User</span>
            <UserCircleIcon class="Icon" />
          </div>
        </div>
      </div>
    </nav>
  </>
)
}

export default Navbar