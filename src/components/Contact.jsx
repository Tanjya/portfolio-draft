export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 border-t">
      <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
      <div className="mt-4 text-neutral-700 space-y-1">
        <p>Email: <a className="underline" href="mailto:tanjya@example.com">tanjya@example.com</a></p>
        <p>GitHub: <a className="underline" target="_blank" href="https://github.com/Tanjya" rel="noreferrer">github.com/Tanjya</a></p>
        <p>LinkedIn: <a className="underline" target="_blank" href="https://linkedin.com/in/your-handle" rel="noreferrer">linkedin.com/in/your-handle</a></p>
      </div>
    </section>
  );
}
