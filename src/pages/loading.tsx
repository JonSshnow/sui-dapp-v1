import { cn } from "@/lib/utils";

export default function Loading(){
    return(
        <main
        className={cn(
            "relative w-full min-h-svh h-full max-w-360 flex flex-col items-center justify-center mx-auto py-5 px-4 bg-gradient-to-r from-[#fbfdf3] to-[#8dd8e6]",
            /* font.className */
        )}>
            <h1>Loading...</h1>
        </main>
    )
}