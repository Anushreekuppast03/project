export default function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`relative w-full px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
