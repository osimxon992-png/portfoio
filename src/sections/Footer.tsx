import FadeIn from '../components/FadeIn';

const links = ['About', 'Price', 'Projects', 'GitHub', 'Instagram'];
const socials = [
  { name: 'GitHub', url: 'https://github.com/osimxon992-png' },
  { name: 'Instagram', url: 'https://www.instagram.com/dadaxanov.26/' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t-2 border-[#D7E2EA]/20 px-5 pb-8 pt-16 text-[#D7E2EA] sm:px-8 md:px-10 md:pt-24">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 9vw, 130px)' }}>
          Let&apos;s work together
        </h2>
      </FadeIn>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-10 md:mt-20 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium uppercase">Osimxon</span>
          <span className="font-light uppercase tracking-wide opacity-60">Namangan, Uzbekistan</span>
        </div>

        <nav className="flex flex-col gap-2">
          <span className="text-xs font-light uppercase tracking-widest opacity-60">Menu</span>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70">
              {link}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-light uppercase tracking-widest opacity-60">Socials</span>
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70">
              {s.name} ↗
            </a>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center text-xs font-light uppercase tracking-widest opacity-50">
        © {new Date().getFullYear()} Osimxon. All rights reserved.
      </p>
    </footer>
  );
}
