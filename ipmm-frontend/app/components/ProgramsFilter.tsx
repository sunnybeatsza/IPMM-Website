export default function ProgramsFilter() {
  return (
    <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop pb-16">
      <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-grow w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full pl-10 pr-4 py-3 border border-[#D1D5DB] rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-transparent" placeholder="Search programs..." type="text" />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select className="w-full md:w-48 py-3 px-4 border border-[#D1D5DB] rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-transparent">
            <option>All Degrees</option>
            <option>Master's</option>
            <option>Doctorate</option>
            <option>Certificate</option>
          </select>
          <select className="w-full md:w-48 py-3 px-4 border border-[#D1D5DB] rounded focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-transparent">
            <option>All Formats</option>
            <option>On-Campus</option>
            <option>Online</option>
            <option>Hybrid</option>
          </select>
        </div>
      </div>
    </section>
  );
}
