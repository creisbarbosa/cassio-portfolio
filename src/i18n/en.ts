import type { Dictionary } from "./pt";

export const en: Dictionary = {
  meta: {
    langLabel: "EN",
    toggleLabel: "PT",
    htmlLang: "en",
    homeTitle: "Cassio Barbosa · Product Manager — Fintech & Capital Markets",
    homeDescription:
      "Product Manager for B2B financial products. Structured discovery, criteria-driven prioritization, AI with curation. Read the retention case.",
    caseTitle: "The habit that never forms — Product case | Cassio Barbosa",
    caseDescription:
      "Product case on retention at a B2B data-marketing platform: cohort diagnosis, discovery, a bet with an upheld veto and a rollout with guardrails.",
  },
  nav: {
    items: [
      { id: "inicio", label: "Home" },
      { id: "como-trabalho", label: "How I work" },
      { id: "case", label: "Case study" },
      { id: "experiencia", label: "Experience" },
      { id: "contato", label: "Contact" },
    ],
    wordmark: "Cassio Barbosa",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navLabel: "Main",
    mobileNavLabel: "Main (mobile)",
    themeToggle: "Light/dark theme",
    langGroupLabel: "Idioma / Language",
  },
  hero: {
    overline: "Cassio Barbosa — Product Manager · Fintech & Capital Markets",
    title: "I decide with data, write decisions down, and use AI with curation.",
    body: "PM for B2B financial products — Internet Banking and capital-markets settlement — with 10+ years across design and product. Structured discovery, criteria-driven prioritization, and the discipline of signing the why behind every decision.",
    primaryCta: "Read the product case",
    secondaryCta: "Get in touch",
    caption: "Brasília, Brazil · Remote (BR/International) · PT · EN",
  },
  heroTerminal: {
    label: "decision log",
    hint: "hover to pause",
    ariaLabel: "Product questions and verdicts",
    lines: [
      {
        query: "> does a mass blast fix retention?",
        verdict: "— no. see why",
        href: "/case/retencao#diagnostico",
      },
      {
        query: "> does a high RICE score override a principle?",
        verdict: "— no. see the veto",
        href: "/case/retencao#priorizacao",
      },
      {
        query: "> does AI write the decision?",
        verdict: "— it computes. I sign.",
        href: "/case/retencao#ia",
      },
    ],
  },
  stats: [
    { value: 3, prefix: "", suffix: "+", label: "years in financial services" },
    { value: 10, prefix: "", suffix: "+", label: "years in digital product" },
    { value: 1, prefix: "", suffix: "", label: "MBA in Project Management — FGV" },
    { value: 4, prefix: "~", suffix: "", label: "years of Product Design background" },
  ],
  credentials: [
    "3+ years in financial services",
    "10+ years in digital product",
    "MBA in Project Management — FGV",
    "Product Design background",
  ],
  work: {
    title: "How I work",
    subtitle: "Process matters because it's what repeats when context changes.",
    expand: "expand +",
    collapse: "collapse −",
    cards: [
      {
        number: "01",
        title: "Cause before plan.",
        lead: "I separate trend from noise and symptom from cause before proposing anything.",
        body: "Diagnosis without a decision doesn't count — every reading of mine closes with an owned, written decision.",
      },
      {
        number: "02",
        title: "Discovery with method.",
        lead: "Interviews coded into fact ≠ opinion ≠ inference, 5 Whys, JTBD.",
        body: "One interview decides nothing alone: it triangulates with quantitative data.",
      },
      {
        number: "03",
        title: "Prioritization with criteria — and with vetoes.",
        lead: "RICE and MoSCoW inform; principles decide.",
        body: "I've upheld a veto on a competitively-scored idea because a customer quote and a metric guardrail weighed against it. A good score doesn't override a principle.",
      },
      {
        number: "04",
        title: "AI with curation.",
        lead: "I use AI as a review partner and calculation engine — to tear down my own plans, re-run the math and attack my biases.",
        body: "Model output never ships unreviewed; the signature on the decision is mine.",
      },
    ],
  },
  featuredCase: {
    overline: "Product case",
    title: "The habit that never forms",
    summary:
      'A B2B data-marketing platform watched activation grow while retention leaked. In 5 days: a diagnosis separating mix from degradation, discovery separating fact from opinion, a bet with a veto upheld against RICE, a rollout with concurrent holdout and three guardrails — and a written "no" to the directorate, with accountability dates.',
    chips: [
      "Retention",
      "Cohort diagnosis",
      "JTBD",
      "RICE",
      "Experiment design",
      "AI curation",
    ],
    cta: "Read the full case",
    actsLabel: "Case acts",
    chart: {
      title: "G1 · retention by cohort",
      caption: "preview — full curve in the case",
      series: [
        { label: "with consultant", points: [100, 78, 66, 58, 52, 49, 47, 45] },
        { label: "self-service", points: [100, 62, 44, 32, 24, 19, 15, 13] },
      ],
    },
    acts: [
      {
        id: "diagnostico",
        label: "Diagnosis",
        teaser: "The recent drop is cohort mix, not product degradation.",
        metric: "~13%",
        metricLabel: "W+8 retention, self-service",
        href: "/case/retencao#diagnostico",
      },
      {
        id: "discovery",
        label: "Discovery",
        teaser: "Interview coded into fact, opinion and inference — then triangulated with data.",
        metric: "~70%",
        metricLabel: "never reach the value trigger",
        href: "/case/retencao#discovery",
      },
      {
        id: "priorizacao",
        label: "Prioritization",
        teaser: "A good score doesn't override a principle: veto upheld against RICE.",
        metric: "1",
        metricLabel: "veto upheld",
        href: "/case/retencao#priorizacao",
      },
      {
        id: "rollout",
        label: "Rollout",
        teaser: "Concurrent holdout and guardrails defined before scaling.",
        metric: "3",
        metricLabel: "rollout guardrails",
        href: "/case/retencao#rollout",
      },
      {
        id: "diretoria",
        label: "Directorate",
        teaser: "A mass blast \u201Cthis week\u201D: declined in writing, with an alternative.",
        metric: "1",
        metricLabel: "written \u201Cno\u201D with a review date",
        href: "/case/retencao#diretoria",
      },
    ],
  },
  experience: {
    title: "Path",
    subtitle:
      "From product design to product management — the same question, more accountability for the answer.",
    expand: "see more",
    collapse: "see less",
    promoted: "merge: promoted to PM",
    items: [
      {
        tag: "pm@opea",
        role: "Product Manager",
        company: "Opea — Financial Services",
        period: "Jun 2025–present",
        description:
          "Own Banco Opea SCD's Internet Banking and the settlement Cockpit (gross, multilateral, integrations). Discovery to delivery: root-cause analysis, PRDs with MoSCoW, RICE prioritization, incident triage with a criticality matrix, written decisions as the default.",
        emphasis: true,
      },
      {
        tag: "po@opea",
        role: "Product Owner",
        company: "Opea — Financial Services",
        period: "Apr 2023–Jun 2025",
        description:
          "Structured the team's Product Discovery practice and brought prototyping into requirements. Operated and evolved the bank's digital products — Pix, wires, boletos, statements — and the capital-markets pipeline. Promoted to PM.",
        emphasis: true,
      },
      {
        tag: "design→product",
        role: "Product Designer & Front-end",
        company: "Peerdustry",
        period: "2022–2023",
        description:
          "B2B connected-manufacturing platform. Wireframes to code: Figma prototypes and React front-end.",
        emphasis: false,
      },
      {
        tag: "design@artis",
        role: "Product Designer",
        company: "Artis Tecnologia",
        period: "2018–2022",
        description:
          "Medical software for neurosurgery — a regulated domain where product error is clinical risk. Design, project management, translating specialist requirements into usable product.",
        emphasis: false,
      },
      {
        tag: "design@roots",
        role: "Formative years",
        company: "Manufatura, CRA-DF, Lamparina",
        period: "2011–2017",
        description:
          "Graphic and product design: the habit of looking at the user before looking at the solution.",
        emphasis: false,
      },
    ],
  },
  tools: {
    title: "Toolbox",
    showMore: "more",
    showLess: "collapse",
    columns: [
      {
        title: "Product & data",
        items: [
          "Discovery (JTBD, 5 Whys, interviews)",
          "RICE, MoSCoW, OKRs",
          "PRDs & decision docs",
          "A/B testing & experiment design",
          "Cohort & retention analysis",
          "Figma & prototyping",
          "Pivotal Tracker, ClickUp, LucidChart",
        ],
      },
      {
        title: "AI in daily PM work",
        items: [
          "Assisted discovery & adversarial doc review",
          "Role- and criteria-structured prompts",
          "Verification: math and samples checked before signing",
          "Principle: AI generates, I sign",
        ],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      { degree: "MBA, Project Management", school: "FGV", years: "2022–2024" },
      { degree: "Pós Tech Developer 360", school: "Rocketseat", years: "2025–2026" },
      {
        degree: "BA, Industrial Design",
        school: "University of Brasília",
        years: "2011–2017",
      },
    ],
  },
  contact: {
    title: "Let's talk product?",
    body: "Open to Product Manager conversations — Brazil or international remote.",
    linkedin: "LinkedIn",
    email: "Email: creisbarbosa@gmail.com",
  },
  footer: {
    copyright:
      "© 2026 Cassio Barbosa · Brasília, Brazil · Built with real content, no lorem ipsum.",
    linksLabel: "Contact links",
    links: { linkedin: "LinkedIn", github: "GitHub", email: "Email" },
  },
  caseStudy: {
    back: "Back to home",
    backToHome: "Back to home",
    viz: {
      expand: "expand the full reasoning",
      collapse: "collapse reasoning",
      takeaways: {
        diagnostic: [
          "WAU slows down before the holidays: the signal came first, the noise after.",
          "The leak has an address: between week 1 and week 4.",
          "The gap by origin (consultant vs. self-service) explains almost all of it.",
        ],
        discovery: [
          "The customer isn't asking for more data: she wants a verdict and the next action.",
          "Volume works against her fear — and against the opt-out guardrail.",
        ],
        prioritization: [
          "RICE brought the vetoed idea back with a competitive score.",
          "I kept the veto: frameworks inform, criteria decide.",
        ],
        rollout: [
          "The trigger exists and is measurable — but ~70% of the base never reaches it.",
          "Every guardrail has a control-relative threshold and may fail my own bet.",
        ],
        executive: ["Fifteen lines, decision in the first sentence, written kill criterion."],
        ai: ["The most valuable parts of the AI trace are the ones I rejected."],
      },
      g1: {
        label: "G1",
        title: "Weekly WAU",
        series: "WAU",
        weekPrefix: "W",
        band: "regional holidays",
        annotation: "growth slows down here",
        caption:
          "Active accounts per week. The slowdown shows up at W6, before the regional-holiday window used as the explanation.",
      },
      stats: [
        { value: 63, prefix: "", suffix: "%", label: "return in W+1" },
        { value: 40, prefix: "~", suffix: "%", label: "vanish by W+4" },
        { value: 70, prefix: "~", suffix: "%", label: "never reach the trigger" },
      ],
      g2: {
        label: "G2",
        title: "Where the habit leaks",
        cohorts: ["Month 1", "Month 2", "Month 3"],
        x: ["W+1", "W+4", "W+8"],
        region: "the leak window",
        caption:
          "Retention by monthly cohort. All three cohorts drop in the same stretch: the problem is the window, not the vintage.",
      },
      g3: {
        label: "G3",
        title: "W+8 retention by origin",
        bars: ["With partner consultant", "Self-service"],
        caption: "Same window, different origins — the gap is mix, not product.",
        sub: "self-service = 75% of the base",
      },
      veto: {
        overline: "changes requested",
        state: "Veto upheld",
        idea: "increase campaign volume",
        reason:
          "\u201CI'm afraid of annoying my customer and having her opt out\u201D — the idea pays with the opt-out guardrail.",
        footnote: "RICE score: competitive — irrelevant",
      },
      g4: {
        label: "G4",
        title: "The report trigger",
        bars: ["Opened the report", "Did not open"],
        tileValue: "~70%",
        tileLabel: "never reach the trigger",
        caption: "New campaign within 2 weeks, by post-campaign report opening.",
        sub: "assumed correlation — only a controlled test proves cause",
      },
      checks: {
        title: "rollout guardrails / checks",
        running: "running…",
        legend: [
          { state: "ok", label: "advance" },
          { state: "hold", label: "hold" },
          { state: "fail", label: "revert" },
        ],
        rows: [
          {
            name: "Opt-out",
            threshold: "opt-out ≥1.2x control → hold · ≥1.5x → revert",
            state: "ok",
          },
          {
            name: "Support complaints",
            threshold: "support ≥1.2x control → hold · ≥1.5x → revert",
            state: "ok",
          },
          {
            name: "WAU quality",
            threshold: "report-only activity ≥1.2x control → hold · ≥1.5x → revert",
            state: "ok",
          },
        ],
      },
      stages: {
        labels: { question: "question", gate: "gate", reversal: "reversal" },
        items: [
          {
            name: "Concierge · n≈15",
            question: "Does the verdict I sign make sense to the customer?",
            gate: "Judgment, not statistics — I review every send before it goes out.",
            reversal: "Stopping means switching off a manual send: zero cost.",
          },
          {
            name: "Test",
            question: "Does the effect hold against a concurrent holdout?",
            gate: "MDE ~+10pp over a ~20% baseline (α=5%, power 80%).",
            reversal: "Below the minimum delta, I kill the bet and return to discovery.",
          },
          {
            name: "Scale",
            question: "Does the effect hold with guardrails inside threshold?",
            gate: "Three states: advance / hold / revert.",
            reversal: "Hold freezes expansion for a week before reverting.",
          },
        ],
      },
      message: {
        header: "to: business directorate",
        highlight: "We are not sending the mass blast this week.",
      },
      diff: { removed: "rejected", added: "instead" },
    },
    hero: {
      overline: "Product case",
      title: "The habit that never forms",
      subtitle:
        "Retention at a B2B data-marketing platform for small retailers — diagnosis, discovery, bet and rollout plan in 5 days, with AI as a review partner.",
      tags: [
        "Hiring-process technical challenge",
        "Synthetic data, company anonymized",
        "Role: solo PM, end to end",
        "~5h of work + curated AI",
      ],
      disclaimer:
        "Company unnamed and figures altered (with internal consistency) out of respect for the hiring process's confidentiality.",
    },
    nav: {
      label: "Case sections",
      items: [
        { id: "contexto", label: "Context" },
        { id: "diagnostico", label: "Diagnosis" },
        { id: "discovery", label: "Discovery" },
        { id: "priorizacao", label: "Prioritization" },
        { id: "rollout", label: "Rollout" },
        { id: "diretoria", label: "Directorate" },
        { id: "ia", label: "AI" },
        { id: "aprendizados", label: "Takeaways" },
      ],
    },
    context: {
      title: "The context",
      paragraphs: [
        "A B2B data-marketing platform serves micro and small retailers. The north-star metric is weekly active accounts (WAU): an account counts as active when it fires a marketing action or checks a campaign result. The metric has two guardrails: message opt-out rate and support complaints.",
        "Activation was growing, but the team suspected the base was entering through one door and leaving through another: companies ran their first campaign and the weekly habit never formed. Taking the seat, I received WAU series, retention cohorts, report-engagement data, an interview transcript — and a message from the business directorate requesting a mass re-engagement blast \u201Cthis week\u201D.",
      ],
    },
    diagnostic: {
      overline: "Act 1",
      title: "Diagnosis: separating signal from noise",
      lead: "Before any plan, the question: is the recent WAU drop the story — or did the signal come earlier?",
      metrics: [
        { value: "60%+", label: "return in week 1" },
        { value: "~40%", label: "gone by week 4" },
        { value: "~45% / ~13%", label: "week-8 retention: consultant vs. self-service" },
        { value: "~70%", label: "never reach the trigger" },
      ],
      blocks: [
        {
          title: "Trend vs. noise.",
          body: "Weekly additions decelerated before the regional holidays the team used as an explanation. I treated the last two weeks as noise and the earlier deceleration as signal — with a written, objective confirmation criterion.",
        },
        {
          title: "Where the habit leaks.",
          body: "Over 60% of accounts return in week 1 — activation works. The leak concentrates between weeks 1 and 4: ~40% of week-1 active accounts disappear by week 4; after that, the loss decelerates. Not an activation problem, not a long-tail problem: the exact window where the habit should consolidate.",
        },
        {
          title: "The cause is mix, not product.",
          body: "Accounts activated with a partner consultant retained ~45% at week 8; self-service accounts, ~13%. And the math closed: the weighted mix of origins reproduced almost exactly the latest cohort's retention — supporting a verifiable hypothesis that cohort-over-cohort deterioration could be entirely mix composition, not product degradation. I flagged the missing data [to validate] instead of hiding the uncertainty.",
        },
        {
          title: "The mechanism, in numbers.",
          body: "~30% of companies opened the post-campaign report; of those, ~60% ran a new campaign within 2 weeks, versus ~20% of non-openers. ~70% of the base never reached the trigger. Caveat on record: assumed correlation, not proven causality — openers are probably the already-engaged companies; only a controlled test separates the two.",
        },
      ],
      decision: {
        overline: "Decision",
        title: "Week-one decision (owned, in writing)",
        body: "No mass re-engagement blast — it attacks the symptom, targets the whole base when the problem is one segment and one window, and pays with the opt-out guardrail. Instead: a controlled pilot in the self-service segment between weeks 1 and 4, where ~75% of the volume was.",
      },
    },
    discovery: {
      overline: "Act 2",
      title: "Discovery: separating what the customer lived from what she believes",
      lead: "One interview decides nothing on its own — it explains the why behind what the data shows at scale. I coded the transcript into three columns: fact (what she lived), opinion (what she believes) and my inference (owned as mine, not hers).",
      table: {
        caption: "Interview coding",
        headers: ["Fact", "Opinion", "Inference"],
        rows: [
          [
            "Sent campaigns, looked at the result and stopped.",
            "\u201CSome movement, I think.\u201D",
            "Without a verdict, the customer can't attribute value to the effort — and the habit never closes the loop.",
          ],
          [
            "The report delivered opens and clicks.",
            "\u201CI wanted to know whether it was worth it or not.\u201D",
            "The engagement metric doesn't answer her business question; translation is missing, not more data.",
          ],
          [
            "Didn't know what the next campaign should be.",
            "\u201CTell me: this week, send this promo to these customers.\u201D",
            "The bottleneck is decision, not tooling — the next action must arrive ready.",
          ],
          [
            "Cut her sending frequency on her own.",
            "\u201CI'm afraid of annoying my customer until she asks to leave the list.\u201D",
            "Any volume-based solution works against her fear and against the opt-out guardrail.",
          ],
        ],
      },
      quotes: [
        "Some movement, I think.",
        "I'm afraid of annoying my customer until she asks to leave the list.",
      ],
      opportunity: {
        overline: "Target opportunity",
        title:
          "Turn the post-campaign report into a verdict + one suggested next action, delivered proactively",
        body: "Three decisions inside it: verdict before metrics; one action, not a menu (choice paralysis isn't solved with more options); push, not pull (it's what the consultant does and self-service lacks).",
      },
      discardsTitle: "What I discarded, by name",
      discards: [
        { item: "The mass blast", reason: "the interviewee herself named the cost — opt-out." },
        {
          item: "Replicating the human consultant across the base",
          reason: "works, doesn't scale.",
        },
        {
          item: "Reminder / notification only",
          reason:
            "brings the user back to freeze at the same screen — and inflates the metric without creating value.",
        },
        { item: "A richer report", reason: "more data was the problem, not the cure." },
      ],
    },
    prioritization: {
      overline: "Act 3",
      title: "Prioritization: RICE with criteria — and with a veto",
      paragraphs: [
        "I ran structured ideation (every idea traceable to a specific data point or quote: base question → idea → reasoning → feasibility) and a RICE table with explicit assumptions (Reach from average WAU; Effort by relative complexity — labeled as assumptions, not measurements).",
      ],
      decision: {
        overline: "Decision",
        title: "The detail that matters",
        body: "\u201CIncrease campaign volume\u201D came back with a competitive RICE score. I kept the veto. Frameworks inform; criteria decide — and there was a customer quote and an opt-out guardrail against it. A good score doesn't override a principle.",
      },
    },
    rollout: {
      overline: "Act 4",
      title: "Rollout: experiment design with real guardrails",
      lead: "The plan I had originally drafted (classic 3-ring canary release against historical baseline) fell in review — five flaws, the worst one: I would have read the pilot against a history I had myself declared contaminated. I redesigned:",
      items: [
        {
          title: "Concurrent holdout in every ring",
          body: "instead of comparison against history.",
        },
        {
          title: "Sample sizes from statistical power",
          body: "(α=5%, power 80%), not \u201C% of base\u201D: I assumed I could only see a large effect (MDE ~+10pp over a ~20% baseline) and said so upfront.",
        },
        {
          title: "Ring 1 concierge (n≈15)",
          body: "a judgment trigger, not a statistical one — I review every send before it goes out and sign the verdict. A wrong verdict at scale destroys more trust than a useless report.",
        },
        {
          title: "Three states, not two",
          body: "advance / hold / revert — hold freezes expansion and buys a week to investigate, instead of forcing a binary call.",
        },
        {
          title: "Three guardrails with control-relative thresholds",
          body: "opt-out, support, and a third I added myself — WAU quality: if an account's only activity becomes \u201Cchecking the report\u201D, my own feature is inflating the metric I report. I owned in writing that this guardrail may fail a bet that raises WAU.",
        },
      ],
      decision: {
        overline: "Decision",
        title: "An owned kill criterion",
        body: "Below a minimum delta in ring 2, I kill the bet and return to discovery — no sample inflation to chase significance.",
      },
    },
    executive: {
      overline: "Act 5",
      title: "The reply to the directorate: writing that decides",
      paragraphs: [
        "The directorate wanted the mass blast. The reply: 15 lines, decision in the first sentence, half a sentence validating the urgency instinct before the \u201Cbut\u201D (\u201Cthe instinct to act fast is right — the drop is real and deserves a response this week\u201D), a diagnosis with numbers, an alternative with two accountability dates and a written kill criterion. As the metric owner — not asking permission, not negotiating.",
      ],
    },
    ai: {
      overline: "Method",
      title: "AI in the process: curation, not outsourcing",
      lead: "AI was mandatory in the challenge — and I used it the way I use it at work: review partner and calculation engine, not ghostwriter. The full prompt trace was delivered as an artifact. The most valuable parts are the ones I rejected:",
      labels: {
        asked: "what I asked",
        review: "what fell in review",
        instead: "what I did instead",
      },
      traces: [
        {
          asked: "\u201CWrite the rollout plan as a canary release, 3 rings.\u201D",
          review:
            "Torn down with arguments: 5 flaws, including comparing against a contaminated history and rings shorter than the metric's reading window.",
          instead:
            "I accepted, and changed the prompt from \u201Cwrite the plan\u201D to \u201Cdo the math and list the holes\u201D.",
        },
        {
          asked: "\u201CWrite the executive reply using the Minto Pyramid.\u201D",
          review: "The output invoked Minto and contradicted it — burying the decision in line 8.",
          instead: "I accepted the fix: decision in line 1.",
        },
        {
          asked: "\u201CUse NVC to soften the executive text.\u201D",
          review: "I rejected it in format and accepted it in principle.",
          instead:
            "One validating half-sentence, without turning a communicated decision into a negotiated proposal.",
        },
      ],
      verification:
        "Checks I did by hand before signing: the mix arithmetic (the calculation supporting the central hypothesis) and the power-based sample sizes.",
    },
    closing: {
      title: "What this case shows about how I work",
      principles: [
        "Owned decisions with a why.",
        "Cause before plan.",
        "Method in discovery: fact ≠ opinion ≠ inference.",
        "Judgment in rollout: guardrails that may fail my own bet.",
        "Writing that decides.",
        "AI curation with a human signature.",
        "Uncertainty flagged with [to validate] — signaled, never hidden.",
      ],
      ctaTitle: "Want to talk about this case?",
      ctaLinkedin: "LinkedIn",
      ctaEmail: "Email",
    },
    footnote:
      "Case produced for a hiring-process technical challenge (2026). The original data was already synthetic; company, brand and figures were further anonymized out of respect for the process's confidentiality. The reasoning, decisions and artifacts are mine.",
  },
};
