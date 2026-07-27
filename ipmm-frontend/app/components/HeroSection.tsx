export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[819px] flex items-center overflow-hidden bg-surface-container-low">
      <div className="absolute inset-0 z-0">
        <div className="bg-cover bg-center w-full h-full object-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-peTszqgljnqKVAdcZfF71qxb8-n7Jw2XZjaKlI65u20oBYiRiVo8S4ZZ7hw8bVEU16dXLfPPuErklZ9XJYNz64SIItG_q0RJ483MIsIn6S7LdS-y80--Drf00mdB8q3WsiZIes8AIcIhDkL0eBWq2uuV7nOqTItxyGeoedTxjalQzAquMhV8KHzYFVjsjiy249ASybE3TzPK2Ce1d1R2c_oPOp4cQF-7yqjZVVUTKTiyBuMsbo6_83C8Ptwfp-aXKjZfznSKlYI')" }}></div>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      <div className="relative z-10 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-20 flex flex-col items-start justify-center h-full">
        <div className="max-w-2xl bg-surface/10 backdrop-blur-sm p-8 rounded-xl border border-surface/20 shadow-lg">
          <span className="inline-block px-3 py-1 bg-secondary text-on-secondary rounded-full text-label-sm font-label-sm mb-6 uppercase tracking-wider">Fall Enrollment Open</span>
          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-on-primary mb-6">Equipping the Next Generation of Faith Leaders.</h1>
          <p className="text-body-lg font-body-lg text-on-primary/90 mb-10 max-w-xl">Comprehensive theological training and ordination pathways designed for a lifetime of impactful, spiritually grounded ministry.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#D4AF37] hover:bg-[#b0902c] text-white px-8 py-4 rounded-lg font-label-md text-label-md shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              Explore Programs
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border-2 border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-primary px-8 py-4 rounded-lg font-label-md text-label-md transition-all">
              About The Institute
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
