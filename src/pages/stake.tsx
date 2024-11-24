import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import SideBarLayout from "@/components/sidebar/sidebar-layout";
import { Separator } from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function Stake() {
  return (
    <SideBarLayout>
      <div
        className={cn(
          "relative w-full min-h-screen h-full flex flex-col items-center justify-center mx-auto py-5 px-4",
          inter.className
        )}
      >
        <h1 className="text-white text-3xl md:text-6xl font-bold p-6 text-center">
          Stake
        </h1>
        <div className="flex flex-col gap-6 justify-center h-full w-full">
          <Card className="flex flex-col gap-4 bg-zinc-800 w-full max-w-6xl mx-auto">
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold">%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold">%</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-400">Test</p>
                  <p className="text-4xl font-semibold">%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col lg:flex-row gap-6">
            <Card className="flex flex-col bg-zinc-800 w-full max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-semibold">
                  SUI Staking
                </CardTitle>
                <CardDescription className="text-sm text-gray-400">
                  Whatever time you want
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="flex justify-center">
                    <TabsTrigger value="stake" className="text-lg">
                      Stake
                    </TabsTrigger>
                    <TabsTrigger value="reward" className="text-lg">
                      Reward
                    </TabsTrigger>
                    <TabsTrigger value="compound" className="text-lg">
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
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </TabsContent>
                  </div>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center text-sm text-gray-400 mt-3">
                Connect to your wallet to stake SUI tokens!
              </CardFooter>
            </Card>

            <Card className="bg-zinc-800 w-full max-w-xl mx-auto">
              <CardHeader>
                <CardTitle>Balances</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-sky-350">Your Balance</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    0<span className="text-white/60 font-normal"> $SUI</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-sky-350">Your Staked Balance</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    0<span className="text-white/60 font-normal"> $SUI</span>
                  </div>
                </div>
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-sky-350">Next Epoch Reward</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    0<span className="text-white/60 font-normal"> $SUI</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sky-350">Next Epoch Yield</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    0<span className="text-white/60 font-normal">%</span>
                  </div>
                </div>
                <Separator className="my-6 bg-gray-400" />
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="text-sky-350">Claimed Rewards</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    0<span className="text-white/60 font-normal"> $SUI</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-sky-350">Lock time remaining</div>
                  <div className="whitespace-nowrap text-right font-bold">
                    No Lyte Stacked
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SideBarLayout>
  );
}
