// Header.jsx
import HeroImage from "../assets/images/header_image.png";

export default function Header() {
  return (
    <section className="min-h-[85vh] bg-[#f8f8f8] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Elevate Your Wardrobe
              <br />
              With Trendy Fashion
              <br />
              From{" "}
              <span className="bg-[#F5C0B9] px-3 rounded-full">GlamStore</span>
            </h1>

            <div className="flex items-center gap-6 mt-12">
              <button className="bg-black text-white px-5 py-3 text-sm hover:bg-gray-800 transition">
                Latest
                <br />
                Products →
              </button>

              <p className="text-gray-500 max-w-md text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, animi deleniti doloribus laboriosam aperiam, dolorum
                veniam veritatis eligendi quibusdam saepe soluta.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={HeroImage}
              alt="Fashion Model"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
