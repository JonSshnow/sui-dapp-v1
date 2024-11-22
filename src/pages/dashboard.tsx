
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
  

const inter = Inter({ subsets: ["latin"] });

export default function Dashboard(){
    return(
        <main
        className={cn(
        "relative w-full min-h-svh h-full max-w-360 mx-auto py-5 px-4",
        inter.className
        )}>
        <SideBarLayout>
            <h1 className="text-white text-3xl md:text-6xl font-bold p-6">DashBoard</h1>
            <Card className="w-[600px] flex flex-col gap-4 self-center bg-zinc-800 ml-60">
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>WIP</CardDescription>
                </CardHeader>
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
        </SideBarLayout>
        </main>
    );
}