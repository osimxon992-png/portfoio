import FadeIn from '../components/FadeIn';

const profileUrl = 'https://github.com/osimxon992-png';

// shortcut: numbers are a snapshot from the GitHub API (2026-10-25), update by hand or fetch at runtime if they need to stay live
const stats = [
  { label: 'Repositories', value: 24 },
  { label: 'Followers', value: 6 },
  { label: 'Following', value: 4 },
];

const languages = [
  { name: 'JavaScript', share: 83, color: '#F1E05A' },
  { name: 'TypeScript', share: 17, color: '#3178C6' },
];

const repos = [
  { name: 'DevConnect', language: 'JavaScript' },
  { name: 'oMarketing', language: 'TypeScript' },
  { name: 'careely', language: 'JavaScript' },
  { name: 'devias', language: 'JavaScript' },
  { name: 'crud', language: 'JavaScript' },
  { name: 'cv-builder', language: 'JavaScript' },
];

const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

export default function GitHubSection() {
  return (
    <section id="github" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          GitHub
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-7xl gap-4 text-[#D7E2EA] md:grid-cols-[2fr_3fr] md:gap-6">
        <FadeIn delay={0.1} y={30} className={`flex flex-col gap-8 border-2 border-[#D7E2EA] p-6 sm:p-8 ${radius}`}>
          <div className="flex items-center gap-5">
            <img src="/social/github-avatar.jpg" alt="Osimxon GitHub avatar" className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24" />
            <div className="flex flex-col">
              <span className="text-2xl font-medium uppercase sm:text-3xl">Osimxon</span>
              <span className="font-light opacity-60">@osimxon992-png</span>
            </div>
          </div>
          <p className="font-light uppercase tracking-wide opacity-80">Dream Meta · Namangan</p>

          <div className="grid grid-cols-3 gap-2 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="hero-heading text-4xl font-black sm:text-5xl">{s.value}</span>
                <span className="text-[10px] font-light uppercase tracking-widest opacity-60 sm:text-xs">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex h-3 overflow-hidden rounded-full">
              {languages.map((l) => (
                <span key={l.name} style={{ width: `${l.share}%`, background: l.color }} />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-light">
              {languages.map((l) => (
                <span key={l.name} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: l.color }} />
                  {l.name} {l.share}%
                </span>
              ))}
            </div>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto rounded-full border-2 border-[#D7E2EA] py-3 text-center text-sm font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
          >
            Follow on GitHub
          </a>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {repos.map((r, i) => (
            <FadeIn key={r.name} delay={0.15 + i * 0.05} y={30}>
              <a
                href={`${profileUrl}/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between gap-6 rounded-[32px] border-2 border-[#D7E2EA]/40 p-6 transition-colors duration-200 hover:border-[#D7E2EA]"
              >
                <span className="text-xl font-medium sm:text-2xl">{r.name}</span>
                <span className="flex items-center gap-2 text-sm font-light opacity-70">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: languages.find((l) => l.name === r.language)?.color }} />
                  {r.language}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
