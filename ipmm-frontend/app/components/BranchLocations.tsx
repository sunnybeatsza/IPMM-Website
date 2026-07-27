export default function BranchLocations() {
  const branches = [
    {
      name: "Johannesburg",
      address: "123 Serenity Lane, Sandton, 2196",
      phone: "+27 11 555 0198",
      email: "jhb@ipmm.edu"
    },
    {
      name: "Limpopo",
      address: "45 Stewardship Ave, Polokwane, 0699",
      phone: "+27 15 555 0244",
      email: "limpopo@ipmm.edu"
    },
    {
      name: "Botswana",
      address: "78 Grace Road, Gaborone",
      phone: "+267 395 0321",
      email: "botswana@ipmm.edu"
    }
  ];

  return (
    <section className="py-24 px-margin-desktop md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-headline-md font-headline-md text-primary mb-4">Our Branches</h2>
        <p className="text-body-md font-body-md text-on-surface-variant max-w-[720px] mx-auto">
          Connecting communities and fostering leadership across Southern Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {branches.map((branch, index) => (
          <div key={index} className="bg-surface rounded-xl p-8 shadow-sm border-t-4 border-secondary text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-[32px]">public</span>
            </div>
            <h3 className="text-headline-sm font-headline-sm text-primary mb-4">{branch.name}</h3>
            
            <div className="flex flex-col gap-3 text-body-md font-body-md text-on-surface-variant w-full">
              <div className="flex items-start gap-3 justify-center">
                <span className="material-symbols-outlined text-[20px] mt-0.5 text-outline">location_on</span>
                <span className="text-left">{branch.address}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-symbols-outlined text-[20px] text-outline">phone</span>
                <span>{branch.phone}</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <span className="material-symbols-outlined text-[20px] text-outline">mail</span>
                <span>{branch.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
