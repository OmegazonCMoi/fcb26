import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-white/25 tracking-wide">
          © 2026 Forum Cybersécurité
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/presentation"
            className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-500"
          >
            Présentation
          </Link>
          <Link
            href="/ateliers"
            className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-500"
          >
            Ateliers
          </Link>
          <Link
            href="/contact"
            className="text-[12px] text-white/25 hover:text-white/50 transition-colors duration-500"
          >
            Contact
          </Link>
          <Link
            href="https://fmenoni.com"
            target="_blank"
            className="text-[12px] text-white hover:text-white/50 transition-colors duration-500"
          >
            FMenoni - Créateur du site
          </Link>
        </div>
      </div>
    </footer>
  );
}
