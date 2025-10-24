import type { Metadata } from "next";
import "@/lib/globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Vehicle Sales Admin Dashboard",
  description: "Admin dashboard for vehicle sales management",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <ConvexClientProvider>
        <html lang="en">
          <body className={`font-sans antialiased`}>
            {children}
            <Analytics />
          </body>
        </html>
      </ConvexClientProvider>
    </ConvexAuthNextjsServerProvider>
  );
}
