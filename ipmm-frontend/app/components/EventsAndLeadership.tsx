export default function EventsAndLeadership() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-headline-md font-headline-md text-primary mb-8 border-b border-surface-variant pb-4">Upcoming Events</h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row bg-surface-container-low rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-variant">
                <div className="bg-primary p-6 flex flex-col items-center justify-center min-w-[120px] text-on-primary">
                  <span className="text-label-sm font-label-sm uppercase tracking-widest opacity-80">Oct</span>
                  <span className="text-headline-md font-headline-md">15</span>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-headline-sm font-headline-sm text-primary">Annual Leadership Conference</h4>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">A three-day symposium featuring keynote speakers addressing modern challenges in pastoral care.</p>
                  <div className="flex items-center gap-4 text-label-sm font-label-sm text-outline">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 9:00 AM - 5:00 PM</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Main Campus</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row bg-surface-container-low rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-surface-variant">
                <div className="bg-secondary p-6 flex flex-col items-center justify-center min-w-[120px] text-on-secondary">
                  <span className="text-label-sm font-label-sm uppercase tracking-widest opacity-80">Nov</span>
                  <span className="text-headline-md font-headline-md">02</span>
                </div>
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-headline-sm font-headline-sm text-primary">Fall Ordination Ceremony</h4>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-4">Join us in celebrating the commissioning of our graduating class into active ministry roles.</p>
                  <div className="flex items-center gap-4 text-label-sm font-label-sm text-outline">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 2:00 PM - 4:00 PM</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">location_on</span> Institute Chapel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-headline-md font-headline-md text-primary mb-8 border-b border-surface-variant pb-4">Leadership Spotlight</h2>
            <div className="bg-surface-container rounded-xl p-8 flex-grow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <div className="flex items-center gap-6 mb-6">
                <img className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Nh8LeiNVpEeB0-S9bUpSrM0p2uODkhlcL-sBMR3JiWozGNBbpM5c2Kp3i2X1w2-CmgNHBBrfskn79AAYQEsohOkb0Uf1RhL5a8XysvbGpNRASdHmLpVtW_ICrYI7c6ILqaoOF5xAeTeCAakwQA4pYu0NyWUp3ZW8MH_Urjzb_XWqd3wbfzpAMrOHxMxN1y8dDqaQRRGLdCCZXXj88-FEX4UeS4ygWvU-qygFij8zqzn22PyQWJr5MSRY6DNU3AraAzcioFUjHak" />
                <div>
                  <h4 className="text-headline-sm font-headline-sm text-primary">Dr. Elias Thorne</h4>
                  <p className="text-label-md font-label-md text-secondary">Founder &amp; President</p>
                </div>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute -top-2 -left-2 text-primary/10 text-6xl" style={{ fontVariationSettings: '"FILL" 1' }}>format_quote</span>
                <p className="text-body-md font-body-md text-on-surface-variant relative z-10 pl-4 border-l-2 border-secondary/30 italic">
                  "When we founded this institute, our goal was not merely academic excellence, but spiritual formation. We are building stewards of faith who can navigate the complexities of the modern world without losing the timeless truth of the gospel."
                </p>
              </div>
              <div className="mt-8">
                <button className="text-primary hover:text-secondary font-label-md text-label-md flex items-center gap-1 transition-colors">
                  Read Full Biography <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
