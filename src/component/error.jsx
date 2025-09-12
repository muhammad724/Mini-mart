import React from 'react'
import dark from '../assets/dark.jpg'
import { Link } from 'react-router'


const Error = () => {
  return (
    <>
      <main className="relative min-h-screen flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
        
        <img 
          src={dark}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <div className="text-center">
          <p className="text-base font-semibold  text-indigo-200">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-300 sm:text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
              to={'/LandingPage'}
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Error
