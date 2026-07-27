export default function EventsHero() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop bg-surface-container-low relative overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-6">
          Gatherings & Events
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant mb-10">
          Join us in fellowship, learning, and ministry. Discover upcoming opportunities to connect with the IPMM community across our various branches.
        </p>
      </div>
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #b6c4ff 0%, transparent 50%)" }}></div>
    </section>
  );
}
