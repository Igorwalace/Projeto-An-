// react/next
import type { Metadata } from "next";

//css
import "./globals.css";

//fonts
import { poppins } from "../../fonts";

//contexts
import { AppFirestore } from "./contexts/firestore-storys";

export const metadata: Metadata = {
  title: "Anô",
  description: "Crie histórias anônimamente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`bg-[#FAFAFA] ${poppins.className}`} suppressHydrationWarning={true} >
        <AppFirestore>
        {children}
        </AppFirestore>
      </body>
    </html>
  );
}
