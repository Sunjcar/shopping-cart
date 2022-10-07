import React from 'react'

function Shop({ productItems, handleAddProduct }) {

  return (
    <div className='flex justify-center items-center 
    gap-8 p-8 flex-wrap'>
      {productItems.map((productItem) => (
        <div key={productItem.id} className='flex flex-col gap-4 
        justify-center items-center'>
          <img
            className='flex w-80 h-80 rounded-lg'
            src={productItem.image}
            alt={productItem.name}
          />
          <p>{productItem.name}</p>
          <p>${productItem.price}</p>
          <button onClick={() => handleAddProduct(productItem)} 
          className='bg-[#1da1f2] w-64 rounded-xl text-white
          hover:-translate-y-1 hover:scale-110'
          > Add To Cart </button>
        </div>
      ))}
    </div>
  )
}

export default Shop


