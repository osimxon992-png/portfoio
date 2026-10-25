import FadeIn from '../components/FadeIn';

const socials = [
  { name: 'GitHub', handle: 'osimxon992-png', url: 'https://github.com/osimxon992-png' },
  { name: 'Instagram', handle: '@dadaxanov.26', url: 'https://www.instagram.com/dadaxanov.26/' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Contact
        </h2>
      </FadeIn>
      <div className="flex w-full max-w-4xl flex-col gap-4 sm:flex-row">
        {socials.map((s, i) => (
          <FadeIn key={s.name} delay={0.1 + i * 0.1} y={30} className="flex-1">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 rounded-[40px] border-2 border-[#D7E2EA] px-8 py-6 text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
            >
              <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{s.name}</span>
              <span className="font-medium" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{s.handle}</span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
