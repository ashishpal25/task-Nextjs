import React from "react";

const service = ({ value }) => {
  
  const { homeServicesTitle, homeServicesSubtitle } = value;
  return (
    <div className="mt-28">
      <div className="service-section">
        <h3 className="px-12 text-xl font-bold mb-2">{homeServicesSubtitle}</h3>
        <h2 className="px-12 text-3xl font-bold mb-4">{homeServicesTitle}</h2>

        <div className="service-2 flex gap-8">
          <div className="p-2 border-b">
            <div className="main-card bg-green-200">
              <div className="img-card"></div>
              <div className="con-title">
                <h1 className="text-xl font-bold pt-4">wall paper</h1>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur </p>
                <button className="card-btn">read more</button>
              </div>
            </div>
          </div>
          <div className="p-2 border-b">
            <div className="main-card bg-blue-500">
              <div className="img-card "></div>
              <div className="con-title">
                <h1 className="text-xl font-bold pt-4">wall paper</h1>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur </p>
                <button className="card-btn">read more</button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="main-card bg-pink-200">
              <div className="img-card"></div>
              <div className="con-title">
                <h1 className="text-xl font-bold pt-4">wall paper</h1>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur </p>
                <button className="card-btn">read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
