
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Install this via npm

export const metadata = {
  title: "Product Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
