export default function OrdinationProcess() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-headline-md font-headline-md text-primary mb-4">Journey of Discernment</h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-[720px] mx-auto">
          Our four-stage process is designed to support you academically, spiritually, and practically as you prepare for a lifetime of ministry.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {/* Step 1 */}
        <div className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-[80px] font-display-lg text-primary leading-none">1</span>
          </div>
          <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined">description</span>
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Application</h3>
          <p className="text-body-md font-body-md text-on-surface-variant relative z-10">
            Submit your initial dossier, including references, transcripts, and a comprehensive statement of faith and calling.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group mt-0 lg:mt-8">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-[80px] font-display-lg text-primary leading-none">2</span>
          </div>
          <div className="w-12 h-12 bg-secondary-container/30 rounded-full flex items-center justify-center mb-6 text-secondary">
            <span className="material-symbols-outlined">diversity_3</span>
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Mentorship</h3>
          <p className="text-body-md font-body-md text-on-surface-variant relative z-10">
            Engage in a 12-month guided mentorship program with a senior pastoral leader, focusing on practical ministry skills.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-[80px] font-display-lg text-primary leading-none">3</span>
          </div>
          <div className="w-12 h-12 bg-error-container/30 rounded-full flex items-center justify-center mb-6 text-on-error-container">
            <span className="material-symbols-outlined">gavel</span>
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Examination</h3>
          <p className="text-body-md font-body-md text-on-surface-variant relative z-10">
            Appear before the ordination council for a comprehensive theological, biblical, and pastoral examination.
          </p>
        </div>
        {/* Step 4 */}
        <div className="bg-surface rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden group mt-0 lg:mt-8">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="text-[80px] font-display-lg text-primary leading-none">4</span>
          </div>
          <div className="w-12 h-12 bg-primary-fixed/50 rounded-full flex items-center justify-center mb-6 text-on-primary-fixed">
            <span className="material-symbols-outlined">celebration</span>
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Ceremony</h3>
          <p className="text-body-md font-body-md text-on-surface-variant relative z-10">
            The culminating service of laying on of hands, formally recognizing and commissioning you for pastoral ministry.
          </p>
        </div>
      </div>
    </section>
  );
}
