export default function UpcomingEvents() {
  const events = [
    {
      date: "Oct 15",
      title: "Annual Theology Conference",
      location: "Johannesburg Branch",
      time: "09:00 AM - 04:00 PM",
      description: "A deep dive into contemporary pastoral challenges and theological stewardship.",
    },
    {
      date: "Nov 02",
      title: "Pastoral Leadership Seminar",
      location: "Limpopo Branch",
      time: "10:00 AM - 02:00 PM",
      description: "Equipping emerging leaders with practical tools for effective congregation management.",
    },
    {
      date: "Dec 10",
      title: "End of Year Fellowship",
      location: "Botswana Branch",
      time: "05:00 PM - 08:00 PM",
      description: "Join us for an evening of worship, gratitude, and community bonding.",
    }
  ];

  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-headline-md font-headline-md text-primary mb-4">Upcoming Events</h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-[720px] mx-auto">
          Mark your calendars for these important dates. We look forward to welcoming you.
        </p>
      </div>
      
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-shadow">
            <div className="bg-primary text-on-primary w-full md:w-48 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-headline-md font-headline-md font-bold">{event.date.split(' ')[1]}</span>
              <span className="text-label-md font-label-md uppercase tracking-wider">{event.date.split(' ')[0]}</span>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-2">{event.title}</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-4">{event.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface">
                  <span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
                  {event.time}
                </div>
              </div>
            </div>
            <div className="p-8 md:pl-0 flex items-center justify-center md:justify-end">
              <button className="w-full md:w-auto bg-primary-container text-on-primary-container px-6 py-2 rounded-DEFAULT text-label-md font-label-md hover:bg-primary hover:text-on-primary transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
