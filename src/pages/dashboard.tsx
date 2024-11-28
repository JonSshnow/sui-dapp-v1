
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Snowfall from "react-snowfall";
  

/* const font = Raleway({ subsets: ["latin"] }); */

export default function Dashboard(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
            /* font.className */
        )}>
            <Snowfall color="white" snowflakeCount={200} />
            <Header />
            <h1 className="absolute hidden text-[#646262] lg:flex lg:top-24 lg:text-6xl font-bold p-6">Dashboard</h1>
            {/* <BasicContainer/> */}
            <div className="flex flex-col gap-6 py-6 h-full w-full xl:w-[1500px] mt-[25%] md:mt-[50px] justify-center items-center">
                <div className="bg-white rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-[#646262]/5 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl shadow-md">
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="bg-white rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-[#646262]/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl shadow-md">
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                        </div>                   
                    </div>
                </div>
                <div className="bg-white rounded-2xl max-w-6xl">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-px bg-[#646262]/5 sm:grid-cols-2 lg:grid-cols-2 rounded-2xl shadow-md">
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                            <div className="bg-white px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                <p className="text-sm font-medium leading-6 text-gray-400 text-center sm:text-left">Market Cap</p>
                                <p className="mt-2 flex items-baseline gap-x-2 justify-center sm:justify-start">
                                    <span className="text-4xl font-semibold tracking-tight text-[#70bbc9]">$0</span>
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </main>
    );
}