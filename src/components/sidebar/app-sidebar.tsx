import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
  } from "@/components/ui/sidebar"
import { title } from "process"
import Link from "next/link" 
import { LayoutDashboardIcon, Layers, Settings, HouseIcon } from "lucide-react"

  const items = [
    {
      title: "Home",
      url:"/",
      icon : HouseIcon,
    },
    {
      title: "Dashboard",
      url:"/dashboard",
      icon : LayoutDashboardIcon,
    },
    {
      title: "Stake",
      url:"/stake",
      icon : Layers,
    },
    {
      title: "Setting",
      url:"/setting",
      icon : Settings,
    },
  ]
   
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
        <span className="text-xl lg:text-4xl font-extrabold">
          Suitzerland
        </span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup> 
          <SidebarGroup />
        </SidebarContent>
      </Sidebar>
    )
  }