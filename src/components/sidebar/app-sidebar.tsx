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
            <SidebarGroupContent>
            <SidebarMenu className="flex flex-col items-center mt-[25px] gap-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="w-full focus:bg-[#4286F4] hover:ring hover:ring-white rounded-md active:ring active:ring-blue-600 active:bg-[#4286F4]" asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className="text-xl">{item.title}</span>
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
              <Progress value={30} title="Next Epoch Yield: 12:33:10" />
              <Progress value={50} title="Next Epoch Reward: 12:33:10" />
              <Progress value={70} title="Claimable Reward: 213.2k $stz" />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
      </Sidebar>
    )
  }