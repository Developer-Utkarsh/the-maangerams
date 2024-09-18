import React from 'react';
import { Link } from 'react-router-dom';

// This is product showcase product card

const ProductCard = ({ product }) => {
  return (
    <>
      <style>
        {`
          .product-card {
            width: 280px;
            margin-right: 16px;
          }
        `}
      </style>
      <Link to={`/product/${product.id}`} state={{ product }} className="product-card">
        <div className="flex hover:shadow-md  hover:border-zinc-400 transition duration-300  items-center bg-white border border-zinc-300 p-4 rounded-lg shadow-sm flex-col">
          <div className='w-full flex'>
            <img src={product.imageSrc} alt={product.name} className="w-28 h-28 object-center mr-4 rounded-md" />
            <div className="flex-grow">
              <h3 className="text-lg font-normal text-gray-700 mb-1">{product.name}</h3>
              <div className="flex items-center">
                <p className="text-green-600 font-bold text-xl mr-2">₹{product.price.toFixed(2)}</p>
                {product.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">₹{product.oldPrice.toFixed(2)}</p>
                )}
              </div>
              <button 
                className='px-4 rounded-md bg-green-500 mt-2 text-white text-center font-semibold hover:bg-white hover:border hover:border-green-500 hover:text-black transition duration-300 py-1 text-base'
                onClick={(e) => {
                  e.preventDefault();
                  window.open(product.buyNowLink, '_blank');
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
