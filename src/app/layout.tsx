import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Ilham | About",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="mx-auto max-w-6xl">
          <Header />
          <div className="pt-14">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
