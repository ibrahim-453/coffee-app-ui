function Footer() {
  return (
    <footer className="bg-[#d4a373] text-[#faedcd] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-3xl font-extrabold cursor-pointer mb-4 text-[#5c3a1a]">
            Coffee.
          </h3>
          <p className="text-md font-semibold leading-relaxed">
            Enjoy the rich aroma and bold flavor at your favorite spot. Freshly brewed joy in every sip.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-2xl font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#home" className="hover:underline cursor-pointer">Home</a></li>
            <li><a href="#menu" className="hover:underline cursor-pointer">Menu</a></li>
            <li><a href="#sellers" className="hover:underline cursor-pointer">Hot Sellers</a></li>
            <li><a href="#contact" className="hover:underline cursor-pointer">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3">Contact Us</h4>
          <p className="text-md font-semibold">📧 hello@coffee.com</p>
          <p className="text-md font-semibold">📞 +92 312 3456789</p>
          <p className="text-md font-semibold">📍 Main Street, Lahore</p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-2xl font-bold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-md font-semibold">
            <li><a href="#" className="hover:underline cursor-pointer">Facebook</a></li>
            <li><a href="#" className="hover:underline cursor-pointer">Instagram</a></li>
            <li><a href="#" className="hover:underline cursor-pointer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-md font-semibold mt-12 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} Coffee. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
