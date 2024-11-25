import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Children } from "react"
import ConnectWallet from "../wallet/connect-wallet"
 
export default function SideBarLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <SidebarTrigger className="text-[#646262]" />
      <main className="w-[100%] flex">
      <ConnectWallet/>
        {children}
      </main>
    </SidebarProvider>
  )
}