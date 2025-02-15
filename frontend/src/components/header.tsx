"use client"

import { Bell, Search, Moon, Menu } from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white border-b shadow-sm">
      <div className="flex h-full items-center px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4 w-[250px]">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Image src="/umang-logo.png" alt="UMANG" width={32} height={32} className="h-8 w-auto" />
            <span className="text-lg font-bold text-blue-600">UMANG</span>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 max-w-2xl mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input type="text" placeholder='Search For "Aadhaar Services"' className="w-full pl-10 h-10" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            <Image src="/chatbot-icon.png" alt="ISL Chatbot" width={20} height={20} />
            <span>ISL Chatbot</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>New scheme available</DropdownMenuItem>
              <DropdownMenuItem>Document verified</DropdownMenuItem>
              <DropdownMenuItem>Payment received</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <span className="font-medium">Achintya</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

