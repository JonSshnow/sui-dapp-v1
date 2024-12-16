import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full backdrop-blur-md"
      style={{
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <footer className="sticky w-full max-w-360 mx-auto gap-2">
        {/* <Image
          className="self-center"
          src="/images/suitzerland_logo.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        /> */}
        <p className=" flex items-end justify-end bottom-0 pb-5 px-4">© 2024 - Suitzerland - All rights reserved - Privacy policies</p>
      </footer>
    </div>
  );
};

export default Footer;
