import "./globals.css";

export const metadata = {
  title: "GYMFLOW PRO",
  description: "Premium Gym Management Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
