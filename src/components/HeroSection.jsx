import hero from "../assets/images/herosection.png"
function HeroSection() {
  return (
    <div style={{backgroundImage : `url(${hero})`}} className="relative bg-center w-full h-[500px]" >
            <div className="absolute inset-0 bg-black opacity-50" ></div>
            <div className="relative z-10 mx-auto max-w-7xl h-full text-white flex flex-col justify-center items-center gap-2 ">
                <h2 className=" text-2xl font-bold md:text-5xl">Taste The Best In Business</h2>
                <p className="text-[14px] md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipi.</p>
                <button className=" mt-6 duration-300 font-semibold text-md bg-[#d4a373] px-2 py-1 rounded-md hover:text-black hover:bg-[#faedcd]">Explore Our Menu</button>
            </div>
            
        </div>
  )
}

export default HeroSection