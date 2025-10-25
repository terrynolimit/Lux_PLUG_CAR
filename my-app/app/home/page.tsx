import { Span } from "next/dist/trace";
import Image from "next/image";
import Link from "next/link";
import { FaCarSide, FaHeadset, FaGem, FaShieldAlt } from "react-icons";

interface Cars {
  id: number;
  name: String;
  image: String;
}
interface Feature {
  id: number;
  icon: JSX.Element;
  title: String;
  description: String;
}
const placeholder: Cars[] = [
  {
    id: 1,
    name: "Mercedes",
    image:
      "https://douradocars.com/wp-content/uploads/2023/10/DSC00332-scaled.webp",
  },
  {
    id: 2,
    name: "BMW",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/BMW_730d_%28G11%2C_Facelift%29_%E2%80%93_f_16012021.jpg",
  },
  {
    id: 3,
    name: "Rolls Royce",
    image:
      "https://www.topgear.com/sites/default/files/news-listicle/image/2023/02/cullinan-mr-2.jpg",
  },
  {
    id: 4,
    name: "Ferrai",
    image: "https://pngimg.com/d/ferrari_PNG102810.png",
  },
  {
    id: 5,
    name: "Porsche",
    image:
      "https://scleasing.dk/wp-content/uploads/sites/3/2025/02/efd2736c-6d42-414d-a23d-dddccf22e3ea.jpeg",
  },
  {
    id: 6,
    name: "Range Rover",
    image:
      "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/2f05ebd04d001fe454da90fb0fa41ddf.png",
  },
];
const features: Feature[] = [
  {
    id: 1,
    icon: <FaCarSide className="text-3xl text-black mb-3" />,
    title: "24-Hour Car Delivery",
    description:
      "Enjoy our around-the-clock delivery service — we bring your chosen luxury car right to your door, anytime, anywhere.",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-3xl text-black mb-3" />,
    title: "24/7 Personal Support",
    description:
      "Our dedicated concierge team is always ready to assist you, ensuring a seamless and personalized rental experience.",
  },
  {
    id: 3,
    icon: <FaGem className="text-3xl text-black mb-3" />,
    title: "Premium Fleet Selection",
    description:
      "Every model in our fleet represents sophistication and performance — handpicked for those who demand excellence.",
  },
  {
    id: 4,
    icon: <FaShieldAlt className="text-3xl text-black mb-3" />,
    title: "Luxury with Confidence",
    description:
      "Drive in style knowing every vehicle is maintained to perfection and covered by comprehensive protection.",
  },
];

const topRow = placeholder.slice(0, 3);
const bottomRow = placeholder.slice(3, 6);
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className=" w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="pl-9 pr-9 mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold tracking-tight">LUX Rentals</div>
            <div className="hidden md:flex items-center space-x-8 text-md font-medium">
              <Link
                href="#about"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#cars"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Rentals
              </Link>
              <Link
                href="#why-us"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Why us?
              </Link>
              <Link
                href="#help"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Help
              </Link>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Homepage */}
      <section className="relative min-h-[90vh] bg-black text-white overflow-hidden flex flex-col justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-60">
          <Image
            src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Luxury Car Rental"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-40" // Adjust opacity to keep content legible
            unoptimized
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-3xl space-y-8">
            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Your Journey Begins Here <br />
              <span className="text-gray-300">Explore More With </span>
              <br />
              Our Premium Car Rentals
            </h1>
            {/* Description */}
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              Choose from a wide range of Luxury cars that fit your style and
              budget. Experience the freedom of the open road with our reliable
              and efficient rental service.
            </p>
            {/* Contact Link */}
            <Link
              href="#"
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors font-medium group"
            >
              <span className="text-xl">›</span>
              <span className="text-lg">Book with us</span>
            </Link>
          </div>

          {/* Search/Booking Form */}
          <div className="bg-white p-6 rounded-xl shadow-2xl mt-12 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* Pick-up Point */}
              <div className="col-span-2 md:col-span-1">
                <label className="text-sm text-gray-500 font-medium block mb-1">
                  Pick-up Point
                </label>
                <div className="flex items-center space-x-2 border-b border-gray-300 py-1">
                  <span className="text-gray-400">📍</span>
                  <input
                    type="text"
                    placeholder="Search a location"
                    className="w-full text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Pick-up date */}
              <div className="col-span-1">
                <label className="text-sm text-gray-500 font-medium block mb-1">
                  Pick-up date
                </label>
                <div className="flex items-center space-x-2 border-b border-gray-300 py-1">
                  <span className="text-gray-400">📅</span>
                  <input
                    type="date"
                    className="w-full text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Drop-off Point */}
              <div className="col-span-2 md:col-span-1">
                <label className="text-sm text-gray-500 font-medium block mb-1">
                  Drop-off Point
                </label>
                <div className="flex items-center space-x-2 border-b border-gray-300 py-1">
                  <span className="text-gray-400">📍</span>
                  <input
                    type="text"
                    placeholder="Search a location"
                    className="w-full text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Drop-off date */}
              <div className="col-span-1">
                <label className="text-sm text-gray-500 font-medium block mb-1">
                  Drop-off date
                </label>
                <div className="flex items-center space-x-2 border-b border-gray-300 py-1">
                  <span className="text-gray-400">📅</span>
                  <input
                    type="date"
                    className="w-full text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/* Find a Vehicle Button */}
              <div className="col-span-2 md:col-span-1 flex items-end">
                <button className="w-full bg-gray-600 text-white px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center space-x-2">
                  <span>Find a Vehicle</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Fleet Section */}
      <div className=" py-5 px-6 md:px-20">
        <div className="text-center">
          <h1 className=" font-bold tracking-widest uppercase mb-4 text-3xl  ">
            {" "}
            Rent your Perfect Ride, Any
            <span className="text-[#808080]">Time </span> Any
            <span className="text-[#808080]">Where</span>{" "}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {" "}
            At <span className="font-semibold text-[#808080]">LuxRental </span>
            ,Include Some Information about Luxury Rental. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laboriosam ipsam dolores sed
            alias? Placeat aspernatur tempora doloremque?{" "}
          </p>
          <div className="mb-10 flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-6">
            <button className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
              Popular Cars
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              All Cars
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              New Arrivals
            </button>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl">
              Luxury Cars
            </button>
          </div>
        </div>
        {/*Car Placeholder here*/}
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-10">
            {topRow.map((car) => (
              <div
                key={car.id}
                className="relative w-80 h-56 overflow-hidden rounded-xl shadow-md hover:shadow-xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <Image
                  src={car.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3">
                  <h3 className="text-lg">{car.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {bottomRow.map((car, index) => (
              <div
                key={car.id}
                className="relative w-60 h-45 overflow-hidden rounded-xl shadow-md hover:shadow-xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <Image
                  src={car.image}
                  alt={car.name}
                  className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-2">
                  <h3 className="font-semibold text-base">{car.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      {/*Why Choose Us Section*/}
      <div id="why-us" className=" py-15 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-gray-400 font-bold tracking-widest uppercase mb-2 text-3xl ">
            {" "}
            Why Choose Us?{" "}
          </h2>
          <h1 className="text-2xl font-bold mb-4">Key Features</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We care deeply about our clients’ comfort and safety. That’s why we
            provide the finest service you can imagine — crafted to match the
            prestige of every car we offer.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="text-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Us Section */}
      <div className=" py-5 px-6 md:px-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us Today</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you’re ready to book or simply have a question, our team is
            here to help. Fill out the form below and we’ll reach out shortly.
          </p>
        </div>
        {/* Contact Form Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-b from-black to-gray-900 text-white rounded-3xl shadow-lg p-10 md:p-14">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Contact Our Team
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-gray-600 bg-transparent px-4 py-3 text-white placeholder-gray-400 outline-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 bg-gray-600 text-white font-semibold py-3 rounded-xl hover:bg-gray-200 hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
              <p className="text-center mt-10 text-gray-300">
                We usually respond within a few hours.
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="py-12 px-6 md:px-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">LUX Rentals</h3>
              <p className="text-gray-400">Premium luxury vehicle rentals.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link
                  href="#about"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#cars"
                  className="block hover:text-white transition-colors"
                >
                  Our Fleet
                </Link>
                <Link
                  href="#features"
                  className="block hover:text-white transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#help"
                  className="block hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+x (xxx) xxx-xxxx</p>
                <p>info@luxrentals.com</p>
                <p>123 xxxxxxx xxxxxxx, Xxxxx Xxxxx, XX</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 8AM - 7PM</p>
                <p>Saturday: 9AM - 6PM</p>
                <p>Sunday: 10AM - 5PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LUX Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
