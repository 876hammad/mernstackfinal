import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://static.vecteezy.com/system/resources/previews/029/783/765/non_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">Discover Beauty & Elegance
        {/* <br className="hidden lg:inline-block"/> */}
      </h1>
      <p className="mb-8 leading-relaxed">• Stunning Jewelry Pieces: Explore our curated collection of elegant necklaces, bracelets, earrings, and rings crafted with precision and style.<br/>
• Radiant Cosmetics: Unleash your inner beauty with our range of high-quality makeup products, from vibrant lipsticks to versatile eyeshadow palettes.<br/>
• Nourishing Skincare: Pamper your skin with our luxurious skincare products designed to hydrate, rejuvenate, and restore your natural glow.<br/>
• Expert Advice: Get personalized recommendations and skincare tips from our beauty experts to enhance your daily routine.</p>
<div className="flex justify-center">
  <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore More</button>
</div>

    </div>
  </div>
</section>

    </>
  )
}

export default Hero