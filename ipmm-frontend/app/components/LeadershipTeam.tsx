export default function LeadershipTeam() {
  return (
    <>
      {/* Header Section */}
      <section className="relative pt-24 pb-16 px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-display-lg text-display-lg text-primary mb-6">
            Our Leadership
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Guiding the theological and pastoral vision of IPMM with wisdom,
            stewardship, and a commitment to academic excellence.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-8"></div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(30,58,138,0.05)] overflow-hidden">
          <div className="lg:col-span-5 h-full min-h-[400px]">
            <img
              className="w-full h-full object-cover"
              alt="Apostle GM Masemola"
              src="/images/Apostle GM Masemola.jpeg"
            />
          </div>
          <div className="lg:col-span-7 p-12 lg:pr-16">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary text-label-sm font-label-sm rounded-full mb-4">
              Founder &amp; Visionary
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Apostle GM Masemola
            </h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant mt-6">
              <p>
                Apostle GM Masemola founded IPMM with a profound vision to equip
                global church leaders. His over forty years of ministry span
                continents, bridging cultural divides with theological
                integrity.
              </p>
              <p>
                A recognized authority on pastoral stewardship, his works have
                shaped modern seminary curricula, emphasizing the sacred balance
                between spiritual devotion and practical leadership in an
                evolving world.
              </p>
            </div>
            <div className="mt-8 border-l-4 border-secondary bg-surface-container-low p-6 rounded-r-lg">
              <p className="font-headline-sm text-headline-sm italic text-primary">
                "Where there is no guidance, a people falls, but in an abundance
                of counselors there is safety."
              </p>
              <p className="font-label-md text-label-md text-on-surface-variant mt-2">
                — Proverbs 11:14
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* President Section */}
      <section className="py-16 px-margin-desktop max-w-container-max mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(30,58,138,0.05)] overflow-hidden">
          <div className="lg:col-span-7 p-12 lg:pl-16 order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-primary-container text-on-primary text-label-sm font-label-sm rounded-full mb-4">
              President
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Archbishop SR Kgomo
            </h2>
            <div className="space-y-4 font-body-md text-body-md text-on-surface-variant mt-6">
              <p>
                As President, Archbishop SR Kgomo leads the institute's academic
                excellence and pastoral training programs. Her background in
                both theological study and organizational management brings a
                vital pragmatism to ministry education.
              </p>
              <p>
                She is passionately committed to fostering a rigorous
                intellectual environment that remains deeply rooted in spiritual
                serenity, ensuring graduates are prepared for both the pulpit
                and the community.
              </p>
            </div>
            <div className="mt-8">
              <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-4">
                Key Focus Areas
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    Curriculum Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    check_circle
                  </span>
                  <span className="font-body-md text-body-md text-on-surface">
                    Pastoral Resilience Training
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-outline flex items-center justify-center text-primary hover:bg-primary-container hover:text-on-primary transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 h-full min-h-[400px] order-1 lg:order-2">
            <img
              className="w-full h-full object-cover"
              alt="Archbishop SR Kgomo"
              src="/images/Archbishop_SR_Kgomo.jpeg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
