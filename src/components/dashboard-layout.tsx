"use client";

import type React from "react";

import { useState } from "react";
import { Menu, X, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/sidebar";
import { DarkModeSwitch } from "./datk-mode-switch";

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function DashboardLayout({
  children,
  currentPage,
  onPageChange,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handlePageChange = (page: string) => {
    onPageChange(page);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <div className="bg-card border-b border-border px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-foreground flex-shrink-0"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
            <div className="hidden md:flex items-center gap-2 bg-secondary/20 rounded-lg px-3 py-2 flex-1 max-w-xs">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <Input
                placeholder="Search..."
                className="bg-transparent border-0 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <DarkModeSwitch />
            <Button variant="ghost" size="icon" className="text-foreground">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-border">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-foreground">
                  Raymart Marfil
                </p>
                <p className="text-xs text-muted-foreground">Sales Agent</p>
              </div>
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" />
                <AvatarFallback>RM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-3 sm:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
