import Image from "next/image";
import Link from "next/link";
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
                href="#features"
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
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="pl-9 pr-9 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Lorem ipsum dolor
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam ipsam dolores sed alias? Labore aliquid, sit,
                  cupiditate, unde porro impedit repellendus voluptatem in
                  expedita quo ullam? Placeat aspernatur tempora doloremque?
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 font-medium">
                  <span>Explore Rentals</span>
                  {/* <ChevronRight size={20} /> */}
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-medium">
                  Contact Us
                </button>
              </div>
            </div>
            {/* <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury Sports Car"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
      {/* <Search /> */}
      <h1>hello</h1>
    </div>
  );
}
