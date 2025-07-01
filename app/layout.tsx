import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata = {
  title: "Tax Office Marta Mróz Milicz",
  description: "Biuro rachunkowe Milicz - księgowość, kadry, płace, doradztwo."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
} 