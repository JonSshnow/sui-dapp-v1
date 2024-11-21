import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Children } from "react"
 
export default function SideBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar /> 
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}