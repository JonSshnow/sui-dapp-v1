/* eslint-disable react/jsx-no-comment-textnodes */
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
  } from "@/components/ui/sidebar"
import { title } from "process"
import Link from "next/link" 
import { LayoutDashboardIcon, Landmark, Info, ChartNoAxesCombined } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Image from "next/image";

  const items = [
    {
      title: "Dashboard",
      url:"/dashboard",
      icon : LayoutDashboardIcon,
    },
    {
      title: "Staking",
      url:"/stake",
      icon : Landmark,
    },
    {
      title: "Bonds",
      url:"/bonds",
      icon : ChartNoAxesCombined,
    },
    {
      title: "About",
      url:"/setting",
      icon : Info,
    },
  ]
 
  export function AppSidebar() {
    const {
      state,
      open,
      setOpen,
      openMobile,
      setOpenMobile,
      isMobile,
      toggleSidebar,
    } = useSidebar()
    return (
      <Sidebar collapsible="icon">
        {useSidebar().state === 'expanded' && (
          <SidebarHeader>
            <Image src="/images/Logo.png"
              alt="suitzerland_logo"
              width={183}
              height={36}
              priority={true}
            />
            {/* <span className="text-xl font-bold mt-[10px] text-[#FFFFFF]">
              Suitzerland
            </span> */}
          </SidebarHeader>
        )}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="focus:bg-[#4286F4] hover:ring hover:ring-white rounded-md active:ring active:ring-blue-600 active:bg-[#4286F4]" asChild>
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
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
              <Progress value={30}/>
              <Progress value={50}/>
              <Progress value={70}/>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    )
  }