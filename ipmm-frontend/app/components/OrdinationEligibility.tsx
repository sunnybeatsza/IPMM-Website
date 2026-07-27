export default function OrdinationEligibility() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop bg-surface-container-high">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Eligibility Checklist */}
        <div>
          <h2 className="text-headline-md font-headline-md text-primary mb-8">Eligibility Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-surface p-4 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <div>
                <h4 className="text-label-md font-label-md text-on-surface font-bold">Completed M.Div. Degree</h4>
                <p className="text-body-md font-body-md text-on-surface-variant">From an accredited theological institution.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-surface p-4 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <div>
                <h4 className="text-label-md font-label-md text-on-surface font-bold">Active Church Membership</h4>
                <p className="text-body-md font-body-md text-on-surface-variant">Minimum 2 years of active service in a local congregation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-surface p-4 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <div>
                <h4 className="text-label-md font-label-md text-on-surface font-bold">Clear Background Check</h4>
                <p className="text-body-md font-body-md text-on-surface-variant">Comprehensive moral and legal clearance.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-surface p-4 rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-secondary mt-1" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
              <div>
                <h4 className="text-label-md font-label-md text-on-surface font-bold">Endorsement Letter</h4>
                <p className="text-body-md font-body-md text-on-surface-variant">Formal recommendation from current pastoral leadership.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Required Documents */}
        <div>
          <h2 className="text-headline-md font-headline-md text-primary mb-8">Required Documentation</h2>
          <div className="bg-surface rounded-xl p-8 border-l-4 border-secondary shadow-sm h-full">
            <ul className="space-y-6">
              <li className="flex items-center gap-4 border-b border-outline-variant pb-4 last:border-0 last:pb-0">
                <span className="material-symbols-outlined text-outline">contract</span>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface">Theological Position Paper</h4>
                  <span className="text-label-sm font-label-sm text-outline">PDF Format, Max 15 pages</span>
                </div>
              </li>
              <li className="flex items-center gap-4 border-b border-outline-variant pb-4 last:border-0 last:pb-0">
                <span className="material-symbols-outlined text-outline">school</span>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface">Official Academic Transcripts</h4>
                  <span className="text-label-sm font-label-sm text-outline">Sealed or official digital copy</span>
                </div>
              </li>
              <li className="flex items-center gap-4 border-b border-outline-variant pb-4 last:border-0 last:pb-0">
                <span className="material-symbols-outlined text-outline">history_edu</span>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface">Spiritual Autobiography</h4>
                  <span className="text-label-sm font-label-sm text-outline">Detailing call to ministry (5-7 pages)</span>
                </div>
              </li>
              <li className="flex items-center gap-4 border-b border-outline-variant pb-4 last:border-0 last:pb-0">
                <span className="material-symbols-outlined text-outline">recent_patient</span>
                <div>
                  <h4 className="text-label-md font-label-md text-on-surface">Three Character References</h4>
                  <span className="text-label-sm font-label-sm text-outline">Academic, Pastoral, and Personal</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
