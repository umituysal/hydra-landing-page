import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.svg";
import Facebook from "../public/assets/facebook.svg";
import Twitter from "../public/assets/twitter.svg";
import Linkedin from "../public/assets/linkedin.svg";
import Youtube from "../public/assets/youtube.svg";
import Instagram from "../public/assets/instagram.svg";
import Pinterest from "../public/assets/pinterest.svg";
import Line from "../public/assets/footer-line.svg";

function Footer() {
  return (
    <footer className="container mx-auto my-16 sm:p-6 ">
      <div className="flex flex-col items-center py-8 font-bold text-white uppercase lg:flex-row lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <Link title="logo" href={"#"}>
            <Image
              className="rounded-full"
              src={Logo}
              width={185}
              height={187}
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image className="hidden md:block" src={Line} alt="line" />
        </div>
        <div className="hidden lg:block">
          <ul className="leading-9">
            <li className="">
              <Link title="about" href="https://flowbite.com/">
                about
              </Link>
            </li>
            <li>
              <Link title="services" href="https://tailwindcss.com/">
                services
              </Link>
            </li>
            <li>
              <Link title="technologies" href="https://tailwindcss.com/">
                technologies
              </Link>
            </li>
            <li>
              <Link title="how to" href="https://tailwindcss.com/">
                how to
              </Link>
            </li>
            <li>
              <Link title="join hydra" href="https://tailwindcss.com/">
                join hydra
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Image className="hidden md:block" src={Line} alt="line" />
        </div>
        <div className="hidden lg:block">
          <ul className="leading-9">
            <li className="">
              <Link title="f.a.q" href="https://github.com/themesberg/flowbite">
                f.a.q
              </Link>
            </li>
            <li>
              <Link title="sitemap" href="https://discord.gg/4eeurUVvTy">
                sitemap
              </Link>
            </li>
            <li>
              <Link title="conditions" href="https://discord.gg/4eeurUVvTy">
                conditions
              </Link>
            </li>
            <li>
              <Link title="licenses" href="https://discord.gg/4eeurUVvTy">
                licenses
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image className="hidden lg:block" src={Line} alt="line" />
        </div>
        <div className="text-center">
          <h2 className="text-sm font-bold text-white">SOCIALIZE WITH HYDRA</h2>
          <ul className="flex my-8 space-x-4">
            <li className="mb-4">
              <Link title="Facebook" href="#">
                <Image src={Facebook} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link title="Twitter" href="#">
                <Image src={Twitter} alt="Twitter" />
              </Link>
            </li>
            <li>
              <Link title="Linkedin" href="#">
                <Image src={Linkedin} alt="Linkedin" />
              </Link>
            </li>
            <li>
              <Link title="Youtube" href="#">
                <Image src={Youtube} alt="Youtube" />
              </Link>
            </li>
            <li>
              <Link title="Instagram" href="#">
                <Image src={Instagram} alt="Instagram" />
              </Link>
            </li>
            <li>
              <Link title="Pinterest" href="#">
                <Image src={Pinterest} alt="Pinterest" />
              </Link>
            </li>
          </ul>
          <Link
            title="BUILD YOUR WORLD"
            href="/"
            className="uppercase font-bold text-[#343045] btn text-xs px-8 py-4 rounded-full"
          >
            BUILD YOUR WORLD
          </Link>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center">
        <span className="text-sm font-bold text-center text-white ">
          © 2023{" "}
          <Link
            title="website name"
            href="https://flowbite.com/"
            className="mr-2"
          >
            HYDRA LANDING PAGE
          </Link>
          <Link title="website" href="https://umituysal.net/" target="_blank">
            www.umituysal.net
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
