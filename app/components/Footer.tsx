const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top: Newsletter + Contact + Currency */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">BE THE FIRST TO KNOW</h3>
            <p className="text-sm text-gray-300 mb-4">
              Sign up for updates from mettā muse.
            </p>
            <form className="flex flex-col sm:flex-row items-start sm:items-center">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="w-full sm:w-auto flex-1 p-2 text-black bg-white rounded mb-4 sm:mb-0 sm:mr-2"
              />
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-1 text-sm">
              <li>+44 221 133 5360</li>
              <li>customercare@mettamuse.com</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">CURRENCY</h3>
              <div className="flex items-center space-x-2">
                <img
                  src="https://flagcdn.com/24x18/us.png"
                  alt="USD Flag"
                  className="w-6 h-4"
                />
                <span className="text-sm">USD</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>

          {/* Social */}
        </div>

        {/* Middle: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-700 pt-8 gap-8 md:gap-10 text-sm text-gray-400">
          {/* Column 1 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              mettā muse
            </h4>
            <ul className="space-y-2">
              {[
                "About Us",
                "Stories",
                "Artisans",
                "Boutiques",
                "Contact Us",
                "EU Compliances Docs",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-3">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {[
                "Orders & Shipping",
                "Join/Login as a Seller",
                "Payment & Pricing",
                "Return & Refunds",
                "FAQs",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Payments */}
          <div>
          <div>
            <div>
              <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
              <div className="flex space-x-4 text-lg">
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <h4 className="text-white text-lg font-semibold mb-3">
              mettā muse ACCEPTS
            </h4>
            <div className="flex flex-wrap items-center gap-2">
              {["gpay", "paypal", "visa", "amex", "applepay", "opay"].map(
                (payment) => (
                  <img
                    key={payment}
                    src={`https://placehold.co/40x25?text=${payment.toUpperCase()}`}
                    alt={`${payment} logo`}
                    className="h-6 rounded"
                  />
                )
              )}
            </div>
          </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
