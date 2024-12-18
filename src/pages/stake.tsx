import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Header from "@/components/header";
import Snowfall from "react-snowfall";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


/* const font = Raleway({ subsets: ["latin"] }); */

export default function Stake() {
  return (
    <main
      className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-b from-[#242424] from-10% to-[#000000] to-90%",
        /* font.className */
      )}
    >
      <SideBarLayout>
        <Snowfall color="white" snowflakeCount={200} />
        <Image className="relative top-5 left-[450px] 3xl:left-[700px] h-[53px]" 
          src="/images/Staking_title.png"
          alt="staking_title"
          width={196}
          height={53}
          priority={true}
        />
        <div className="flex flex-col gap-6 py-6 h-full w-full mt-[150px] justify-center items-center">
          <div className="bg-[#666666] rounded-2xl max-w-6xl">
            <div className="mx-auto w-[750px] 3xl:w-[1500px] max-w-7xl">
                <div className="grid grid-cols-1 gap-px bg-[#666666]/5 sm:grid-cols-1 lg:grid-cols-3 rounded-2xl shadow-md">
                    <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                        <p className="text-sm font-medium leading-6 text-white text-left">$stz price</p>
                        <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                            <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 sm:rounded-tr-2xl lg:rounded-none">
                        <p className="text-sm font-medium leading-6 text-white text-center">Marketcap</p>
                        <p className="mt-2 flex items-baseline gap-x-2 justify-center">
                            <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                        <p className="text-sm font-medium leading-6 text-white text-right">Total value locked</p>
                        <p className="mt-2 flex items-baseline gap-x-2 justify-end">
                            <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">$0</span>
                        </p>
                    </div>
                </div>                   
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-[750px]">
            <Card className="flex flex-col bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% w-full max-w-3xl mx-auto">
              <CardContent>
                <div className="px-2 py-2 w-full">
                    <p className="text-sm font-bold leading-6 text-white text-start">$stz balance</p>
                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0 $stz</span>
                    </p>
                </div>
                <div className="px-2 py-2 w-full">
                    <p className="text-sm font-bold leading-6 text-white text-start">Stacked balance</p>
                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0 $stz</span>
                    </p>
                </div>
                <div className="px-2 py-2 w-full">
                    <p className="text-sm font-bold leading-6 text-white text-start">Claimable balance</p>
                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0 $stz</span>
                    </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-b from-[#90D5FF] from-10% to-[#4286F4] to-90% h-[170px]">
                <CardHeader>
                    <CardTitle className="text-md font-bold">Stake</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="number" placeholder="$stz" className="bg-slate-300/50  text-white active:ring-1 active:ring-white hover:ring-1 hover:ring-white "/>
                        <Button className="bg-slate-300/50 text-white ring-1 ring-white active:opacity-50 hover:opacity-50">Max</Button>
                    </div>
                    <div className="flex w-full items-center gap-3">
                        <Button className="text-white bg-[#373B44] active:opacity-50 hover:opacity-50">Stake</Button>
                        <Button className="text-white bg-[#373B44] active:opacity-50 hover:opacity-50">Unstake</Button>
                        <Button className="text-white bg-[#373B44] active:opacity-50 hover:opacity-50">Compound</Button>
                    </div>  
                </CardContent>
            </Card>
            <div className="flex flex-col gap-5 h-full">
              <Card className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% w-full max-w-xl mx-auto h-[190px]">
                <CardHeader>
                  <CardTitle className="text-white font-bold">Daily Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                    <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0 $stz</span>
                </p>
                </CardContent>
              </Card>
              <Button className="bg-gradient-to-l from-[#90D5FF] from-10% to-[#4286F4] to-90% h-[50px] text-white ring-1 ring-white active:opacity-50 hover:opacity-50">Claim</Button>
            </div>
            
          </div>
        </div>
      </SideBarLayout> 
    </main>
  );
}
