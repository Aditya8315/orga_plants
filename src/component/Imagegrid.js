import React from 'react';
import img0 from "../Rectangle.png";
import img1 from "../Rectangle (1).png";
import img2 from "../Rectangle (2).png";
import img3 from "../Rectangle (3).png";
import img4 from "../Rectangle (4).png";
import img5 from "../Rectangle (5).png";
import img6 from "../Rectangle (6).png";
import img7 from "../Rectangle (7).png";

const ImageGrid = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Reliable options for Customers</h2>
      <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div className="group">
          <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <img src={img0} alt="Product 1" className="object-center object-cover group-hover:opacity-75" />
          </div>
          <div className="mt-2">
            <p className="text-xl font-medium text-gray-900">Order Placed</p>
          </div>
        </div>
        <div className="group">
          <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <img src={img1} alt="Product 2" className="object-center object-cover group-hover:opacity-75" />
          </div>
          <div className="mt-2">
            <p className="text-xl font-medium text-gray-900">Picked At Nearest Trusted Super Store</p>
          </div>
        </div>
        <div className="group">
          <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <img src={img2} alt="Product 3" className="object-center object-cover group-hover:opacity-75" />
          </div>
          <div className="mt-2">
            <p className="text-xl font-medium text-gray-900">Delivered Free from preferred Stores</p>
          </div>
        </div>
        <div className="group">
          <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
            <img src={img3} alt="Product 4" className="object-center object-cover group-hover:opacity-75" />
          </div>
          <div className="mt-2">
            <p className="text-xl font-medium text-gray-900">Easy Replacements!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">Easy Onboarding For Stores</h2>
    <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
      <div className="group">
        <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
          <img src={img4} alt="Product 1" className="object-center object-cover group-hover:opacity-75" />
        </div>
        <div className="mt-2">
          <p className="text-xl font-medium text-gray-900">List Products</p>
        </div>
      </div>
      <div className="group">
        <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
          <img src={img5} alt="Product 2" className="object-center object-cover group-hover:opacity-75" />
        </div>
        <div className="mt-2">
          <p className="text-xl font-medium text-gray-900">Easily Manage orders</p>
        </div>
      </div>
      <div className="group">
        <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
          <img src={img6} alt="Product 3" className="object-center object-cover group-hover:opacity-75" />
        </div>
        <div className="mt-2">
          <p className="text-xl font-medium text-gray-900">Manage Inventory</p>
        </div>
      </div>
      <div className="group">
        <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
          <img src={img7} alt="Product 4" className="object-center object-cover group-hover:opacity-75" />
        </div>
        <div className="mt-2">
          <p className="text-xl font-medium text-gray-900">Easily Manage your orders</p>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default ImageGrid;