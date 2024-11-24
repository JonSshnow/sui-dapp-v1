
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import BasicContainer from "@/components/containers/basicContainer";
  

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard(){
    return(
        <main
        className={cn(
        "relative w-full min-h-svh h-full max-w-360 mx-auto py-5 px-4",
        inter.className
        )}>
        <SideBarLayout>
        <h1 className="absolute top-10 md:top-4  text-white text-3xl md:text-4xl lg:text-6xl font-bold p-6">Dashboard</h1>
            {/* <BasicContainer/> */}
            <div className="flex flex-col gap-6 py-6 h-full w-full mt-[25%] md:mt-[30px] md:ml-[2%] justify-center">
                <div className="bg-zinc-800 rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl">
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl">
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-zinc-800 rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-2 rounded-2xl">
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
                                </p>
                            </div>
                            <div className="bg-zinc-800 px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-white">$0</span>
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