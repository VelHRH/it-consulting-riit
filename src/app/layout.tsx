import "./globals.css";
import { Header } from "$/modules/common/components/Header";
import { Footer } from "$/modules/common/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col pt-[4.75rem] bg-slate-50">
        <Header />
        <main
          className="min-h-screen w-full"
          style={{
            backgroundImage: `url("/assets/svg/background.svg")`,
            backgroundSize: "cover",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
