import Link from "next/link";
import img1 from "../assets/Ummah-white-logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Mobilenav = () => {
  return (
    <div className="md:hidden fixed bottom-0 border-t w-full">
      <nav>
        <ul className="flex justify-evenly text-lg">
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
            <Link href="/" className="p-3 inline-block">
              <Avatar className="w-6 h-6">
                <AvatarImage src={img1} alt="Profile" />
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mobilenav;
