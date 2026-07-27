export default function MissionVisionValues() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">public</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Mission</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              To cultivate a community of learners dedicated to the serious study of Scripture and theology, equipping them for faithful service in the global Church.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">visibility</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Vision</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A world where the transformative power of the Gospel is articulated with intellectual clarity and lived out with profound compassion in every sphere of society.
            </p>
          </div>
          <div className="bg-surface rounded-lg p-8 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-3xl">favorite</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Values</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Academic Rigor, Spiritual Formation, Compassionate Stewardship, and a commitment to the historical orthodox Christian faith.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
