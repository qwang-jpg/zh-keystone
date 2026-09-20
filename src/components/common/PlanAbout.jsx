// Shared "about the program" section used by both the H-1B Infinity Plan
// and STEM OPT Ready Plan pages: a bold headline + highlighted takeaway on
// the left, supporting paragraphs on the right.
export default function PlanAbout({ heading, highlight, paragraphs }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight text-keystone-ink md:text-4xl">{heading}</h2>
          <p className="mt-6 border-l-2 border-keystone-green pl-5 text-base font-semibold leading-relaxed text-keystone-ink">
            {highlight}
          </p>
        </div>
        <div className="text-base leading-relaxed text-muted-foreground lg:pt-2">
          {paragraphs.map((p, i) => (
            <p key={i} className={i > 0 ? "mt-4" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
