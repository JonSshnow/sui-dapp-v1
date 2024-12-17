import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import BasicContainer from "@/components/containers/basicContainer";
import Footer from "@/components/footer";
import SideBarLayout from "@/components/sidebar/sidebar-layout"
import Header from "@/components/header";
import Snowfall from "react-snowfall";
import Image from "next/image";




/* const font = Raleway({ subsets: ["latin"] }); */

export default function Home() {
  return (
    
    <main
      className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-b from-[#242424] from-10% to-[#000000] to-90%",
        /* font.className */
      )}
    >
      <SideBarLayout>
        <Snowfall color="white" snowflakeCount={200} />   
        <Image className="self-center mt-[250px]" src="/images/home_page.png"
              alt="home_logo"
              width={755}
              height={309}
              priority={true}
            />
      </SideBarLayout>
        </main>
  );
}
