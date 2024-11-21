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
      <footer className="sticky bottom-0 w-full max-w-360 mx-auto flex items-end justify-end gap-2 pb-5 px-4">
        {/* Do you think you really want to delete? */}
        <Image
          className="self-center"
          src="/images/suitzerland_logo.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
        />
      </footer>
    </div>
  );
};

export default Footer;
