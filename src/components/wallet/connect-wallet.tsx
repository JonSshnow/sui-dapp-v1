import { cn } from "@/lib/utils";
import { useContext } from "react";
import { ConnectModal } from "@mysten/dapp-kit";
import ConnectMenu from "../ui/connectMenu";
import "@mysten/dapp-kit/dist/index.css";
import { AppContext } from "@/context/AppContext";
import { WalletCards } from "lucide-react";

const ConnectWallet = () => {
  const { walletAddress, suiName } = useContext(AppContext);

  return (
    <div className="absolute z-50 flex flex-wrap top-5 right-[50px]">
      {walletAddress ? (
        <ConnectMenu walletAddress={walletAddress} suiName={suiName} />
      ) : (
        <ConnectModal
          trigger={
            <button
              className="h-full w-auto rounded-lg md:rounded-xl outline-none ring-0 bg-gradient-to-r from-[#4286F4] from-10% to-[#90D5FF] to-90% hover:ring hover:ring-white transition-all duration-300 p-[1px]"
              disabled={!!walletAddress}
            >
              <div className="h-full px-4 py-2 sm:px-5 sm:py-3 flex items-center gap-2 rounded-lg md:rounded-xl bg-white/10">
                <WalletCards size={17} className="text-[#FFFFFF]" />
                <span className="text-sm md:text-base text-[#FFFFFF]">
                  {walletAddress ? "Connected" : "Connect Wallet"}
                </span>
                
              </div>
            </button>
          }
        />
      )}
    </div>
  );
};

export default ConnectWallet;
