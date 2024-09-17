import { useState, useEffect } from 'react';

const Comp3 = () => {
    const calculateTimeLeft = () => {
        let difference = +new Date("2024-12-31") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="bg-[#f9f9f9] py-10 px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center mb-8">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                        <h5 className="text-sm tracking-wider text-gray-500 uppercase mb-2">The Maangerams DEAL OF THE DAY</h5>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-4">
                            organic goods <span className="text-[#4e8734] font-semibold">50% off</span>
                        </h1>
                        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 md:text-left">
                        Don't miss out on Maangeram's Deal of the Day, where you can enjoy unbeatable discounts on our freshest fruits, vegetables, and organic beverages. Every day, we hand-pick select items from our wide range of over 220+ varieties of produce and 115+ organic juices and teas, offering you great savings on high-quality, nutritious products.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src="/images/deal.png" alt="Organic Tomatoes" className="w-40 sm:w-48 lg:w-56" />
                    </div>
                </div>

                {/* Separator Line */}
                <div className="relative h-0.5 bg-white my-8">
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-36 h-0.5 bg-[#4e8734]"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
                        <div key={unit} className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#00C4CC] bg-[#f9f9f9] rounded-lg flex flex-col justify-center items-center">
                            <span className="text-2xl sm:text-3xl font-bold text-[#4e8734]">
                                {timeLeft[unit]}
                            </span>
                            <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-600">
                                {unit}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comp3;
