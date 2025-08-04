import { seller } from "../slider/Hotseller";
function HotSeller() {
  return (
    <div className="w-full py-16 bg-[#faedcd]" id="sellers">
      <h3 className="text-4xl font-bold text-center mb-12 text-[#5c3a1a]">
        Our Hot Sellers
      </h3>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center md:grid md:grid-cols-4 gap-6">
          {seller.map((data, index) => (
            <div
              key={index}
              className="w-[300px] h-[400px] bg-white rounded-md shadow hover:shadow-lg hover:shadow-black transition duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden rounded-t-md">
                <img
                  src={data.image}
                  alt={data.des}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between bg-[#faedcd] rounded-b-md">
                <div>
                  <h4 className="text-lg font-semibold text-[#5c3a1a] mb-1 truncate">
                    {data.des}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {data.info}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <span className="text-[#d4a373] font-bold text-lg">
                    {data.price}
                  </span>
                  <button className="bg-[#d4a373] text-white px-4 py-1 rounded-full text-sm hover:bg-[#b57b4d] transition">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotSeller;
