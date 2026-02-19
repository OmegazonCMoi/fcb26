import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-white/15 tracking-wide">
          © 2026 Forum Cybersécurité
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/presentation"
            className="text-[12px] text-white/15 hover:text-white/40 transition-colors duration-500"
          >
            Présentation
          </Link>
          <Link
            href="/ateliers"
            className="text-[12px] text-white/15 hover:text-white/40 transition-colors duration-500"
          >
            Ateliers
          </Link>
          <Link
            href="/contact"
            className="text-[12px] text-white/15 hover:text-white/40 transition-colors duration-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
