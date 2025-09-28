export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-5">
          <h3 className="font-medium">Languages & Frameworks</h3>
          <ul className="mt-3 text-sm text-neutral-600 space-y-1">
            <li>JavaScript, React, Node.js/Express</li>
            <li>SQLite, SQL basics</li>
            <li>HTML5, CSS3, Tailwind</li>
          </ul>
        </div>
        <div className="border rounded-2xl p-5">
          <h3 className="font-medium">Tools</h3>
          <ul className="mt-3 text-sm text-neutral-600 space-y-1">
            <li>Git & GitHub</li>
            <li>Jest, Supertest</li>
            <li>Vite, npm</li>
          </ul>
        </div>
        <div className="border rounded-2xl p-5">
          <h3 className="font-medium">Concepts</h3>
          <ul className="mt-3 text-sm text-neutral-600 space-y-1">
            <li>REST APIs, JSON</li>
            <li>Testing & CI basics</li>
            <li>Accessibility & responsive design</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
