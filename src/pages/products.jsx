import React, { useEffect, useState } from 'react'
import Navbar02 from '../component/Navbar02.jsx'
import axios from 'axios'
import { Link } from 'react-router'

const Products = () => {
  
  const [products, setProducts] = useState([])

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className='class="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-900"
bg-slate-800 text-white '>
      <Navbar02 />
      <div className="text-4xl text-center py-6 font-extrabold text-white">
        Products
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-9 py-8">
        {products.length > 0 ? (
          products.map((item) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div
                className="rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full 
          bg-gradient-to-r from-emerald-500 to-teal-600 text-white





"

              >
                <div className="h-48 w-full flex items-center justify-center bg-none rounded-xl overflow-hidden">
                  <img
                    src={item?.thumbnail}
                    alt={item?.title}
                    className="h-full object-contain"
                  />
                </div>
                <span className="text-lg mt-3 font-semibold text-white text-center">
                  {item?.title}
                </span>
                <span className="text-md mt-1 text-white">
                  ${item?.price}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <h2 className="text-center text-xl w-full">No products</h2>
        )}
      </div>
    </div>
  )
}

export default Products
