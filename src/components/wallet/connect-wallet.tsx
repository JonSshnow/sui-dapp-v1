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
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      {walletAddress ? (
        <ConnectMenu walletAddress={walletAddress} suiName={suiName} />
      ) : (
        <ConnectModal
          trigger={
            <button
              className="h-full w-auto rounded-lg md:rounded-xl outline-none ring-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 transition-all duration-300 p-[1px]"
              disabled={!!walletAddress}
            >
              <div className="h-full px-4 py-2 sm:px-5 sm:py-3 flex items-center gap-2 rounded-lg md:rounded-xl bg-white/10">
                <span className="text-sm md:text-base text-white">
                  {walletAddress ? "Connected" : "Connect Wallet"}
                </span>
                <LinkIcon size={17} className="text-white" />
              </div>
            </button>
          }
        />
      )}
    </div>
  );
};

export default ConnectWallet;
