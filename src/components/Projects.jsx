import { projects } from "../data/projects";

function TechList({ items }) {
  return (
    <p className="mt-2 text-xs text-neutral-500">
      Tech: {items.join(" · ")}
    </p>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
      <p className="mt-2 text-neutral-600">A few recent builds I’m proud of.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="border rounded-2xl overflow-hidden">
            <div className="aspect-[16/9] bg-neutral-100 grid place-items-center">
              <span className="text-neutral-400 text-sm">{p.imgAlt}</span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.blurb}</p>
              <TechList items={p.tech} />
              <div className="mt-4 flex gap-3">
                <a className="px-4 py-2 rounded-lg bg-black text-white text-sm" href={p.live} target="_blank" rel="noreferrer">Live</a>
                <a className="px-4 py-2 rounded-lg border text-sm" href={p.code} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
