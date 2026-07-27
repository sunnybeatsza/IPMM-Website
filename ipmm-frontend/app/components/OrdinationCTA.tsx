export default function OrdinationCTA() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop pb-32">
      <div className="max-w-container-max mx-auto bg-primary text-on-primary rounded-xl overflow-hidden flex flex-col md:flex-row items-center shadow-sm relative">
        <div className="absolute inset-0 bg-primary-container opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)" }}></div>
        <div className="p-12 md:w-2/3 relative z-10">
          <h2 className="text-headline-md font-headline-md mb-4">Need Guidance on Your Journey?</h2>
          <p className="text-body-md font-body-md text-primary-fixed-dim mb-8 max-w-xl">
            Our ordination advisors are available to discuss your specific calling, review your eligibility, and answer any questions you have about the process.
          </p>
          <button className="bg-secondary text-on-secondary px-8 py-3 rounded-DEFAULT text-label-md font-label-md hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors shadow-sm inline-flex items-center gap-2">
            <span className="material-symbols-outlined">calendar_month</span>
            Schedule a Consultation
          </button>
        </div>
        <div className="md:w-1/3 p-12 flex justify-center relative z-10">
          <div className="w-32 h-32 bg-surface rounded-full flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined text-[64px]">support_agent</span>
          </div>
        </div>
      </div>
    </section>
  );
}
