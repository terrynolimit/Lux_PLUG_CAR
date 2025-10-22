"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
// import { autocomplete } from "@/libs/google";
// import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";

export default function RentalSearchPage() {
  const [pickupInput, setPickupInput] = useState("");
  const [dropoffInput, setDropoffInput] = useState("");

  const [pickupPredictions, setPickupPredictions] = useState<
    PlaceAutocompleteResult[]
  >([]);
  const [dropoffPredictions, setDropoffPredictions] = useState<
    PlaceAutocompleteResult[]
  >([]);

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      if (!pickupInput) {
        setPickupPredictions([]);
        return;
      }
      const res = await fetch(`/api/autocomplete?input=${pickupInput}`);
      const data = await res.json();
      setPickupPredictions(data.predictions || []);
    };
    fetchPredictions();
  }, [pickupInput]);

  useEffect(() => {
    const fetchPredictions = async () => {
      if (!dropoffInput) {
        setDropoffPredictions([]);
        return;
      }
      const res = await fetch(`/api/autocomplete?input=${dropoffInput}`);
      const data = await res.json();
      setDropoffPredictions(data.predictions || []);
    };
    fetchPredictions();
  }, [dropoffInput]);

  const handleSearch = () => {
    console.log("Search initiated with:", {
      pickup: { location: pickupInput, date: pickupDate, time: pickupTime },
      dropoff: { location: dropoffInput, date: dropoffDate, time: dropoffTime },
    });
  };

  const handlePickupSelect = (place: string) => {
    setPickupInput(place);
    setPickupPredictions([]);
  };

  const handleDropoffSelect = (place: string) => {
    setDropoffInput(place);
    setDropoffPredictions([]);
  };
  console.log(pickupPredictions);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full ">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1 w-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Pick-Up
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={pickupInput}
                    onChange={(e) => setPickupInput(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter pickup location"
                  />
                  {pickupPredictions.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-200 mt-1 w-full rounded-lg shadow-lg max-h-40 overflow-auto">
                      {pickupPredictions.map((p, i) => (
                        <li
                          key={i}
                          onClick={() => handlePickupSelect(p.description)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {p.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={handleSearch}
                className="w-16 h-16 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center transition"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Drop-Off
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={dropoffInput}
                    onChange={(e) => setDropoffInput(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter drop-off location"
                  />
                  {dropoffPredictions.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-200 mt-1 w-full rounded-lg shadow-lg max-h-40 overflow-auto">
                      {dropoffPredictions.map((p, i) => (
                        <li
                          key={i}
                          onClick={() => handleDropoffSelect(p.description)}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {p.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    value={dropoffTime}
                    onChange={(e) => setDropoffTime(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
