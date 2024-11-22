
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

export default function Stake(){
    return(
        <main
        className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4",
        inter.className
        )}>
        <SideBarLayout>
            <h1 className="text-white text-3xl md:text-6xl font-bold p-6">Stake</h1>
            <div className="flex flex-col gap-6 justify-center">
            <Card className="w-[600px] flex flex-col gap-4 self-center bg-zinc-800 ml-60">
                <CardHeader>
                    <CardTitle>Card 1 </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
            <Card className="w-[600px] flex flex-col gap-4 self-center bg-zinc-800 ml-60">
                <CardHeader>
                    <CardTitle>Staking</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam voluptate laudantium. Facere quisquam unde cupiditate aliquid assumenda, molestias velit adipisci accusamus cum. Modi id cumque aperiam beatae earum excepturi.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p></p>
                </CardContent>
            </Card>
            <Card className="w-[600px] flex flex-col gap-4 self-center bg-zinc-800 ml-60">
                <CardHeader>
                    <CardTitle>Balances</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus beatae odio eveniet officiis sit cumque, maxime animi saepe impedit voluptates cum illo omnis eius iusto quia? Rem molestias nihil quia.</CardDescription>
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