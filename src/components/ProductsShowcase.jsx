import React, { useMemo } from 'react';
import ProductCard from '/src/components/ProductCard';
import { products } from '../data/products';

const ProductsShowcase = () => {
  const showcaseProducts = useMemo(() => {
    const newArrivals = products.filter(p => p.isNew && p.toShowcase).slice(0, 3);
    const bestSellers = products.filter(p => p.onSale && p.toShowcase).slice(0, 3);
    
    // If we don't have enough showcase products, fill with other new/on sale products
    if (newArrivals.length < 3) {
      const additionalNew = products.filter(p => p.isNew && !p.toShowcase).slice(0, 3 - newArrivals.length);
      newArrivals.push(...additionalNew);
    }
    if (bestSellers.length < 3) {
      const additionalBest = products.filter(p => p.onSale && !p.toShowcase).slice(0, 3 - bestSellers.length);
      bestSellers.push(...additionalBest);
    }

    // For random products, exclude those already shown and prioritize showcase
    const shownProductIds = [...newArrivals, ...bestSellers].map(p => p.id);
    const remainingShowcase = products.filter(p => p.toShowcase && !shownProductIds.includes(p.id));
    const remainingOthers = products.filter(p => !p.toShowcase && !shownProductIds.includes(p.id));
    const randomProducts = [...remainingShowcase, ...remainingOthers].slice(0, 3);

    return { newArrivals, bestSellers, randomProducts };
  }, []);

  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 mb-10 " id='popular-products'>
      <div className="flex flex-col items-center mb-8">
        <img src="/images/feature.png" alt="Grapefruit" className="h-16 sm:h-20 mb-2" />
        <div className="text-sm text-green-600 text-center">
          <span className="text-green-500">★</span> a taste of <strong>real food</strong> <span className="text-green-500">★</span>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">NEW FROM THE FARM</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">new arrivals</span></h3>
            <div className="space-y-4">
              {showcaseProducts.newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">BEST SELLER</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">popular</span></h3>
            <div className="space-y-4">
              {showcaseProducts.bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="mb-8 sm:mb-0">
            <h2 className="text-xs tracking-[0.25rem] text-zinc-600 mb-1">CUSTOMER NEEDS</h2>
            <h3 className="text-2xl font-light mb-6 text-zinc-700">organic <span className="font-bold">random</span></h3>
            <div className="space-y-4">
              {showcaseProducts.randomProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
