import type { Metadata } from "next";
import { Space_Grotesk, Inter, VT323 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Forum Cybersécurité 2026",
  description:
    "Forum Cybersécurité 2026 — Découvrez les enjeux de la sécurité numérique à travers des ateliers immersifs et des conférences. Avec le soutien de la Banque de France et la Ville d'Annecy.",
  openGraph: {
    title: "Forum Cybersécurité 2026",
    description:
      "Un événement pour découvrir différentes attaques et défenses en cybersécurité avec différents ateliers et sujets de discussion.",
    type: "website",
    siteName: "Forum Cybersécurité 2026",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${vt323.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
