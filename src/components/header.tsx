import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { COIN } from "bucket-protocol-sdk";
import { ConnectModal } from "@mysten/dapp-kit";
import ConnectMenu from "./ui/connectMenu";
import "@mysten/dapp-kit/dist/index.css";
import { AppContext } from "@/context/AppContext";
import { Link as LinkIcon } from "lucide-react";
import ConnectWallet from "./wallet/connect-wallet";

// import SlideInMenu from "./slideInMenu";
// import RpcSetting from "./rpcSetting";

const Header = () => {

  return (
    <div
      className="fixed top-0 left-0 w-full backdrop-blur-sm"
      style={{
        WebkitBackdropFilter: "blur(1px)",
      }}
    >
      <header className="w-full max-w-360 mx-auto h-20 flex items-center justify-between pt-5 pb-3 px-4 z-50">
        {/* Logo Link */}
        <span className="text-xl lg:text-4xl font-extrabold">
          Suitzerland
        </span>
        {/* Connect Button */}
        <ConnectWallet></ConnectWallet>
      </header>
    </div>
  );
};

export default Header;
