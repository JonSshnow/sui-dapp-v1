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
        <div className="flex gap-5 items-end justify-end bottom-0 pb-5 px-4">
          <a href="https://dexscreener.com/">
          <Image className="self-center" src="/images/dex-screener-seeklogo.png"
              alt="dex_logo"
              width={16}
              height={16}
              priority={true}
            />
          </a>
          <a href="https://lytefinance.xyz/">
            <Image className="self-center" src="/images/telegram-16.png"
              alt="telegram_logo"
              width={16}
              height={16}
              priority={true}
            />
          </a>
          <a href="https://x.com/Suitzerland">
          <Image className="self-center" src="/images/X_logo_2023_(white).png"
              alt="x_logo"
              width={16}
              height={16}
              priority={true}
            />
          </a>
          <p className="text-sm">© 2024 - Suitzerland - All rights reserved - Privacy policies</p>
        </div>
        
        
      </footer>
    </div>
  );
};

export default Footer;
