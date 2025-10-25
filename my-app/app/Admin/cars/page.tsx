"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import CarsModal from "@/app/component/AdmincarsModal/CarsModal";

const CarPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [cars, setCars] = useState<any[]>([]);
  console.log(cars);

  const handleAddCar = (carData: any) => {
    setCars([...cars, carData]);
  };
  return (
    <div className="h-screen bg-gray-50 p-9 pt-19">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Car Inventory
      </h1>

      <div
        onClick={() => setShowModal(true)}
        className="w-62 h-42 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-indigo-500 hover:text-indigo-500 transition"
      >
        <Plus size={60} />
      </div>
      <div className="mt-8  flex  gap-6">
        {cars.map((car, i) => (
          <div
            key={i}
            className="bg-white rounded-xl w-64 shadow hover:shadow-md transition overflow-hidden"
          >
            {/* Image Scroll Section */}
            {car.images && car.images.length > 0 ? (
              <div className="w-full h-48 overflow-x-auto flex gap-2 scroll-smooth scrollbar-hide">
                {car.images.map((file: File, idx: number) => (
                  <img
                    key={idx}
                    src={URL.createObjectURL(file)}
                    alt={`${car.carName}-${idx}`}
                    className="w-64 h-48 object-cover rounded-md flex-shrink-0"
                  />
                ))}
              </div>
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}

            {/* Car Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                {car.carName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">{car.model}</p>
              <p className="text-sm text-gray-800 font-medium">
                ${car.price}/day
              </p>

              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {car.features
                    .slice(0, 3)
                    .map((feature: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  {car.features.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{car.features.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <CarsModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleAddCar}
        />
      )}
    </div>
  );
};

export default CarPage;
