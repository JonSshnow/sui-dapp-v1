import SideBarLayout from "@/components/sidebar/sidebar-layout";
import { cn } from "@/lib/utils";
import Snowfall from "react-snowfall";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";


export default function Bonds(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-b from-[#242424] from-10% to-[#000000] to-90%",
            /* font.className */
        )}>
            <SideBarLayout>
                <Snowfall color="white" snowflakeCount={200} />
                <Image className="relative top-5 left-[450px] 2xl:left-[700px] h-[53px]" 
                    src="/images/Bonds_title.png"
                    alt="Bonds_title"
                    width={177}
                    height={53}
                    priority={true}
                />                
                <div className="flex flex-col gap-6 py-6 h-full w-full 2xl:w-[1500px] mt-[150px] justify-center items-center">
                    <Card className="bg-gradient-to-b from-[#90D5FF] from-10% to-[#4286F4] to-90%">
                        <CardHeader>
                            <CardTitle className="text-md font-bold">Bond</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="number" placeholder="$stz" className="bg-slate-300/50  text-white active:ring-1 active:ring-white hover:ring-1 hover:ring-white "/>
                                <Button className="bg-slate-300/50 text-white ring-1 ring-white active:opacity-50 hover:opacity-50">Max</Button>
                            </div>
                            <div className="flex w-full items-center">
                                <Button className="w-full text-white bg-[#373B44]">Bond</Button>
                            </div>  
                        </CardContent>
                    </Card>
                    <div className="bg-[#666666] rounded-2xl max-w-6xl">
                        <div className="mx-auto w-[750px] 2xl:w-[1100px] max-w-7xl">
                            <div className="grid grid-cols-1 gap-px bg-[#666666]/5 sm:grid-cols-2 lg:grid-cols-2 rounded-2xl shadow-md">
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl">
                                    <p className="text-md font-medium leading-6 text-white text-left">Bond price</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-start">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0$stz</span>
                                    </p>
                                </div>
                                <div className="bg-gradient-to-b from-[#373B44] from-10% to-[#4286F4] to-90% px-4 py-6 sm:px-6 lg:px-8 rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl">
                                    <p className="text-md font-medium leading-6 text-gray-400 text-white text-right">Remaining bonds</p>
                                    <p className="mt-2 flex items-baseline gap-x-2 justify-end">
                                        <span className="text-4xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#6DD5FA] via-[#C7EEFC] to-[#6DD5FA]">0 bonds</span>
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <p className="text-center w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi adipisci soluta dicta voluptatem quae corporis cum, dolorum accusantium tempora. Nemo provident maiores eaque dicta? Quae et atque fuga asperiores quia.</p>

                </div>
            </SideBarLayout>
        </main>

    );
}