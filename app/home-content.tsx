import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const questions = [
  {
    title: 'What is Sjögren’s disease?',
    answer:
      'Sjögren’s is a long-term autoimmune condition. This means the immune system, which normally protects the body, mistakenly attacks healthy tissue. It often affects the glands that make tears and saliva.',
    source: 'NIAMS',
    url: 'https://www.niams.nih.gov/health-topics/sjogrens-disease',
  },
  {
    title: 'Does it only cause dryness?',
    answer:
      'Dry eyes and a dry mouth are common, but the experience varies from person to person. Fatigue and joint or muscle pain can also affect everyday life. Some people have effects in other parts of the body.',
    source: 'NHS',
    url: 'https://www.nhs.uk/conditions/sjogrens-syndrome/',
  },
  {
    title: 'Can children have Sjögren’s?',
    answer:
      'Yes. Children can have Sjögren’s too. Dryness may be less noticeable than it is in adults. Repeated swelling of the saliva-producing glands near the cheeks can be one feature. Diagnosis can be challenging and needs assessment by healthcare professionals.',
    source: 'Sjögren’s Foundation',
    url: 'https://sjogrens.org/living-with-sjogrens/sjogrens-in-children',
  },
];

export default function Home() {
  return (
    <div className="education">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#main">
            <span className="mark">SjD /</span> Understanding Sjögren’s
          </a>
        </div>
      </header>
      <main className="shell" id="main">
        <div className="intro">
          <p className="kicker">For patients, families and everyone learning</p>
          <h1>
            Understanding Sjögren’s,
            <br />
            one question at a time.
          </h1>
          <p className="lead">
            Sjögren’s disease can affect people in different ways, at different
            ages. Start with a few common questions, then explore information
            from established health organisations.
          </p>
        </div>
        <div className="learning-grid">
          <section aria-labelledby="questions">
            <h2 id="questions">Start here</h2>
            <Accordion className="questions" defaultValue={['question-0']}>
              {questions.map((question, index) => (
                <AccordionItem key={question.title} value={`question-${index}`}>
                  <AccordionTrigger>{question.title}</AccordionTrigger>
                  <AccordionContent>
                    <p>{question.answer}</p>
                    <p className="source">
                      Read more at{' '}
                      <a href={question.url}>{question.source} ↗</a>
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
          <aside className="resource-panel" aria-labelledby="resources">
            <p className="kicker">Keep exploring</p>
            <h2 id="resources">
              Information for you
              <br />
              and your family.
            </h2>
            <a href="https://www.nhs.uk/conditions/sjogrens-syndrome/">
              Living with Sjögren’s · NHS ↗
            </a>
            <a href="https://sjogrens.org/living-with-sjogrens/sjogrens-in-children">
              Sjögren’s in children · Sjögren’s Foundation ↗
            </a>
            <a href="https://www.niams.nih.gov/health-topics/sjogrens-disease">
              Understanding the condition · NIAMS ↗
            </a>
          </aside>
        </div>
        <p className="notice">
          This early version is in development and has not yet had independent
          clinical or patient review. It provides general information, not a
          diagnosis or personal treatment advice. Speak with your healthcare
          team about your own or your child’s health.
        </p>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <p>
            Understanding Sjögren’s · An independent public engagement project
          </p>
          <p>
            Sources checked 8 September 2026. No affiliation with or endorsement
            by the linked organisations is claimed.
          </p>
          <a href="https://github.com/JunjiePeng/sjd-public-engagement">
            About the project ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
