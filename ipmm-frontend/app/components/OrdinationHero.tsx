export default function OrdinationHero() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop bg-surface-container-low relative overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-6">
          The Path to Ordination
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
          A sacred journey of preparation, discernment, and commitment. Explore the rigorous and deeply spiritual process of becoming an ordained minister within our tradition.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-DEFAULT text-label-md font-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-md hover:shadow-lg">
            Begin Application
          </button>
          <button className="border border-primary text-primary px-8 py-3 rounded-DEFAULT text-label-md font-label-md hover:bg-primary-container/10 transition-all">
            Download Guide
          </button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #b6c4ff 0%, transparent 50%)" }}></div>
    </section>
  );
}
