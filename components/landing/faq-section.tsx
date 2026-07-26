import * as React from "react";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { Card } from "@/components/ui/card";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is Proxi?",
    a: "Proxi is a trusted local services marketplace that helps customers discover, compare, and hire verified artisans and skilled professionals with transparent pricing and secure payments.",
  },
  {
    q: "How does Proxi work?",
    a: "Post a job or search by service and location, review verified professional profiles and itemized quotes, then book and pay securely. Payments are held in escrow and released after you confirm the work is complete.",
  },
  {
    q: "Are professionals vetted?",
    a: "Yes. Every professional on Proxi undergoes background checks, license verification, and portfolio review before receiving the verified pro badge.",
  },
  {
    q: "How are payments protected?",
    a: "Proxi uses escrow-protected payments: your funds are held securely and only released when you confirm the job was completed to your satisfaction.",
  },
  {
    q: "Where will Proxi launch first?",
    a: "The first launch city is Benin City, Nigeria. We will expand to additional cities after validating product-market fit.",
  },
  {
    q: "Is it free to join the waitlist?",
    a: "Yes. Joining the Proxi waitlist is free for both homeowners and professionals. Selected early participants receive exclusive benefits during our beta launch.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section id="faq" className="section-spacing bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.28em] text-brand-primary">
            Frequently asked
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl laptop:text-5xl">
            Questions people ask
          </h2>
          <p className="mt-4 text-base leading-7 text-brand-textSecondary sm:text-lg">
            Answers to the most common questions about how Proxi protects you
            and the professionals who join the platform.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {FAQ_ITEMS.map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden"
              padding="md"
              role="region"
              aria-labelledby={`faq-question-${idx}`}
            >
              <button
                id={`faq-question-${idx}`}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <Typography as="p" variant="body" className="font-semibold text-brand-dark">
                  {item.q}
                </Typography>
                <span className="text-sm text-brand-textSecondary">{openIndex === idx ? "−" : "+"}</span>
              </button>

              <div
                id={`faq-panel-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`mt-3 transition-[max-height,opacity] overflow-hidden ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <Typography variant="body" className="text-brand-textSecondary">
                  {item.a}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
