export default function FeaturedPrograms() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-headline-md font-headline-md text-primary mb-2">Theological Programs</h2>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">Rigorous academic curricula structured to deepen biblical understanding and pastoral competency.</p>
          </div>
          <a className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors font-label-md text-label-md" href="#">
            View All Programs <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-surface-variant flex flex-col h-full hover:-translate-y-1">
            <div className="h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgogcEdBPAb6lG6nlG_uCHWZWUTTXiRzc5nbhY9L89dJBkPFyEwjCoHZC-Mr5z_piW9FdOjXtNWGuW5X_u9gvzQdRHdv6vsf26LwpruGsPHLfLHkYaI_lFyPOAZgZ1F9_4jNfjGegVLV3l2ngT-ylf0rm2MSmzO1qbj0mw97jvefcfhrDCica2ofClJN5CF7m5xMBnIc2Q8Fwh9dLBGVSTQWxTEj770TSMllRYe39e6r4y5OHRQfJKQEYQbOrtX4RkLg6C1CaIHDY')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Degree Program</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Master of Divinity</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">A comprehensive three-year program designed for those called to full-time pastoral ministry, focusing on biblical languages, theology, and practical leadership.</p>
              <a className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
            </div>
          </div>
          <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-surface-variant flex flex-col h-full hover:-translate-y-1">
            <div className="h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5gQeI3gDgY2XfDXJZyD6jvFcsOPXxaIanvg-MaJeGxpmsSjy6_eCJhh0Ia4Tl93GwF47qp97RhSauUgogaV_I5e_tMR1IE3wRPfwcpmcfrwwhhfXPaqyAHAky6Ii47Xi7AiG-5DtVwQvDShtnn0dm5lxv8naUkOg2NWF8z0vhIzCp5WAplMNxP-qVUR8sOCAkIQvS3UELpR-lhylJRFAvXWOrhIc6xz7vs8zagOgZ6e5UuquRkRz2DWRSAYd88bifKZslpJkV6nw')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Certificate</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Pastoral Leadership</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">An intensive certificate program focusing on organizational health, conflict resolution, and modern congregational leadership strategies.</p>
              <a className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
            </div>
          </div>
          <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-surface-variant flex flex-col h-full hover:-translate-y-1">
            <div className="h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-yR_Mpn6AJbIsoXgLG-MvxFvvJKzxWdc5Nr6WV_ayWn6yyvV-1v4yIxYcyEyd1VvPnOeGJMzK6wQyBpX6_NzLzOL8RAmDfIsHZOwiBcX4W1n0p2dE_RFpDfGtKGD8eNJrmfG-Lv6ttOM_Q3hxnpjR91ISAovRONUTR7QmhuQaLHHg-Il3n6kUkzzWxOB8QxcvSy5awp24otsO59upQ4vB-wzdKYAVPR0B_F_LizuS6CLgr9VjLZ4xHQt7cjzg7ZJ_Jr6ASyfKBJs')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-surface-variant text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Online Course</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Ministry Foundations</h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">An accessible, self-paced online course for lay leaders and volunteers seeking a solid grounding in core theological concepts.</p>
              <a className="text-secondary font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn More <span className="material-symbols-outlined text-sm">chevron_right</span></a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:hidden text-center">
          <button className="border-2 border-primary text-primary hover:bg-primary hover:text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md transition-all w-full">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
