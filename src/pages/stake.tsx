import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import Header from "@/components/header";
import Snowfall from "react-snowfall";


/* const font = Raleway({ subsets: ["latin"] }); */

export default function Stake() {
  return (
    <main
      className={cn(
        "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
        /* font.className */
      )}
    > 
      <Snowfall color="white" snowflakeCount={200} />
      <Header />
      <h1 className="absolute hidden text-[#646262] lg:flex lg:top-24 lg:text-6xl font-bold p-6">Stake</h1>
      <div className="flex flex-col gap-6 justify-center h-full w-full xl:w-[1100px] mt-[25%] md:mt-[100px]">
          <Card className="flex flex-col gap-4 bg-white w-full max-w-6xl mx-auto">
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold text-[#70bbc9]">%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold text-[#70bbc9]">%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold text-[#70bbc9]">%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col lg:flex-row gap-6">
            <Card className="flex flex-col bg-white w-full max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-semibold text-[#646262]">
                  SUI Staking
                </CardTitle>
                <CardDescription className="text-sm text-gray-400">
                  Whatever time you want
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="flex justify-center gap-4 text-[#646262]">
                    <TabsTrigger value="stake" className="text-lg bg-gray-100 w-[100px] hover:bg-cyan-100 active:bg-cyan-300 active:ring active:ring-cyan-400 focus:bg-gray-300 rounded-full">
                      Stake
                    </TabsTrigger>
                    <TabsTrigger value="reward" className="text-lg bg-gray-100 w-[100px] hover:bg-cyan-100 active:bg-cyan-300 active:ring active:ring-cyan-400 focus:bg-gray-300 rounded-full">
                      Reward
                    </TabsTrigger>
                    <TabsTrigger value="compound" className="text-md bg-gray-100 w-[100px] hover:bg-cyan-100 active:bg-cyan-300 active:ring active:ring-cyan-400 focus:bg-gray-300 rounded-full">
                      Compound
                    </TabsTrigger>
                  </TabsList>
                  <div className="mt-4">
                    <TabsContent value="stake">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </TabsContent>
                    <TabsContent value="reward">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </TabsContent>
                    <TabsContent value="compound">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit1.
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center text-sm text-gray-400 mt-3">
                Connect to your wallet to stake SUI tokens!
              </CardFooter>
            </Card>

            <Card className="bg-white w-full max-w-xl mx-auto">
              <CardHeader>
                <CardTitle className="text-[#646262] font-bold">Balances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-gray-400">Your Balance</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    0<span className="font-normal text-[#70bbc9]"> $STZ</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-gray-400">Your Staked Balance</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    0<span className="font-normal text-[#70bbc9]"> $STZ</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-gray-400">Next Epoch Reward</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    0<span className="font-normal text-[#70bbc9]"> $STZ</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-gray-400">Next Epoch Yield</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    0<span className="text-[#70bbc9] font-normal">%</span>
                  </div>
                </div>
                <Separator className="my-6 text-gray-800" />
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-gray-400">Claimed Rewards</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    0<span className="text-[#70bbc9] font-normal"> $STZ</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-gray-400">Lock time remaining</div>
                  <div className="whitespace-nowrap text-right text-[#646262] font-bold">
                    No Lyte Stacked
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </main>
  );
}
