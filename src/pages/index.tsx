import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import BasicContainer from "@/components/containers/basicContainer";
import Footer from "@/components/footer";
import SideBarLayout from "@/components/sidebar/sidebar-layout"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4",
        inter.className
      )}
    >
      {/* <Header /> */}
      <SideBarLayout> <h1 className="text-white text-3xl md:text-6xl font-bold p-8">Welcome to Suitzerland</h1><p className="flex flex-col justify-center ml">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos est similique itaque quod ipsum maxime accusantium! Animi, recusandae, dolorum autem perspiciatis nemo sequi voluptatum velit provident delectus est nesciunt ipsam.</p></SideBarLayout>
    </main>
  );
}
