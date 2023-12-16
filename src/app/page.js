import Image from "next/image";
import transLogo from "../assets/Ummah-white-trans-logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="grid place-items-center h-screen">
        <div className="block max-w-sm border p-6 bg-conatiner rounded-lg shadow border-gray-700 relative">
          <div className="grid place-items-center mb-2">
            <Image
              className=" absolute left-6 top-4"
              src={transLogo}
              width={50}
              height={50}
              alt="Ummah"
            ></Image>
          </div>
          <h1 className="text-l text-center font-bold font-signika my-2 m-auto mt-11 pt-5">
            Welcome in Ummah <br /> of Prophet <br />
            Muhammad Sallallahu Alaihi Wasallam
          </h1>
          <form className="text-center  mx-auto mt-8">
            <h2 className="font-semibold font-signika text-lg">
              Create Account
            </h2>
            <div className="flex flex-col mt-1 ">
              <input
                className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded"
                placeholder="Name"
                required
              />
              <input
                className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded"
                placeholder="Username"
                required
              />
              <input
                className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded"
                placeholder="Email"
                required
              />
              <input
                className="mx-2 my-2 py-2 px-3 bg-transparent border border-gray-600 outline-none rounded"
                placeholder="Mobile"
                required
              />
              <Link href={"/forgot-password"} className="text-xs block">
                <p className="text-right mx-2">Forgot password?</p>
              </Link>
              <Link href={"/login"} className="text-xs block -mt-4">
                <p className="text-left mx-2">Already have account?</p>
              </Link>
              <button className="px-4 py-2 rounded mt-5  hover:outline hover:text hover:outline-1 hover:outline-gray-100">
                Bismillah
              </button>
            </div>
          </form>
          <div className="text-center font-medium  mt-8">
            <p className="text-gray-400 text-xs">
              By signup you confirm our <br />{" "}
              <Link href={"/terms-of-uses"}>Terms of Use</Link> and{" "}
              <Link href={"/privacy-policy"}>Privacy policy</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
