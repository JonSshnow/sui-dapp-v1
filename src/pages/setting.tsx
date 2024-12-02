
import { Inter, Raleway } from "next/font/google";
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
import Header from "@/components/header";
import Snowfall from "react-snowfall";
  

/* const font = Raleway({ subsets: ["latin"] }); */

export default function Setting(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
            /* font.className */
        )}>
            <Snowfall color="white" snowflakeCount={200} />
            <Header />
            <h1 className="absolute hidden text-[#646262] md:flex md:top-16 md:text-6xl font-bold p-6">Settings</h1>
            <div className="flex flex-col gap-6 justify-center h-full w-full mt-[-400px] md:mt-[0%]">
            <Card className="flex flex-col gap-4 bg-white w-[60%] max-w-6xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-[#646262]">Settings</CardTitle>
                    <CardDescription>Set Priority fees settings</CardDescription>
                </CardHeader>
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
            </div>
        </main>
    );
}