import { createFileRoute, Link } from "@tanstack/react-router";
import { useId, useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { Reveal as MotionReveal, RevealItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Glow } from "@/components/motion/Glow";
import { Spotlight } from "@/components/motion/Spotlight";
import { DecisionTerminal } from "@/components/site/DecisionTerminal";
import { CaseActs } from "@/components/site/CaseActs";
import { Sparkline } from "@/components/site/Sparkline";
import { DecisionLog } from "@/components/site/DecisionLog";
import { ChipCard } from "@/components/site/ChipCard";
import { Collapse } from "@/components/site/Collapse";
import { useLanguage } from "@/i18n";
import { pt } from "@/i18n/pt";
import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/creisbarbosa/";
const GITHUB_URL = "https://github.com/creisbarbosa";
const EMAIL = "creisbarbosa@gmail.com";
const SITE_URL = "https://www.creisbarbosa.com";
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pt.meta.homeTitle },
      { name: "description", content: pt.meta.homeDescription },
      { property: "og:title", content: pt.meta.homeTitle },
      { property: "og:description", content: pt.meta.homeDescription },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function WorkCard({
  card,
  expandLabel,
  collapseLabel,
}: {
  card: { number: string; title: string; lead: string; body: string };
  expandLabel: string;
  collapseLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="rounded-xl border border-border bg-card/20 p-7 transition-all hover:border-primary/45 hover:bg-card/40 hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--primary)_35%,transparent)] sm:p-9">
      <span className="tabular font-mono text-sm text-primary">{card.number}</span>
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.lead}</p>
      <Collapse open={open} id={panelId}>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
      </Collapse>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-5 inline-flex items-center gap-1.5 font-mono text-[0.7rem] text-primary transition-colors hover:text-primary/80"
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown
          className={cn("size-3.5 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}

function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* HERO */}
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16 sm:px-8"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage: "radial-gradient(ellipse at 30% 40%, black, transparent 70%)",
            }}
          />
          <Glow />
          <div className="relative mx-auto w-full max-w-6xl">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {t.hero.overline}
            </p>
            <h1 className="mt-8 max-w-4xl font-display text-[2.65rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/case/retencao"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.hero.primaryCta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <DecisionTerminal
              label={t.heroTerminal.label}
              hint={t.heroTerminal.hint}
              ariaLabel={t.heroTerminal.ariaLabel}
              lines={t.heroTerminal.lines}
            />

            <p className="mt-6 text-xs tracking-wide text-muted-foreground">{t.hero.caption}</p>
          </div>
        </section>

        {/* STATS */}
        <MotionReveal
          as="section"
          stagger={0.08}
          className="border-y border-border px-5 py-10 sm:px-8"
        >
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 md:grid-cols-4">
            {t.stats.map((stat, i) => (
              <RevealItem
                key={stat.label}
                as="div"
                className={cn(
                  "px-4",
                  i % 2 === 1 && "border-l border-border",
                  "md:border-l md:first:border-l-0",
                  i === 2 && "md:border-l",
                )}
              >
                <dd className="font-display text-3xl tabular-nums tracking-tight text-primary sm:text-4xl">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </dd>
                <dt className="mt-2 text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {stat.label}
                </dt>
              </RevealItem>
            ))}
          </dl>
        </MotionReveal>


        {/* COMO TRABALHO */}
        <Reveal as="section" id="como-trabalho" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <SectionTitle title={t.work.title} subtitle={t.work.subtitle} />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {t.work.cards.map((card) => (
              <WorkCard
                key={card.number}
                card={card}
                expandLabel={t.work.expand}
                collapseLabel={t.work.collapse}
              />
            ))}
          </div>
        </Reveal>

        {/* CASE EM DESTAQUE */}
        <Reveal as="section" id="case" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="relative overflow-x-clip">
            <Spotlight className="-top-40" />
            <div className="relative">
              <CaseActs acts={t.featuredCase.acts} label={t.featuredCase.actsLabel} />
              <article className="relative mt-6 overflow-hidden rounded-xl border border-primary/40 bg-card/60 p-8 shadow-[0_0_60px_-25px_color-mix(in_oklab,var(--primary)_60%,transparent)] sm:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(45,212,191,0.20), rgba(139,92,246,0.12) 55%, transparent 70%)",
                  }}
                />
                <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-primary">
                      {t.featuredCase.overline}
                    </p>
                    <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                      {t.featuredCase.title}
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {t.featuredCase.summary}
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {t.featuredCase.chips.map((chip) => (
                        <li
                          key={chip}
                          className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] text-muted-foreground"
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/case/retencao"
                      className="mt-10 inline-flex items-center gap-2 text-base font-medium text-primary hover:underline"
                    >
                      {t.featuredCase.cta}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="lg:border-l lg:border-border lg:pl-8">
                    <Sparkline
                      series={t.featuredCase.chart.series}
                      title={t.featuredCase.chart.title}
                      caption={t.featuredCase.chart.caption}
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Reveal>

        {/* EXPERIÊNCIA — decision log */}
        <Reveal as="section" id="experiencia" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />
          <DecisionLog
            items={t.experience.items}
            expandLabel={t.experience.expand}
            collapseLabel={t.experience.collapse}
            promotedLabel={t.experience.promoted}
          />
        </Reveal>

        {/* FERRAMENTAS */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <SectionTitle title={t.tools.title} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {t.tools.columns.map((col) => (
              <ChipCard
                key={col.title}
                title={col.title}
                items={col.items}
                showMore={t.tools.showMore}
                showLess={t.tools.showLess}
              />
            ))}
          </div>
        </Reveal>


        {/* FORMAÇÃO */}
        <Reveal as="section" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8 sm:pb-32">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t.education.title}
          </h2>
          <ul className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
            {t.education.items.map((item) => (
              <li key={item.degree} className="text-sm text-muted-foreground">
                <p className="text-foreground/80">{item.degree}</p>
                <p className="mt-1">{item.school}</p>
                <p className="tabular mt-1 text-xs">{item.years}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* CONTATO */}
        <Reveal
          as="section"
          id="contato"
          className="border-t border-border px-5 py-24 text-center sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-base text-muted-foreground">{t.contact.body}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.contact.linkedin}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {t.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </main>

      <footer className="border-t border-border px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <nav className="flex gap-5" aria-label={t.footer.linksLabel}>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t.footer.links.linkedin}
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">
              {t.footer.links.github}
            </a>
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
              {t.footer.links.email}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
