import { useState } from 'react';

const Comp2 = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const products = [
    { id: 1, title: 'organic juices', items: '26 items', image: '/images/juce.png' },
    { id: 2, title: 'dried juices', items: '31 items', image: '/images/cup.png' },
    { id: 3, title: 'organic tea', items: '17 items', image: '/images/tea.png' },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Left section: Text */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <p className="uppercase text-sm tracking-wider text-gray-500 mb-2">Fresh from our farm</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight mb-4">
              <span className="font-normal">115+ </span>
              <span className="font-bold">organic juices</span>
              <span className="font-normal"> and </span>
              <br className="hidden sm:inline" /> organic tea
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
            we are proud to offer an exceptional selection of over 220+ varieties of fresh fruits and vegetables, along with 115+ organic juices and organic teas. We believe in the power of natural, wholesome food and beverages to promote a healthy and fulfilling lifestyle.
            </p>
          </div>

          {/* Right section: Product cards */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-center items-center gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`w-full sm:w-[219px] h-[281px] p-2 flex flex-col justify-center items-center text-center border rounded-lg transition-all duration-300 ${
                  hoverIndex === index
                    ? 'border-green-500 shadow-lg'
                    : 'border-gray-200'
                }`}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img src={product.image} alt={product.title} className="w-[140px] h-[120px] mb-6 object-contain" />
                <h3 className="text-base font-bold text-gray-800 mb-1">
                  {product.title.split(' ')[0]}{' '}
                  <span className="font-bold">{product.title.split(' ')[1]}</span>
                </h3>
                <p className="text-sm text-green-600">{product.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp2;
