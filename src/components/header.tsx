import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { COIN } from "bucket-protocol-sdk";
import { ConnectModal } from "@mysten/dapp-kit";
import ConnectMenu from "./ui/connectMenu";
import "@mysten/dapp-kit/dist/index.css";
import { AppContext } from "@/context/AppContext";
import { HouseIcon, Layers, LayoutDashboardIcon, Settings } from "lucide-react";
import ConnectWallet from "./wallet/connect-wallet";

// import SlideInMenu from "./slideInMenu";
// import RpcSetting from "./rpcSetting";

const items = [
  {
    title: "Home",
    url:"/",
    icon : HouseIcon,
  },
  {
    title: "Dashboard",
    url:"/dashboard",
    icon : LayoutDashboardIcon,
  },
  {
    title: "Stake",
    url:"/stake",
    icon : Layers,
  },
  {
    title: "Setting",
    url:"/setting",
    icon : Settings,
  },
]

const Header = () => {

  return (
    <div
      className="fixed top-0 left-0 w-full backdrop-blur-sm"
      style={{
        WebkitBackdropFilter: "blur(1px)",
      }}
    >
      <header>
        <div className="navbar bg-base-100 shadow-md">
          <div className="navbar-start">
          <span className="text-xl md:text-3xl font-extrabold mt-[2px] text-[#646262]">
              Suitzerland
            </span>
          </div>
          <div className="navbar-end">
            <ConnectWallet/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
