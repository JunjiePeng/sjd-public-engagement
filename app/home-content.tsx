import { useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Menu,
  RotateCcw,
  X,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  sources,
  topics,
  questions,
  audiencePaths,
  tests,
} from './learning-content';
import {
  answerQuestion,
  initialQuiz,
  nextQuestion,
  scoreQuiz,
} from './quiz-state';

function Source({ id }: { id: keyof typeof sources }) {
  const source = sources[id];
  return (
    <a className="source-link" href={source.url}>
      Source: {source.name} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function Quiz() {
  const [state, setState] = useState(initialQuiz);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = questions[state.index];
  const selected = state.answers[state.index];
  const answered = selected !== undefined;
  const changeQuestion = () => {
    setState(nextQuestion(state, questions.length));
    requestAnimationFrame(() => heading.current?.focus());
  };
  const restart = () => {
    setState(initialQuiz());
    requestAnimationFrame(() => heading.current?.focus());
  };
  return (
    <section className="quiz-section" id="quiz" aria-labelledby="quiz-title">
      <div className="shell quiz-layout">
        <div className="quiz-intro">
          <span className="eyebrow">Sjögren’s quiz</span>
          <h2 id="quiz-title">
            Common questions
            <br />
            <em>about Sjögren’s.</em>
          </h2>
          <p className="quiz-note">
            This is a learning activity. It cannot tell you whether you have
            Sjögren’s.
          </p>
        </div>
        <div className="quiz-card">
          <div
            className="quiz-progress"
            aria-label={`${state.finished ? questions.length : state.index + 1} of ${questions.length} questions`}
          >
            {questions.map((q, i) => (
              <span
                key={q.id}
                className={state.finished || i <= state.index ? 'filled' : ''}
              />
            ))}
          </div>
          {state.finished ? (
            <>
              <p className="eyebrow">Quiz complete</p>
              <h3 ref={heading} tabIndex={-1}>
                Your answers
              </h3>
              <p>
                You answered {scoreQuiz(state, questions)} of {questions.length}{' '}
                correctly.
              </p>
              <Accordion className="questions quiz-review">
                {questions.map((q, i) => (
                  <AccordionItem key={q.id} value={q.id}>
                    <AccordionTrigger>
                      {i + 1}. {q.takeaway}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>{q.explanation}</p>
                      <Source id={q.source} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button className="action-button" onClick={restart}>
                <RotateCcw size={17} aria-hidden="true" /> Restart quiz
              </Button>
            </>
          ) : (
            <>
              <p className="eyebrow">
                Question {state.index + 1} of {questions.length}
              </p>
              <h3 ref={heading} tabIndex={-1}>
                {question.prompt}
              </h3>
              <fieldset
                className="answer-options"
                aria-label="Choose an answer"
              >
                {question.options.map((option, index) => (
                  <Button
                    variant="outline"
                    key={`${question.id}-${index}`}
                    className={`answer-option ${answered && index === question.correct ? 'correct' : ''} ${answered && index === selected && index !== question.correct ? 'incorrect' : ''}`}
                    disabled={answered}
                    aria-pressed={selected === index}
                    onClick={() =>
                      setState((current) =>
                        answerQuestion(current, index, question.options.length),
                      )
                    }
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {answered && index === question.correct && (
                      <Check size={20} aria-label="Correct answer" />
                    )}
                  </Button>
                ))}
              </fieldset>
              <div aria-live="polite" aria-atomic="true">
                {answered && (
                  <div className="answer-explanation">
                    <p>
                      <strong>
                        {selected === question.correct
                          ? 'Correct.'
                          : 'Not quite.'}
                      </strong>{' '}
                      {question.explanation}
                    </p>
                    <Source id={question.source} />
                  </div>
                )}
              </div>
              {answered && (
                <Button
                  className="action-button next-question"
                  onClick={changeQuestion}
                >
                  {state.index === questions.length - 1
                    ? 'View results'
                    : 'Next question'}
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    ['#learn', 'Understanding SjD'],
    ['#childhood', 'Children & families'],
    ['#involvement', 'Getting involved'],
    ['#resources', 'Resources'],
  ];
  return (
    <div className="education">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a
            className="brand"
            href="#main"
            aria-label="Understanding Sjögren’s, home"
          >
            <span className="brand-mark">
              SjD<span>·</span>
            </span>
            <span>
              Understanding
              <br />
              <strong>Sjögren’s</strong>
            </span>
          </a>
          <Button
            variant="ghost"
            className="menu-button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
          <nav
            id="navigation"
            className={menuOpen ? 'navigation is-open' : 'navigation'}
            aria-label="Main navigation"
          >
            {nav.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="shell hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="little-line" /> For people with Sjögren’s & their
              families
            </p>
            <h1 id="hero-title">
              Understanding
              <br />
              <em>Sjögren’s.</em>
            </h1>
            <p className="hero-lead">
              Information about Sjögren’s disease and childhood-onset Sjögren’s,
              for people living with the condition, their families and the wider
              public.
            </p>
            <a className="primary-link" href="#learn">
              About Sjögren’s <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#childhood">
              Children & families <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-aside">
            <div className="hero-art">
              <img
                src={`${import.meta.env.BASE_URL}images/community.jpg`}
                width="1448"
                height="1086"
                alt="Illustration of adults and a young person sharing a conversation."
                fetchPriority="high"
              />
            </div>
          </div>
        </section>
        <div className="review-strip">
          <div className="shell">
            <BookOpen size={17} aria-hidden="true" />
            <p>
              An independent educational project.{' '}
              <a href="#about">
                Review by clinicians and people with Sjögren’s is pending.
              </a>
            </p>
          </div>
        </div>
        <section
          className="shell learning-section"
          id="learn"
          aria-labelledby="learn-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Understanding Sjögren’s</p>
              <h2 id="learn-title">
                More than dry eyes
                <br />
                and a dry mouth.
              </h2>
            </div>
            <p>
              Sjögren’s disease (say “SHOW-grins”), or SjD, can affect people in
              different ways.
            </p>
          </div>
          <Tabs defaultValue="basics" className="topic-tabs">
            <TabsList
              aria-label="Explore Sjögren’s topics"
              className="topic-list"
            >
              {topics.map((topic) => (
                <TabsTrigger key={topic.id} value={topic.id}>
                  {topic.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {topics.map((topic, i) => (
              <TabsContent
                key={topic.id}
                value={topic.id}
                className="topic-panel"
              >
                <div className="topic-summary">
                  <span className="topic-number" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="eyebrow">{topic.kicker}</p>
                    <h3>{topic.heading}</h3>
                  </div>
                </div>
                <div className="topic-detail">
                  <p>{topic.body}</p>
                  <div className="takeaway">
                    <p>{topic.takeaway}</p>
                  </div>
                  <Source id={topic.source} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <p className="section-note">
            These explanations describe possible experiences, not a checklist
            for diagnosis. Your care team can help make sense of your symptoms.
          </p>
        </section>
        <section
          className="childhood-section"
          id="childhood"
          aria-labelledby="childhood-title"
        >
          <div className="shell childhood-layout">
            <div className="childhood-intro">
              <p className="eyebrow">02 / Children & families</p>
              <h2 id="childhood-title">
                Sjögren’s
                <br />
                <em>in childhood.</em>
              </h2>
              <p>
                Childhood-onset Sjögren’s disease (cSjD) means Sjögren’s that
                begins in childhood.
              </p>
              <div className="childhood-fact">
                <span className="fact-label">
                  How childhood Sjögren’s can differ
                </span>
                <p>
                  Children may have less obvious dryness than adults. Repeated
                  swelling of the glands near the cheeks can be a feature.
                </p>
                <Source id="children" />
              </div>
            </div>
            <Tabs defaultValue="young" className="audience-tabs">
              <TabsList
                aria-label="Choose a learning path"
                className="audience-list"
              >
                <TabsTrigger value="young">I’m a young person</TabsTrigger>
                <TabsTrigger value="caregiver">
                  I’m a parent or carer
                </TabsTrigger>
              </TabsList>
              {audiencePaths.map((path) => (
                <TabsContent
                  key={path.id}
                  value={path.id}
                  className="audience-panel"
                >
                  <p className="eyebrow">{path.kicker}</p>
                  <h3>{path.heading}</h3>
                  <Accordion
                    className="questions"
                    defaultValue={[path.items[0].id]}
                  >
                    {path.items.map((item) => (
                      <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <p>{item.body}</p>
                          <div className="conversation-prompt">
                            <span>A question you could ask</span>
                            <p>“{item.prompt}”</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="path-source">
                    <Source id="children" />
                    <span>
                      Conversation prompts are suggestions from this project.
                    </span>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        <section
          className="shell appointments-section"
          id="appointments"
          aria-labelledby="appointments-title"
        >
          <div className="appointments-intro">
            <p className="eyebrow">03 / Tests & appointments</p>
            <h2 id="appointments-title">
              What are the
              <br />
              tests looking for?
            </h2>
            <p>
              There is no single test that can diagnose Sjögren’s. Clinicians
              put different pieces of information together, alongside your
              history and symptoms.
            </p>
            <Source id="diagnosis" />
          </div>
          <Accordion className="questions tests">
            {tests.map((test) => (
              <AccordionItem key={test.id} value={test.id}>
                <AccordionTrigger>
                  <span>
                    <span className="test-number">{test.number}</span>
                    {test.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{test.body}</p>
                  <p className="test-prompt">You could ask: “{test.prompt}”</p>
                  <Source id="diagnosis" />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <Quiz />
        <section
          className="shell involvement-section"
          id="involvement"
          aria-labelledby="involvement-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / Involvement & engagement</p>
              <h2 id="involvement-title">
                Shaping research
                <br />
                through lived experience.
              </h2>
            </div>
            <p>
              Patient and public involvement and engagement (PPIE) brings the
              knowledge and experience of people affected by a condition into
              research.
            </p>
          </div>
          <div className="involvement-grid">
            <article>
              <span className="involvement-label">Involvement</span>
              <h3>Shape research priorities</h3>
              <p>
                Help choose research questions, review information or advise a
                research team. Your perspective can influence how research is
                planned and shared.
              </p>
            </article>
            <article>
              <span className="involvement-label">Engagement</span>
              <h3>Learn and exchange ideas</h3>
              <p>
                Discussions and public events create opportunities to share
                research, ask questions and exchange perspectives.
              </p>
            </article>
            <article>
              <span className="involvement-label">Participation</span>
              <h3>Take part in a study</h3>
              <p>
                This means being a research participant. Each study has its own
                eligibility requirements and consent process.
              </p>
            </article>
          </div>
          <p className="section-note">
            <Source id="terminology" />
          </p>
          <div className="involvement-next">
            <div>
              <h3>Opportunities to get involved</h3>
              <p>
                This project’s own involvement programme is still being
                developed. NIHR lists wider ways to contribute to health and
                care research.
              </p>
            </div>
            <a className="outlined-link" href={sources.nihr.url}>
              NIHR involvement opportunities{' '}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          className="resource-section"
          id="resources"
          aria-labelledby="resources-title"
        >
          <div className="shell">
            <div className="resource-heading">
              <div>
                <p className="eyebrow">Resources</p>
                <h2 id="resources-title">Information and support</h2>
              </div>
              <p>Information and support from established organisations.</p>
            </div>
            <div className="resource-grid">
              {[
                {
                  id: 'nhs' as const,
                  title: 'Everyday health information',
                  body: 'Symptoms, diagnosis and living with Sjögren’s.',
                },
                {
                  id: 'children' as const,
                  title: 'For children and families',
                  body: 'Childhood Sjögren’s information and family support.',
                },
                {
                  id: 'uk' as const,
                  title: 'Community support',
                  body: 'Information and support from Sjögren’s UK.',
                },
              ].map((resource) => (
                <a
                  className="resource-card"
                  key={resource.id}
                  href={sources[resource.id].url}
                >
                  <span className="resource-provider">
                    {sources[resource.id].name}{' '}
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                  <h3>{resource.title}</h3>
                  <p>{resource.body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section
          className="shell about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">About this project</p>
            <h2 id="about-title">Sources and review</h2>
          </div>
          <div>
            <p>
              This independent website provides information about Sjögren’s
              disease and childhood-onset Sjögren’s. Review by independent
              clinicians, people with Sjögren’s and their families is pending.
            </p>
            <p>
              It provides general education, not a diagnosis or individual
              treatment advice. For questions about your own or your child’s
              health, speak with your healthcare team.
            </p>
            <p className="small">
              Sources checked 8 September 2026. Source checking does not mean
              clinical endorsement. No affiliation with the linked organisations
              is claimed. Quiz answers stay in this page and are cleared on
              refresh; this site has no sign-up or health-data form. GitHub
              Pages hosts the site and may process technical access logs.
            </p>
            <a
              className="text-link"
              href="https://github.com/JunjiePeng/sjd-public-engagement"
            >
              Project details & source code{' '}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <a className="footer-brand" href="#main">
            Understanding Sjögren’s<span>·</span>
          </a>
          <p>Sjögren’s disease & childhood-onset Sjögren’s</p>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
