import type { Metadata } from "next";
import "@/lib/globals.css"
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server"
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Poppins } from "next/font/google"
import { AdminGuard } from "@/components/auth/admin-guard";

const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
})

export const metadata: Metadata = {
  title: "ManilaPro - Buyer",
  description: "This is the buyer page",
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
          <body
            className={`${poppinsFont.className} antialiased`}
          > 
          <AdminGuard>

            {children}
          </AdminGuard>
          </body>
        </html>
      </ConvexClientProvider>
    </ConvexAuthNextjsServerProvider>
  );
}
