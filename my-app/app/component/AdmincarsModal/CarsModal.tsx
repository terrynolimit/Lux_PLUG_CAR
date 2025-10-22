"use client";
import React, { useState } from "react";
import { X, Plus } from "lucide-react";

interface CarsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (carData: any) => void;
  initialData?: any; // optional, for editing existing car
}

const CarsModal: React.FC<CarsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) => {
  const [carName, setCarName] = useState(initialData?.carName || "");
  const [model, setModel] = useState(initialData?.model || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [notes, setNotes] = useState(initialData?.notes || "");
  const [features, setFeatures] = useState<string[]>(
    initialData?.features || []
  );
  const [featureInput, setFeatureInput] = useState("");
  const [images, setImages] = useState<File[]>(initialData?.images || []);

  if (!isOpen) return null;

  const handleFeatureAdd = () => {
    if (featureInput.trim() && !features.includes(featureInput)) {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const handleFeatureRemove = (feature: string) => {
    setFeatures(features.filter((f) => f !== feature));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ carName, model, price, notes, features, images });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {initialData ? "Edit Car" : "Add New Car"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Car Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Name
            </label>
            <input
              value={carName}
              onChange={(e) => setCarName(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g. Toyota Camry"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g. 2022"
              required
            />
          </div>

          {/* Price per Day */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price per Day
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="e.g. 120"
              required
            />
          </div>

          {/* Features */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Features
            </label>
            <div className="flex gap-2 mb-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), handleFeatureAdd())
                }
                className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="e.g. Sunroof"
              />
              <button
                type="button"
                onClick={handleFeatureAdd}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus size={18} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  {feature}
                  <button
                    type="button"
                    onClick={() => handleFeatureRemove(feature)}
                    className="text-indigo-500 hover:text-indigo-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              rows={3}
              placeholder="Extra details about the car"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Car Images
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full border rounded-lg p-2"
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {images.map((file, i) => (
                <div
                  key={i}
                  className="w-16 h-16 border rounded-lg overflow-hidden flex items-center justify-center text-gray-500 text-xs"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              {initialData ? "Save Changes" : "Add Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarsModal;
