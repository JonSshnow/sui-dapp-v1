
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
  

const font = Raleway({ subsets: ["latin"] });

export default function Setting(){
    return(
        <main
        className={cn(
        "relative w-full min-h-svh h-full max-w-360 mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
        font.className
        )}>
        <SideBarLayout>
            <h1 className="absolute top-10 md:top-4 text-[#646262] text-3xl md:text-6xl font-bold p-6">Settings</h1>
            <div className="flex flex-col gap-6 justify-center h-full w-full mt-[1%] md:mt-[30px] md:ml-[2%]">
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
        </SideBarLayout>
        </main>
    );
}