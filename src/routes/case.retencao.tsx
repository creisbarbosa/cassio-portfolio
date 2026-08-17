import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CountUp } from "@/components/motion/CountUp";
import { ChartFrame } from "@/components/case/ChartFrame";
import { SectionNav } from "@/components/case/SectionNav";
import {
  ChartCohorts,
  ChartWau,
  CiChecksPanel,
  HorizontalBars,
  StageCards,
  StatusLegend,
} from "@/components/case/case-charts";
import {
  AiDiff,
  CaseSection,
  ChangesRequested,
  CodingTable,
  DecisionBox,
  DiscardList,
  ExpandReasoning,
  MessageCard,
  Prose,
  PullQuote,
  StatTile,
  Takeaway,
} from "@/components/site/case-parts";
import { useLanguage } from "@/i18n";
import { pt } from "@/i18n/pt";

const LINKEDIN_URL = "https://www.linkedin.com/in/cassioreisbarbosa/";
const EMAIL = "creisbarbosa@gmail.com";
const OG_IMAGE =
  "https://project--d89cb723-7a75-42b9-af12-056a848b802f.lovable.app/og-cover.jpg";

type CheckState = "ok" | "hold" | "fail";

export const Route = createFileRoute("/case/retencao")({
  head: () => ({
    meta: [
      { title: pt.meta.caseTitle },
      { name: "description", content: pt.meta.caseDescription },
      { property: "og:title", content: pt.meta.caseTitle },
      { property: "og:description", content: pt.meta.caseDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/case/retencao" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/case/retencao" }],
  }),
  component: CasePage,
});

function CasePage() {
  const { t } = useLanguage();
  const c = t.caseStudy;
  const v = c.viz;

  const expandProps = { expandLabel: v.expand, collapseLabel: v.collapse };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative overflow-hidden border-b border-border px-5 pt-16 pb-16 sm:px-8 sm:pt-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/3 size-[34rem] rounded-full bg-primary/10 blur-[150px]"
        />
        <div className="relative mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {c.back}
          </Link>

          <p className="mt-12 text-xs uppercase tracking-[0.24em] text-primary">
            {c.hero.overline}
          </p>
          <h1 className="mt-5 max-w-[16ch] font-display text-[2.6rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
            {c.hero.title}
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {c.hero.subtitle}
          </p>

          <ul className="mt-9 flex flex-wrap gap-2">
            {c.hero.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-[70ch] text-xs leading-relaxed text-muted-foreground">
            {c.hero.disclaimer}
          </p>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-14 px-5 sm:px-8">
        {/* STICKY SECTION NAV */}
        <SectionNav label={c.nav.label} items={c.nav.items} />

        <main className="min-w-0 flex-1 pb-24">
          {/* CONTEXTO */}
          <CaseSection id="contexto" title={c.context.title}>
            <Prose className="space-y-5 text-base leading-[1.8] text-muted-foreground">
              {c.context.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </Prose>
          </CaseSection>

          {/* ATO 1 · DIAGNÓSTICO */}
          <CaseSection
            id="diagnostico"
            overline={c.diagnostic.overline}
            title={c.diagnostic.title}
          >
            <ChartFrame
              label={v.g1.label}
              title={v.g1.title}
              caption={v.g1.caption}
              ariaLabel={`${v.g1.title}. ${v.g1.caption}`}
              dataTable={{
                caption: v.g1.title,
                headers: [v.g1.weekPrefix, v.g1.series],
                rows: [1180, 1215, 1245, 1275, 1300, 1310, 1195, 1180].map((n, i) => [
                  `${v.g1.weekPrefix}${i + 1}`,
                  n,
                ]),
              }}
              height={300}
            >
              <ChartWau
                seriesLabel={v.g1.series}
                bandLabel={v.g1.band}
                annotation={v.g1.annotation}
                weekPrefix={v.g1.weekPrefix}
              />
            </ChartFrame>

            <dl className="my-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {v.stats.map((s) => (
                <div key={s.label} className="bg-background px-5 py-6">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <CountUp
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      className="block font-display text-3xl tabular-nums tracking-tight text-primary sm:text-4xl"
                    />
                    <span className="mt-2 block text-xs uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <ChartFrame
              label={v.g2.label}
              title={v.g2.title}
              caption={v.g2.caption}
              ariaLabel={`${v.g2.title}. ${v.g2.caption}`}
              dataTable={{
                caption: v.g2.title,
                headers: [v.g2.title, ...v.g2.x],
                rows: [
                  [v.g2.cohorts[0]!, "63%", "38%", "25%"],
                  [v.g2.cohorts[1]!, "62%", "37%", "23%"],
                  [v.g2.cohorts[2]!, "61%", "36%", "21%"],
                ],
              }}
              height={320}
            >
              <ChartCohorts
                cohortLabels={v.g2.cohorts}
                regionLabel={v.g2.region}
                xLabels={v.g2.x}
              />
            </ChartFrame>

            <Takeaway lines={v.takeaways.diagnostic} />

            <ExpandReasoning {...expandProps}>
              <Prose className="space-y-6">
                <p className="text-lg leading-[1.7] text-foreground">{c.diagnostic.lead}</p>
                {c.diagnostic.blocks.map((b) => (
                  <p key={b.title} className="text-base leading-[1.8] text-muted-foreground">
                    <strong className="font-medium text-foreground">{b.title}</strong> {b.body}
                  </p>
                ))}
              </Prose>
            </ExpandReasoning>

            <DecisionBox {...c.diagnostic.decision} />
          </CaseSection>

          {/* ATO 2 · DISCOVERY */}
          <CaseSection id="discovery" overline={c.discovery.overline} title={c.discovery.title}>
            <ChartFrame
              label={v.g3.label}
              title={v.g3.title}
              caption={v.g3.caption}
              subCaption={v.g3.sub}
              ariaLabel={`${v.g3.title}. ${v.g3.caption}`}
              dataTable={{
                caption: v.g3.title,
                headers: [v.g3.title, "%"],
                rows: [
                  [v.g3.bars[0]!, "45%"],
                  [v.g3.bars[1]!, "13%"],
                ],
              }}
              height={200}
            >
              <HorizontalBars
                max={60}
                data={[
                  { label: v.g3.bars[0]!, value: 45, emphasis: true },
                  { label: v.g3.bars[1]!, value: 13 },
                ]}
              />
            </ChartFrame>

            <Takeaway lines={v.takeaways.discovery} />

            <CodingTable {...c.discovery.table} />

            <Prose>
              {c.discovery.quotes.map((q) => (
                <PullQuote key={q}>{`\u201C${q}\u201D`}</PullQuote>
              ))}
            </Prose>

            <ExpandReasoning {...expandProps}>
              <Prose className="space-y-5">
                <p className="text-base leading-[1.8] text-muted-foreground">{c.discovery.lead}</p>
              </Prose>
              <DiscardList title={c.discovery.discardsTitle} items={c.discovery.discards} />
            </ExpandReasoning>

            <DecisionBox
              overline={c.discovery.opportunity.overline}
              title={c.discovery.opportunity.title}
              body={c.discovery.opportunity.body}
            />
          </CaseSection>

          {/* ATO 3 · PRIORIZAÇÃO */}
          <CaseSection
            id="priorizacao"
            overline={c.prioritization.overline}
            title={c.prioritization.title}
          >
            <ChangesRequested
              overline={v.veto.overline}
              state={v.veto.state}
              idea={v.veto.idea}
              reason={v.veto.reason}
              footnote={v.veto.footnote}
            />

            <Takeaway lines={v.takeaways.prioritization} />

            <ExpandReasoning {...expandProps}>
              <Prose className="space-y-5 text-base leading-[1.8] text-muted-foreground">
                {c.prioritization.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </Prose>
            </ExpandReasoning>

            <DecisionBox {...c.prioritization.decision} />
          </CaseSection>

          {/* ATO 4 · ROLLOUT */}
          <CaseSection id="rollout" overline={c.rollout.overline} title={c.rollout.title}>
            <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:items-start">
              <ChartFrame
                label={v.g4.label}
                title={v.g4.title}
                caption={v.g4.caption}
                subCaption={v.g4.sub}
                ariaLabel={`${v.g4.title}. ${v.g4.caption}`}
                dataTable={{
                  caption: v.g4.title,
                  headers: [v.g4.title, "%"],
                  rows: [
                    [v.g4.bars[0]!, "60%"],
                    [v.g4.bars[1]!, "20%"],
                  ],
                }}
                height={200}
                className="my-0"
              >
                <HorizontalBars
                  max={80}
                  data={[
                    { label: v.g4.bars[0]!, value: 60, emphasis: true },
                    { label: v.g4.bars[1]!, value: 20 },
                  ]}
                />
              </ChartFrame>
              <StatTile value={v.g4.tileValue} label={v.g4.tileLabel} />
            </div>

            <div className="mt-10">
              <StatusLegend
                items={v.checks.legend.map((l) => ({
                  state: l.state as CheckState,
                  label: l.label,
                }))}
              />
              <CiChecksPanel
                title={v.checks.title}
                runningLabel={v.checks.running}
                rows={v.checks.rows.map((r) => ({
                  name: r.name,
                  threshold: r.threshold,
                  state: r.state as CheckState,
                }))}
              />
            </div>

            <StageCards labels={v.stages.labels} items={v.stages.items} />

            <Takeaway lines={v.takeaways.rollout} />

            <ExpandReasoning {...expandProps}>
              <Prose>
                <p className="text-base leading-[1.8] text-muted-foreground">{c.rollout.lead}</p>
              </Prose>
              <ol className="mt-6 max-w-[72ch] space-y-5">
                {c.rollout.items.map((item, i) => (
                  <li key={item.title} className="flex gap-4 border-b border-border pb-5">
                    <span className="mt-0.5 font-mono text-xs tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base leading-[1.8] text-muted-foreground">
                      <strong className="font-medium text-foreground">{item.title}</strong>{" "}
                      {item.body}
                    </p>
                  </li>
                ))}
              </ol>
            </ExpandReasoning>

            <DecisionBox {...c.rollout.decision} />
          </CaseSection>

          {/* ATO 5 · DIRETORIA */}
          <CaseSection id="diretoria" overline={c.executive.overline} title={c.executive.title}>
            <MessageCard
              header={v.message.header}
              highlight={v.message.highlight}
              paragraphs={c.executive.paragraphs}
            />
            <Takeaway lines={v.takeaways.executive} />
          </CaseSection>

          {/* IA */}
          <CaseSection id="ia" overline={c.ai.overline} title={c.ai.title}>
            <Takeaway lines={v.takeaways.ai} />
            <div className="my-10 space-y-6">
              {c.ai.traces.map((trace) => (
                <AiDiff
                  key={trace.asked}
                  labels={c.ai.labels}
                  diffLabels={v.diff}
                  trace={trace}
                />
              ))}
            </div>
            <ExpandReasoning {...expandProps}>
              <Prose className="space-y-5">
                <p className="text-base leading-[1.8] text-muted-foreground">{c.ai.lead}</p>
                <p className="text-base leading-[1.8] text-muted-foreground">{c.ai.verification}</p>
              </Prose>
            </ExpandReasoning>
          </CaseSection>

          {/* APRENDIZADOS */}
          <CaseSection id="aprendizados" title={c.closing.title}>
            <ul className="max-w-[72ch] space-y-3">
              {c.closing.principles.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-3 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span className="text-base leading-[1.8] text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-primary/40 p-7 sm:p-9">
              <h3 className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                {c.closing.ctaTitle}
              </h3>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {c.closing.ctaLinkedin}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  {c.closing.ctaEmail}
                </a>
              </div>
            </div>

            <p className="mt-12 max-w-[72ch] text-xs leading-relaxed text-muted-foreground">
              {c.footnote}
            </p>

            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              {c.backToHome}
            </Link>
          </CaseSection>
        </main>
      </div>
    </div>
  );
}
