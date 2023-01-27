import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.svg";
import LogoTitle from "../public/assets/logo-title.svg";
import Navbar from "./Navbar";
import MenuIcon from "../public/assets/hamburger.svg";
function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5 space-x-2 font-bold">
      <div className="flex flex-row items-center justify-center space-x-2">
        <Link className="flex flex-row space-x-4" title="logo" href="/">
          <Image
            className="hidden rounded-full sm:block"
            src={Logo}
            width={102}
            height={102}
            alt=""
          />
          <Image src={LogoTitle} width={75} height={74} alt="" />
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="block md:hidden">
        <Image src={MenuIcon} alt="menu icon" />
      </div>
      <div className="hidden md:block">
        <Link
          title="contact"
          href="/"
          className="px-8 py-4 mr-8 text-xs text-white uppercase border-2 border-white rounded-full "
        >
          contact us
        </Link>
        <Link
          title="join hydra"
          href="/"
          className=" uppercase text-[#343045] btn text-xs px-9 py-5 rounded-full"
        >
          join hydra
        </Link>
      </div>
    </header>
  );
}

export default Header;
