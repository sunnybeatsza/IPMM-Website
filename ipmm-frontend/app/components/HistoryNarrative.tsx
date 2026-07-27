export default function HistoryNarrative() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-5 md:col-start-2">
        <img className="rounded-lg shadow-sm object-cover w-full h-[500px]" alt="IPMM Group Photo" src="/images/Group_photo_IPMM.jpeg" />
      </div>
      <div className="md:col-span-5 flex flex-col justify-center">
        <h2 className="font-headline-md text-headline-md text-primary mb-6">A Foundation of Faith</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">Founded in 1894 by a coalition of dedicated scholars and pastors, the International Pastors Management Ministry began as a humble gathering in a rented hall. Their vision was singular: to create a space where rigorous academic inquiry met deep, transformative piety.</p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Over the decades, we have grown from a small regional seminary into a globally recognized center for theological education. Through times of profound cultural shift, our commitment to orthodox Christian teaching and compassionate pastoral care has remained steadfast, anchored by the conviction that the Church needs leaders who are both thoughtful and deeply grounded.
        </p>
      </div>
    </section>
  );
}
