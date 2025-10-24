"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { DashboardOverview } from "@/components/pages/dashboard-overview";
import { VehiclesPage } from "@/components/pages/vehicles-page";
import { BlogsPage } from "@/components/pages/blogs-page";
import { ClientsPage } from "@/components/pages/clients-page";
import { AnalyticsPage } from "@/components/pages/analytics-page";
import { SettingsPage } from "@/components/pages/settings-page";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardOverview />;
      case "vehicles":
        return <VehiclesPage />;
      case "blogs":
        return <BlogsPage />;
      case "clients":
        return <ClientsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <DashboardLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </DashboardLayout>
    </ThemeProvider>
  );
}
