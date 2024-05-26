import React from 'react'

const Ecommerce = () => {


   const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
   <>
   
  
<section  className="bg-gray-900 text-gray-400 body-font">
<div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://wwd.com/wp-content/uploads/2023/09/MONAT-SKINCARE-MAKEUP-LINEUP.jpg?w=1000&h=563&crop=1" alt="Product 1" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 1</h3>
                    <p className="text-gray-600">$99.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://png.pngtree.com/background/20230425/original/pngtree-products-of-personal-care-picture-image_2475177.jpg" alt="Product 2" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 2</h3>
                    <p className="text-gray-600">$79.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://png.pngtree.com/background/20230612/original/pngtree-various-makeup-products-lie-on-a-table-on-dark-picture-image_3185889.jpg" alt="Product 3" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 3</h3>
                    <p className="text-gray-600">$129.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?cs=srgb&dl=pexels-pixabay-265906.jpg&fm=jpg" alt="Product 4" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Product 4</h3>
                    <p className="text-gray-600">$149.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</section>
    



   
   </>
  )
}

export default Ecommerce