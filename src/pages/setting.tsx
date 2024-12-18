
import { Inter, Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import Header from "@/components/header";
import Snowfall from "react-snowfall";
import Image from "next/image";
  

/* const font = Raleway({ subsets: ["latin"] }); */

export default function Setting(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-b from-[#242424] from-10% to-[#000000] to-90%",
            /* font.className */
        )}>
            <SideBarLayout>
                <Snowfall color="white" snowflakeCount={200} />
                <Image className="relative top-5 left-[450px] 3xl:left-[700px] h-[53px]" 
                    src="/images/About_title.png"
                    alt="about_title"
                    width={173}
                    height={53}
                    priority={true}
                />                
                <div className="flex flex-col gap-3 py-6 h-[1100px] w-[1100px] 3xl:w-[1500px] justify-start items-start">
                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">The Project</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">The Team</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">How it works ?</h3>
                    <p className="text-left">
                        Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br/>
                        Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<br/>
                        Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.<br/>
                        Step 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.<br/>
                        Step 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">Tokenomics</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">Disclaimer</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </SideBarLayout>
        </main>
    );
}