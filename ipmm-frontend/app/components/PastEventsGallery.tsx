export default function PastEventsGallery() {
  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop bg-surface-container-high">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-headline-md font-headline-md text-primary mb-4">Event Gallery</h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-[720px] mx-auto">
            Glimpses into our past gatherings, reflecting a spirit of unity and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="group rounded-xl overflow-hidden relative shadow-sm h-64">
            <img 
              src="/images/events/conference.png" 
              alt="Theology Conference" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-variant/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-headline-sm font-headline-sm text-primary">Annual Conference</h3>
            </div>
          </div>
          
          <div className="group rounded-xl overflow-hidden relative shadow-sm h-64">
            <img 
              src="/images/events/workshop.png" 
              alt="Pastoral Workshop" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-variant/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-headline-sm font-headline-sm text-primary">Pastoral Workshop</h3>
            </div>
          </div>

          <div className="group rounded-xl overflow-hidden relative shadow-sm h-64">
            <img 
              src="/images/events/fellowship.png" 
              alt="Outdoor Fellowship" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-variant/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-headline-sm font-headline-sm text-primary">Outdoor Fellowship</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
