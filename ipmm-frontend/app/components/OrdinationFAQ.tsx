export default function OrdinationFAQ() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop max-w-[720px] mx-auto">
      <h2 className="text-headline-md font-headline-md text-primary mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <details className="group bg-surface rounded-lg shadow-sm" open>
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-label-md font-label-md text-on-surface">
            <span>How long does the ordination process typically take?</span>
            <span className="transition group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </span>
          </summary>
          <div className="text-body-md font-body-md text-on-surface-variant p-6 pt-0">
            The process generally takes between 18 to 24 months, depending on the speed at which you complete the mentorship requirements and document submissions.
          </div>
        </details>
        {/* FAQ Item 2 */}
        <details className="group bg-surface rounded-lg shadow-sm">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-label-md font-label-md text-on-surface">
            <span>Can I apply before completing my M.Div.?</span>
            <span className="transition group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </span>
          </summary>
          <div className="text-body-md font-body-md text-on-surface-variant p-6 pt-0">
            You may begin the initial application process during your final semester of your M.Div. program, but formal examination cannot occur until degree conferral.
          </div>
        </details>
        {/* FAQ Item 3 */}
        <details className="group bg-surface rounded-lg shadow-sm">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-label-md font-label-md text-on-surface">
            <span>Is there an application fee?</span>
            <span className="transition group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </span>
          </summary>
          <div className="text-body-md font-body-md text-on-surface-variant p-6 pt-0">
            Yes, there is a non-refundable $150 processing fee required upon submission of your initial dossier to cover administrative and background check costs.
          </div>
        </details>
      </div>
    </section>
  );
}
