import Link from "next/link";
import img1 from "../assets/Ummah-white-logo.svg";
import Image from "next/image";

const Mobilenav = () => {
  return (
    <div className="md:hidden fixed bottom-0 border-t w-full">
      <nav>
        <ul className="flex justify-evenly text-2xl items-center">
          <li>
            <Link href="/" className="p-3 inline-block">
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link href="/" className="p-3 inline-block">
              <span>
                <i className="fa-solid fa-hand-point-up"></i>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/" className="p-3 inline-block">
              <i className="fa-solid fa-book-quran"></i>
            </Link>
          </li>
          <li>
            <Link href="/" className="p-3 inline-block">
              <i className="fa-solid fa-message"></i>
            </Link>
          </li>
          <li>
            <Link href="/" className="p-3 grid place-items-center">
              <span className="">
                <Image
                  src={img1}
                  height={"auto"}
                  width={26}
                  alt="Profile"
                  className="rounded-full"
                ></Image>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mobilenav;
