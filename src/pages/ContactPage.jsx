import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="relative">
      <div className="bg-gray-100 py-12 md:py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">The Maangerams Shop</h1>
            <div className="text-sm flex text-gray-600 mb-8">
              <span>HOME</span>
              <span className="mx-2">/</span>
              <span>CONTACT</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 right-0">
        <img 
          src="/images/right_mint_leave.png" 
          alt="Leaf Decoration" 
          className="w-24 md:w-40 h-auto"
        />
      </div>
      <div className="hidden md:block absolute bottom-0 right-12 md:right-48">
        <img 
          src="/images/tamatar.png" 
          alt="Leaf Decoration" 
          className="w-24 md:w-40 h-auto"
        />
      </div>
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Map placeholder */}
          <div className="w-full md:w-2/3">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3499.367640909048!2d77.25970077550359!3d28.7085570756233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQyJzMwLjgiTiA3N8KwMTUnNDQuMiJF!5e0!3m2!1sen!2sin!4v1726490333603!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address details */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">The Maangerams Address</h2>
            <p className="text-sm text-gray-600 mb-6">ORGANIC STORE</p>

            <div className="space-y-4 text-gray-700">
              <p className="font-semibold text-green-600">The Maangerams STORE</p>
              <p>Karawal Nagar Main Rd, Block E, Tukhmirpur, Delhi, 110094</p>

              <div>
                <p><span className="font-semibold">Call:</span> +91 8826909487,+91 8868051759 <br />Customer Care:  +91 9643200339 </p>
                <p><span className="font-semibold">Email:</span>the.maangerams@gmail.com</p>
                
                <p><span className="font-semibold">Instagram:</span> @themaangerams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t-2 border-zinc-300 border-dotted py-8 md:py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-thin text-center mb-2">Contact <span className="text-[#7FBA00] font-bold">The Maangerams</span></h2>
          <p className="text-center text-gray-500 mb-8 text-xs">ORGANIC STORE</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7FBA00]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7FBA00]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7FBA00]"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7FBA00]"
              required
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#7FBA00] text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-green-500 transition duration-300"
              >
                SEND EMAIL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage