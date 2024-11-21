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
import { LayoutDashboardIcon, Layers, Link, Calculator, Settings, Handshake  } from "lucide-react"

  const items = [
    {
      title: "Dashboard",
      url:"#",
      icon : LayoutDashboardIcon,
    },
    {
      title: "Stake",
      url:"#",
      icon : Layers,
    },
    {
      title: "Referral",
      url:"#",
      icon : Handshake,
    },
    {
      title: "Bond",
      url:"#",
      icon : Link,
    },
    {
      title: "Calculator",
      url:"#",
      icon : Calculator,
    },
    {
      title: "Setting",
      url:"#",
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
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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