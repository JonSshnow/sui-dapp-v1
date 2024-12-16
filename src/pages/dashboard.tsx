
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Snowfall from "react-snowfall";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import { LayoutDashboardIcon } from "lucide-react";
  

/* const font = Raleway({ subsets: ["latin"] }); */

export default function Dashboard(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-b from-[#242424] from-10% to-[#000000] to-90%",
            /* font.className */
        )}>
            <SideBarLayout>
                <Snowfall color="white" snowflakeCount={200} />
                <h1 className="absolute text-[#FFFFFF] flex h-[53px] w-[252px] font-bold justify-center items-center"><LayoutDashboardIcon/><span>Dashboard</span></h1>
                {/* <BasicContainer/> */}
                <div className="flex flex-col gap-6 py-6 h-full w-full xl:w-[1500px] mt-[25%] md:mt-0 justify-center items-center">
                <div className="bg-[#666666] rounded-2xl max-w-6xl">
                        <div className="mx-auto md:w-[1100px] max-w-7xl">
                            <div className="grid grid-cols-1 gap-px bg-[#666666]/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl shadow-md">
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-left">$stz price</p>
                                    <p className="mt-2 flex items-baseline gap-x-2">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                    <p className="text-sm font-medium leading-6 text-white text-center">MarketCap</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-center">
                                        <span className="text-center text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-right">Total value locked</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-end">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                                    </p>
                                </div>
                            </div>                   
                        </div>
                    </div>
                    <div className="bg-[#666666] rounded-2xl max-w-6xl">
                        <div className="mx-auto md:w-[1100px] max-w-7xl">
                            <div className="grid grid-cols-1 gap-px bg-[#666666]/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl shadow-md">
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-left">Supply</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0$stz</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                    <p className="text-sm font-medium leading-6 text-white text-center">Treasury balance</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-center">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-right">Epoch</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-end">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0</span>
                                    </p>
                                </div>
                            </div>                   
                        </div>
                    </div>
                    <div className="bg-[#666666] rounded-2xl max-w-6xl">
                        <div className="mx-auto md:w-[1100px] max-w-7xl">
                            <div className="grid grid-cols-1 gap-px bg-[#666666]/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl shadow-md">
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-left">Epoch APR</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0%</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                    <p className="text-sm font-medium leading-6 text-white text-center">Supply percentage staked</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-center">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0%</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                    <p className="text-sm font-medium leading-6 text-white text-right">Total staked</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-end">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0$stz</span>
                                    </p>
                                </div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </SideBarLayout>    
        </main>
    );
}