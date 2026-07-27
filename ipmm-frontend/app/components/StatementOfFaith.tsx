export default function StatementOfFaith() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="max-w-[800px] mx-auto bg-surface-container-low p-12 rounded-lg border-l-4 border-secondary shadow-sm">
        <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">Statement of Faith</h2>
        <div className="space-y-6">
          <p className="font-body-lg text-body-lg text-on-surface-variant italic font-display-lg text-center leading-relaxed">
            "We believe in the authority of the Scriptures as the inspired Word of God, the historical orthodox doctrines of the Christian faith, and the essential task of equipping leaders to articulate and embody these truths with grace."
          </p>
          <div className="flex justify-center mt-8">
            <button className="border border-primary text-primary px-6 py-2 rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors">
              Read Full Statement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
