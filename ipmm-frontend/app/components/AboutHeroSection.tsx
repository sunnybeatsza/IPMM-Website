export default function AboutHeroSection() {
  return (
    <section className="relative py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApC-pH2OValRm3-WR7KqoxnczAkamk3uVntaxLsIDc6Ell3o02OomLquraKOeOZ0D6HCVhFuKRAVtWX96luHvqUZgVu9IrSVpFP5S7EFVFyqFl5qIRJm04tGA6NjysMHCq7C5zo4XA6uD4XC64WTSgt1KFSpdJNraboZmjPl9f3U2Z_tYY2DIVg3pog4AI_3s0Vjpu5-n59S02ecEjVnx-2JzaUePjzD-W0bUYltyave5QK8uJwINd1meUPwIw6-8BIo_3L8XZBnY')" }}></div>
      <div className="relative z-10 max-w-[720px] mx-auto">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">Our Mission &amp; Heritage</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Forged in faith and guided by rigorous scholarship, we exist to equip the next generation of spiritual leaders with the wisdom to serve and the courage to lead.
        </p>
      </div>
    </section>
  );
}
