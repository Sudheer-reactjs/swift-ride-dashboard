import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-side-bar/AppSidebar";
import TopBar from "@/components/app-top-bar/TopBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dark`}
      >
        <SidebarProvider>
          <AppSidebar/>
          <div className="flex flex-1 flex-col w-full md:w-[calc(100%-256px)]">
             <TopBar />
            <div className="flex w-full flex-col gap-4 p-4">
            {children}
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
