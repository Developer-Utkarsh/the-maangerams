import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    window.open(product.buyNowLink, '_blank');
  };

  return (
    <div className="w-64 h-auto p-4 bg-white m-2 rounded-lg shadow-md flex flex-col justify-between cursor-pointer transition-transform duration-300 hover:scale-105" id='offers' onClick={handleViewDetails}>
      <div>
        <div className="flex gap-2 mb-2">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">NEW</span>
          <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs">SALE</span>
        </div>
        <img src={product.imageSrc} alt={product.name} className="w-full h-44 object-center mb-4 rounded-md" />
        <div className="text-center">
          <div className="text-xs text-gray-600 uppercase tracking-wide mb-1">ORGANIC FRUITS</div>
          <div className="text-lg font-bold text-gray-800 mb-2 capitalize">fresh {product.name}</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center gap-2 mb-3">
          <span className="text-lg font-bold text-green-500">₹{product.price.toFixed(2)}</span>
          <span className="text-sm line-through text-gray-400">₹{product.oldPrice.toFixed(2)}</span>
        </div>
        <button 
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-green-600"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

const Comp4 = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const cardsRef = useRef(null);

  const onSaleProducts = products.filter(product => product.onSale);
  const allProducts = [...onSaleProducts, ...onSaleProducts, ...onSaleProducts];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        } else {
          setStartAnimation(false);
        }
      },
      { threshold: 0.5 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <div className="mt-12">
      <style>
        {`
          @keyframes scrolling {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * ${products.length}));
            }
          }
          .scrolling-container {
            display: flex;
            width: fit-content;
          }
          .scrolling-container > div {
            flex: 0 0 auto;
          }
          @media (max-width: 768px) {
            @keyframes scrolling-mobile {
              0%, 25% {
                transform: translateX(0);
              }
              33%, 58% {
                transform: translateX(-100%);
              }
              66%, 91% {
                transform: translateX(-200%);
              }
              100% {
                transform: translateX(-300%);
              }
            }
            .scrolling-container {
              animation: scrolling-mobile 12s linear infinite !important;
            }
          }
        `}
      </style>

      <div ref={cardsRef} className="overflow-hidden relative mx-auto" >
        <div 
          className="scrolling-container py-4 gap-0 md:gap-10"
          style={{
            animation: startAnimation ? `scrolling ${products.length * 12}s linear infinite` : 'none',
          }}
        >
          {allProducts.map((product, index) => (
            <div key={index} className="w-full md:w-auto">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

    
     
    </div>
  );
};

export default Comp4;
