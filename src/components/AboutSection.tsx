export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">Our Story</p>
        <h2 className="text-3xl font-bold md:text-5xl">
          About <span className="text-gradient-gold">Amazing Tools Company</span>
        </h2>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Amazing Tools Company is a premier destination for luxury home finishes and
            fixtures in Kigali, Rwanda. We believe every space deserves to be extraordinary
            — from the faucet you touch each morning to the chandelier that sets the mood
            for every evening.
          </p>
          <p>
            Our curated collection features the finest bathroom fixtures, designer lighting,
            precision plumbing solutions, and elegant electrical finishes sourced from
            trusted manufacturers worldwide. We serve homeowners, interior designers,
            architects, and builders who refuse to compromise on quality.
          </p>
        </div>
        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
}
