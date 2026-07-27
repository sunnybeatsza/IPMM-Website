export default function Footer() {
  return (
    <footer className="w-full bg-tertiary dark:bg-tertiary-container flat no shadows">
      <div className="max-w-container-max mx-auto px-margin-desktop py-16 flex flex-wrap justify-between gap-gutter">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-headline-sm font-headline-sm text-on-tertiary dark:text-on-tertiary-container mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-on-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>menu_book</span> IPMM
          </h3>
          <p className="text-body-md font-body-md text-tertiary-fixed-dim max-w-sm mb-6">
            Dedicated to the rigorous preparation of individuals called to serve in ministry, leadership, and theological scholarship.
          </p>
          <p className="text-label-sm font-label-sm text-tertiary-fixed-dim opacity-75">© 2024 International Pastors Management Ministry for Pastoral Excellence. Stewardship &amp; Serenity.</p>
        </div>
        <div className="w-full md:w-2/3 flex flex-wrap gap-12 md:justify-end">
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-tertiary font-bold uppercase tracking-wider mb-2">Navigation</h4>
            <a className="text-body-md font-body-md text-tertiary-fixed-dim hover:text-secondary-fixed-dim transition-colors" href="#">Contact Us</a>
            <a className="text-body-md font-body-md text-tertiary-fixed-dim hover:text-secondary-fixed-dim transition-colors" href="#">Privacy Policy</a>
            <a className="text-body-md font-body-md text-tertiary-fixed-dim hover:text-secondary-fixed-dim transition-colors" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-label-sm font-label-sm text-on-tertiary font-bold uppercase tracking-wider mb-2">Resources</h4>
            <a className="text-body-md font-body-md text-tertiary-fixed-dim hover:text-secondary-fixed-dim transition-colors" href="#">Giving</a>
            <a className="text-body-md font-body-md text-tertiary-fixed-dim hover:text-secondary-fixed-dim transition-colors" href="#">Faculty Directory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
