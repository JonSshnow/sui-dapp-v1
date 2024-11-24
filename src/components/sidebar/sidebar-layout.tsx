import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Children } from "react"
import ConnectWallet from "../wallet/connect-wallet"
 
export default function SideBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <SidebarTrigger />
      <main className="w-[100%] flex">
      <div className="w-full flex justify-center lg:absolute lg:top-5 lg:right-5 mb-4 lg:mb-0">
        <ConnectWallet/>
      </div>
        {children}
      </main>
    </SidebarProvider>
  )
}