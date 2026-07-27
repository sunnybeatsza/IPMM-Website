export default function ProgramGrid() {
  return (
    <section className="w-full max-w-container-max px-margin-mobile md:px-margin-desktop pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {/* Card 1 */}
        <article className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
          <div className="h-48 w-full bg-surface-container relative">
            <img className="object-cover w-full h-full" alt="Theological library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC3-jQSPmKiZtMoOhRjmvfsuJHjbGzmb-yRzTySOVfoHnEp_yD38N5gj6pMGrlzBmhS8yen_4giew-C1lHNJlh9DFdbAbc5llsSI2O2b8DY7AoC3R0vR3L6uAWQtLcLCWr-k0W4M5AYRnK4TEGQ6Btr_qVraEkcVCoiydg6PxOEev9D3ql4EKV7WSGf6BZejmT2EHqDdG55uhw4_EHe2YSM0LTpCTRBgYow0YdGbtbOFHWNKnidxbWYmnGjJ20pZDMaZHuLYEbFbY" />
            <div className="absolute top-4 right-4 bg-surface-container-lowest px-3 py-1 rounded-full text-label-sm font-label-sm text-primary shadow-sm">Master's Degree</div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">Master of Divinity (MDiv)</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
              Our flagship degree preparing students for pastoral ministry, chaplaincy, and academic pursuits with a deep foundation in biblical languages and theology.
            </p>
            <div className="flex flex-col gap-2 mb-8 border-t border-surface-variant pt-4">
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>3 - 4 Years</span>
              </div>
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">school</span>
                <span>Bachelor's Degree Required</span>
              </div>
            </div>
            <button className="w-full bg-[#D4AF37] text-white py-3 rounded text-label-md font-label-md hover:bg-opacity-90 transition-colors">
              Apply Now
            </button>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
          <div className="h-48 w-full bg-surface-container relative">
            <img className="object-cover w-full h-full" alt="Theology students discussion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWMZiQZEfzR2LSeWcyRZ1jGk3hTlccv_AOr2W01kRdehsJ9Jx9Xx1Z3lUNWzjiCLH4opNGMd7HDXSAajWnoTo1pLKhvZTv85n7kv2wWbFoTJG1UIK2Os-wPvYIUk4xhJfVjsXTMHb2-0bZWm53YHGIUhgHIkvjc-DE5XA4qWqpEwKoG98d7R-3G8f8snGWvKvSmI5-tdHGZqKFN06y7rrJuR2fb0T1wcl9OsvptcdLD-WTDPKPWnX-Z9YR8pGENVKH0AuCZ1lx0aU" />
            <div className="absolute top-4 right-4 bg-surface-container-lowest px-3 py-1 rounded-full text-label-sm font-label-sm text-primary shadow-sm">Master's Degree</div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">Master of Arts in Theological Studies</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
              A rigorous academic program designed for those seeking to deepen their understanding of Christian theology, ethics, and history.
            </p>
            <div className="flex flex-col gap-2 mb-8 border-t border-surface-variant pt-4">
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>2 Years</span>
              </div>
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">school</span>
                <span>Bachelor's Degree Required</span>
              </div>
            </div>
            <button className="w-full bg-[#D4AF37] text-white py-3 rounded text-label-md font-label-md hover:bg-opacity-90 transition-colors">
              Apply Now
            </button>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
          <div className="h-48 w-full bg-surface-container relative">
            <img className="object-cover w-full h-full" alt="Church sanctuary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEazUW5YwlZRQmXEgt4A79KgZBhx2QfqgLjSIw3g0B_qx5OroudlKIgfBWEi8z6NSlbe9E8ZPKMP5CQb3wHXCmS22nSt_IKdYJb0_Ucvi15ugezFXThTGZGcUTUdhewyBKnmLBNw38YnqJDSl2v3tm6YJ1EMnhT8mA8VhS11aC_y28WhU-sXg1lnCmW465dPe6bJ1pSSxNF8mJm7UvzEOYAv0Mj4mVdASImlK1Pjn5yKNJbBefVjyva3gXZSLFHry03Lc6eTjfVuY" />
            <div className="absolute top-4 right-4 bg-surface-container-lowest px-3 py-1 rounded-full text-label-sm font-label-sm text-primary shadow-sm">Doctorate</div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-headline-sm font-headline-sm text-primary mb-3">Doctor of Ministry (DMin)</h2>
            <p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-grow">
              An advanced professional degree for experienced ministry leaders seeking to enhance their practical skills and theoretical grounding.
            </p>
            <div className="flex flex-col gap-2 mb-8 border-t border-surface-variant pt-4">
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
                <span>3 Years</span>
              </div>
              <div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">school</span>
                <span>MDiv + 3 Years Ministry Experience</span>
              </div>
            </div>
            <button className="w-full bg-[#D4AF37] text-white py-3 rounded text-label-md font-label-md hover:bg-opacity-90 transition-colors">
              Apply Now
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
