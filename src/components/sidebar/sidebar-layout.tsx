import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Children } from "react"
 
export default function SideBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <SidebarTrigger />
      <main className="w-[100%] flex justify-center content-center">
        {children}
      </main>
    </SidebarProvider>
  )
}