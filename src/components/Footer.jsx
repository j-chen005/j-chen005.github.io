export default function Footer() {
  return (
    <footer className="relative z-10 py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#3a3a3a] text-xs tracking-wider">
          © {new Date().getFullYear()} Justin Chen
        </p>
        <p className="text-[#3a3a3a] text-xs tracking-wider">
          Designed & built with React
        </p>
      </div>
    </footer>
  );
}
