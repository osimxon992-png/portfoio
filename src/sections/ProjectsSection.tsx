import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

// a, b = left column (small), c = right column (tall)
const shots = (slug: string) => ['a', 'b', 'c'].map((s) => `/projects/${slug}-${s}.jpg`);

const projects = [
  { name: 'Careerly', category: 'Client', url: 'https://careerly-lilac.vercel.app/', images: shots('careerly') },
  { name: 'DevConnect', category: 'Personal', url: 'https://dev-connect-rho-eight.vercel.app/', images: shots('devconnect') },
  { name: 'oMarketing', category: 'Client', url: 'https://o-marketing.vercel.app/', images: shots('omarketing') },
];

const radius = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({ project, index, progress }: { project: (typeof projects)[number]; index: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (projects.length - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / projects.length, 1], [1, targetScale]);
  const [a, b, c] = project.images;

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        className={`w-full origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${radius}`}
        style={{ scale, top: `${index * 28}px`, position: 'relative' }}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col text-[#D7E2EA]">
              <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{project.category}</span>
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img src={a} alt={`${project.name} screenshot`} loading="lazy" className={`w-full object-cover ${radius}`} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <img src={b} alt={`${project.name} screenshot`} loading="lazy" className={`w-full object-cover ${radius}`} style={{ height: 'clamp(160px, 22vw, 340px)' }} />
          </div>
          <img src={c} alt={`${project.name} screenshot`} loading="lazy" className={`w-[60%] object-cover ${radius}`} />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Project
        </h2>
      </FadeIn>
      <div ref={ref} className="mx-auto max-w-7xl">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
