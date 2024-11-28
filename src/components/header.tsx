import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { COIN } from "bucket-protocol-sdk";
import { ConnectModal } from "@mysten/dapp-kit";
import ConnectMenu from "./ui/connectMenu";
import "@mysten/dapp-kit/dist/index.css";
import { AppContext } from "@/context/AppContext";
import { HouseIcon, Layers, LayoutDashboardIcon, Settings, Plus } from "lucide-react";
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
    title: "Settings",
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
        <div className="navbar bg-transparent shadow-md">
          <div className="navbar-start">
            <span className="text-xl hidden md:flex md:text-3xl font-extrabold mt-[2px] text-[#646262]">
                Suitzerland
            </span>
            <div className="mt-[5px] md:hidden">
              <details>
                <summary className="flex flex-col mb-3 size-6"><Plus/></summary>
                <ul>
                  {items.map(item =>(
                    <li className="mb-3" key={item.title}>
                      <Link href={item.url}>
                        <p className="flex items-center gap-x-2 text-xs"><item.icon className="size-4"/>{item.title}</p>
                      </Link>
                    </li>
                  ))}
              </ul>
              </details>
            </div>
          </div>
          <ul className="gap-7 mt-[5px] hidden md:flex">
          {items.map(item =>(
            <li key={item.title}>
              <Link href={item.url}>
                <div className="tooltip tooltip-bottom" data-tip={item.title}>
                  <item.icon className="w-[35px] h-[35px]"/>
                </div>
              </Link>
            </li>
          ))}
          </ul>
          <div className="navbar-end">
            <ConnectWallet/>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
