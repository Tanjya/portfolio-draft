export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight">Tanjya</a>
        <ul className="hidden sm:flex gap-6 text-sm">
          <li><a href="#projects" className="hover:opacity-70">Projects</a></li>
          <li><a href="#skills" className="hover:opacity-70">Skills</a></li>
          <li><a href="#about" className="hover:opacity-70">About</a></li>
          <li><a href="#contact" className="hover:opacity-70">Contact</a></li>
        </ul>
        <div className="hidden sm:flex gap-3">
          <a href="https://github.com/Tanjya" target="_blank" className="text-sm underline underline-offset-4" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-handle" target="_blank" className="text-sm underline underline-offset-4" rel="noreferrer">LinkedIn</a>
        </div>
      </nav>
    </header>
  );
}
