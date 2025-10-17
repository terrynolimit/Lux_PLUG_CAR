"use client";
import React, { useState } from "react";

interface Booking {
  id: string;
  carImage: string;
  renter: string;
  dateRange: string;
  status: string;
  totalPrice: string;
}

const BookingPage: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "BK001",
      carImage: "/car1.jpg",
      renter: "John Doe",
      dateRange: "2025-10-12 → 2025-10-15",
      status: "Pending",
      totalPrice: "$180",
    },
    {
      id: "BK002",
      carImage: "/car2.jpg",
      renter: "Jane Smith",
      dateRange: "2025-10-13 → 2025-10-17",
      status: "Delivered",
      totalPrice: "$240",
    },
  ]);

  const handleStatusChange = (id: string, newStatus: string) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: newStatus === "Returned" ? "Completed" : newStatus,
            }
          : booking
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Bookings</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-3">Booking ID</th>
              <th className="px-4 py-3">Car</th>
              <th className="px-4 py-3">Renter</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-gray-200 ">
                <td className="px-4 py-3">{booking.id}</td>
                <td className="px-4 py-3">
                  <img
                    src={booking.carImage}
                    alt="Car"
                    className="w-20 h-14 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3">{booking.renter}</td>
                <td className="px-4 py-3">{booking.dateRange}</td>
                <td
                  className={`px-4 py-3 font-medium ${
                    booking.status === "Pending"
                      ? "text-yellow-500"
                      : booking.status === "Delivered"
                        ? "text-blue-500"
                        : booking.status === "Completed"
                          ? "text-green-600"
                          : "text-gray-600"
                  }`}
                >
                  {booking.status}
                </td>
                <td className="px-4 py-3">{booking.totalPrice}</td>
                <td className="px-4 py-3">
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      handleStatusChange(booking.id, e.target.value)
                    }
                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Returned">Returned</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingPage;
