
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
            <h1 className="text-white text-3xl md:text-6xl font-bold p-6">Dashboard</h1>
            <BasicContainer/>
        </SideBarLayout>
        </main>
    );
}