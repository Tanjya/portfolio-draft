export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
            Self-taught Software Developer<br/>building APIs & data-driven apps
          </h1>
          <p className="mt-4 text-neutral-600">
            Econ & Accounting background → pivoting into tech. I build practical tools:
            dashboards, REST APIs, and small full-stack apps. Interested in fintech,
            data, and product-minded engineering.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-black text-white">View Projects</a>
            <a href="/Tanjya_Akther_CV.pdf" className="px-5 py-3 rounded-xl border">Download CV</a>
          </div>
        </div>
        <div className="border rounded-2xl p-6">
          <ul className="text-sm space-y-3">
            <li>✅ REST APIs (Node/Express)</li>
            <li>✅ Frontend UIs (React / Vite)</li>
            <li>✅ Databases (SQLite, SQL basics)</li>
            <li>✅ Testing (Jest, Supertest)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
