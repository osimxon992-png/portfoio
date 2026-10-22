import FadeIn from '../components/FadeIn';

const services = [
  { name: '3D Modeling', description: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.' },
  { name: 'Rendering', description: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.' },
  { name: 'Motion Design', description: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.' },
  { name: 'Branding', description: 'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.' },
  { name: 'Web Design', description: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.' },
];

export default function ServicesSection() {
  return (
    <section id="price" className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>
      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn key={s.name} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 py-8 text-[#0C0C0C] sm:gap-10 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? undefined : '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span className="font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {s.name}
                </h3>
                <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {s.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
