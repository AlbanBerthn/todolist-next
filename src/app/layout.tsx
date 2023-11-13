import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <div className="root">{children}</div>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
