import FadeIn from '../components/FadeIn';

const profileUrl = 'https://www.instagram.com/dadaxanov.26/';
const reels = ['De1hznfMTRI', 'DezVm-NsW8w'];
const igGradient = 'linear-gradient(45deg, #F58529, #DD2A7B 50%, #8134AF 75%, #515BD4)';

// shortcut: numbers are a snapshot of the public profile (2026-10-25), update by hand when they change
const stats = [
  { label: 'Posts', value: 2 },
  { label: 'Followers', value: 36 },
  { label: 'Following', value: 33 },
];

export default function InstagramSection() {
  return (
    <section id="instagram" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Instagram
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1fr_1.4fr_1fr]">
        {reels.map((code, i) => (
          <FadeIn key={code} delay={0.2 + i * 0.1} x={i ? 80 : -80} y={0} duration={0.9} className={`mx-auto w-full max-w-[360px] ${i ? 'lg:order-3' : ''}`}>
            <iframe
              src={`https://www.instagram.com/reel/${code}/embed/`}
              title={`Instagram reel ${i + 1}`}
              loading="lazy"
              allowFullScreen
              className="h-[600px] w-full overflow-hidden rounded-[32px] border-2 border-[#D7E2EA]/40 bg-white"
            />
          </FadeIn>
        ))}
        <FadeIn delay={0.1} y={30} className="order-first lg:order-2">
          <div className="rounded-[40px] p-[2px] sm:rounded-[50px] md:rounded-[60px]" style={{ background: igGradient }}>
            <div className="flex flex-col items-center gap-8 rounded-[38px] bg-[#0C0C0C] px-6 py-10 text-[#D7E2EA] sm:rounded-[48px] sm:px-10 md:rounded-[58px] md:px-12 md:py-12">
              <div className="shrink-0 rounded-full p-[3px]" style={{ background: igGradient }}>
                <img
                  src="/social/instagram-avatar.jpg"
                  alt="Osimxon Dadaxanov Instagram avatar"
                  className="h-28 w-28 rounded-full border-4 border-[#0C0C0C] object-cover sm:h-36 sm:w-36"
                />
              </div>

              <div className="flex w-full flex-col items-center gap-6">
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl font-medium uppercase sm:text-3xl">Osimxon Dadaxanov</span>
                  <span className="font-light opacity-60">@dadaxanov.26</span>
                </div>

                <div className="grid w-full grid-cols-3 gap-2 text-center">
                  {stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="hero-heading text-4xl font-black sm:text-5xl">{s.value}</span>
                      <span className="text-[10px] font-light uppercase tracking-widest opacity-60 sm:text-xs">{s.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-10 py-3 text-sm font-medium uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-80"
                  style={{ background: igGradient }}
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
