import storelogo2 from "../assets/storelogo2.png";

const Hero = () => {
  return (
    <section className="py-10 bg-green-200 rounded-3xl m-4">
      <div className="mx-auto px-8 flex flex-col md:flex-row items-center justify-between rounded-3xl bg-green-200 overflow-hidden">
        <div className="max-w-lg py-10">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            <span className="block">Fresh Vegetables</span>
            <span className="block text-green-700">Big Discount</span>
          </h1>

          <p className="mt-4 text-gray-600">
            Save up to 50% off on your first order
          </p>
          <div className="mt-6 flex max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-r-full hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="hidden md:block bg-green-200 p-2 rounded-3xl">
          <img
            src={storelogo2}
            alt="Fresh vegetables"
            className="w-[350px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;