import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { UserAuth } from "../context";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useRouter();
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      setLoading(true);
      navigate.push("/VerifyAccount");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      setError(e.message);
      console.log(error.message);
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <p className="flex items-center mb-1 text-2xl md:text-4xl font-semibold text-[#4BF0A5] dark:text-white">
          Welcome to Faysal
        </p>
        <p className="text-lg md:text-xl mb-6 text-white">
          Complete your sign up to get started
        </p>

        <div
          className="w-full bg-[#0A221C] rounded-lg shadow dark:border md:mt-0 lg:min-w-[50%] sm:max-w-md xl:p-0
         dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" onClick={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#113A2F] border-0 text-gray-300 outline-none font-semibold sm:text-sm rounded-lg
                   focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500
                     dark:focus:border-green-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-[#113A2F] border-0 text-gray-300 outline-none font-semibold sm:text-sm rounded-lg
                   focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500
                     dark:focus:border-green-500"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-400 dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={visible ? "text" : "password"}
                    className="bg-[#113A2F] border-0 text-gray-300 outline-none font-semibold sm:text-sm rounded-lg
                   focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-700
                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500
                     dark:focus:border-green-500"
                  />

                  {visible ? (
                    <IoEyeSharp
                      size={25}
                      className="text-white absolute right-1 top-1"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <BsEyeSlashFill
                      size={25}
                      className="text-white absolute right-1 top-1"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border text-green-950 border-white rounded bg-gray-50 focus:ring-3 focus:ring-green-900
                    active:bg-green-950
                     dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-normal text-gray-500 dark:text-gray-300">
                    By signing up, you agree to the{" "}
                    <Link
                      href="/"
                      className="text-[#4BF0A5] hover:underline dark:text-primary-500 font-thin"
                    >
                      <p> Terms of Service and Policy.</p>
                    </Link>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-[#0A221C] bg-[#4BF0A5]
                 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
                 flex items-center justify-center
                dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading ? (
                  <VscLoading
                    size={20}
                    className="flex items-center animate-spin"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
