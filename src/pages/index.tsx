import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";
import BasicContainer from "@/components/containers/basicContainer";
import Footer from "@/components/footer";
import SideBarLayout from "@/components/sidebar/sidebar-layout"
import Header from "@/components/header";
import Snowfall from "react-snowfall";



/* const font = Raleway({ subsets: ["latin"] }); */

export default function Home() {
  return (
    <main
      className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
        /* font.className */
      )}
    >
    <Snowfall color="white" snowflakeCount={200} />  
    <Header /> 
      <h1 className="absolute top-48 md:top-32 text-[#646262] text-3xl md:text-4xl lg:text-6xl font-bold p-6">Welcome to Suitzerland</h1>
      <p className="flex flex-col justify-center w-[80%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos est similique itaque quod ipsum maxime accusantium! Animi, recusandae, dolorum autem perspiciatis nemo sequi voluptatum velit provident delectus est nesciunt ipsam.</p>
    </main>
  );
}
