"use client";

import {
  LayoutDashboard,
  Car,
  BookOpen,
  Users,
  TrendingUp,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "vehicles", label: "Vehicles", icon: Car },
  { id: "blogs", label: "Blogs", icon: BookOpen },
  { id: "clients", label: "Clients", icon: Users },
  { id: "analytics", label: "Analytics", icon: TrendingUp },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar({ isOpen, currentPage, onPageChange }: SidebarProps) {
  return (
    <div
      className={cn(
        "bg-card border-r border-border transition-all duration-300 flex flex-col",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          {isOpen && (
            <span className="font-bold text-lg text-foreground">Marfil</span>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 text-foreground hover:bg-secondary/20",
                isActive && "bg-red-accent text-white hover:bg-red-accent"
              )}
              onClick={() => onPageChange(item.id)}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span>{item.label}</span>}
              {isOpen && isActive && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </Button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground"
        >
          <span className="text-lg">↪</span>
          {isOpen && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
}
