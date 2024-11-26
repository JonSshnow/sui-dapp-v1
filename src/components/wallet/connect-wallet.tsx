import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ConnectModal } from "@mysten/dapp-kit";
import ConnectMenu from "../ui/connectMenu";
import "@mysten/dapp-kit/dist/index.css";
import { AppContext } from "@/context/AppContext";
import { Link as LinkIcon } from "lucide-react";

const ConnectWallet = () => {
  const { walletAddress, suiName } = useContext(AppContext);

  return (
    <div className="absolute z-50 flex flex-wrap ">
      {walletAddress ? (
        <ConnectMenu walletAddress={walletAddress} suiName={suiName} />
      ) : (
        <ConnectModal
          trigger={
            <button
              className="h-full w-auto rounded-lg md:rounded-xl outline-none ring-0 bg-gray-100 hover:bg-cyan-100 active:bg-cyan-300 active:ring active:ring-cyan-400 focus:bg-gray-300 rounded-full transition-all duration-300 p-[1px]"
              disabled={!!walletAddress}
            >
              <div className="h-full px-4 py-2 sm:px-5 sm:py-3 flex items-center gap-2 rounded-lg md:rounded-xl bg-white/10">
                <span className="text-sm md:text-base text-[#646262]">
                  {walletAddress ? "Connected" : "Connect Wallet"}
                </span>
                <LinkIcon size={17} className="text-[#646262]" />
              </div>
            </button>
          }
        />
      )}
    </div>
  );
};

export default ConnectWallet;
