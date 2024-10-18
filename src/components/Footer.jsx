const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8 flex justify-center items-center">
      <div className="max-w-screen-xl w-full text-center">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-sm">
          <a href="#" className="hover:underline hover:text-red-400">
            Privacy Policy
          </a>
          <span className="hidden md:inline-block text-gray-300 font-thin text-xl">
            |
          </span>
          <a href="#" className="hover:underline hover:text-red-400">
            Terms & Conditions
          </a>
          <span className="hidden md:inline-block text-gray-300 font-thin text-xl">
            |
          </span>
          <a href="#" className="hover:underline hover:text-red-400">
            Cookie Policy
          </a>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-xs ">
          © 2024 Vodafone Limited. Registered office: Vodafone House, The
          Connection, Newbury, Berkshire RG14 2FN. Registered in England No
          1471587.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
