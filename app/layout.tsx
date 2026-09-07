import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mohit Jangid | Software Engineer — Backend, Java & Agentic AI Systems",
  description: "Portfolio of Mohit Jangid — Software Engineer specializing in scalable Java & Node.js backend architectures, distributed protocols, and autonomous multi-agent AI systems (LangGraph, Supervisor-Worker pattern). Computer Engineering student at University of Mumbai with hands-on internship and hackathon experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${manrope.variable} h-full antialiased dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body selection:bg-primary selection:text-surface overflow-x-hidden bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
