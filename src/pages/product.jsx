import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

const Product = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [product, setProduct] = useState(null)

  let getProducts = async () => {
    try {
      let data = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(data?.data)
    } catch (error) {
      console.error(error)
      setTimeout(() => {
        navigate('/products')
      }, 2000)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-r from-slate-800 via-gray-900 to-slate-900 
                    font-[Poppins] px-4">

      {(!product) ? (
        <h2 className="text-center text-black text-2xl font-semibold">
          No such product
        </h2>
      ) : (
        <div className="flex flex-col items-center 
                        p-6 rounded-2xl shadow-2xl 
                        bg-neutral-200 backdrop-blur-md border border-white/20
                        text-black max-w-md w-full">

          {/* Thumbnail */}
          <img
            className="rounded-xl w-72 h-64 object-cover shadow-lg mb-4"
            src={product?.thumbnail}
            alt={product?.title}
          />

          {/* Product Info */}
          <div className="flex flex-col items-center space-y-3 text-center">

            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              {product?.title}
            </span>

            <span className="text-green-400 font-medium tracking-wide">
              Category: {product?.category}
            </span>

            <span className="text-black text-sm leading-relaxed px-4">
              {product?.description}
            </span>

            <span className="text-yellow-300 font-semibold text-lg">
              Price: ${product?.price}
            </span>

            <span className="text-blue-400 font-medium">
              ⭐ Rating: {product?.rating}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product
