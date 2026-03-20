import buttons from '../assets/icons/buttons.png'


const FAQS = [
  { q: "What counts as art? What doesn't?", a: "The primary output of your program must be visual: pixel art, generative graphics, data viz, ASCII art, live shaders, and so on. A todo app with nice CSS doesn't qualify because the output is a list, not art. Grey areas are decided by reviewers!" },
  { q: "Does my project have to be original?", a: "You can remix or be inspired by existing work, but you must note it in your artist statement. The code you write must be your own." },
  { q: "How are hours verified?", a: "We count from Hackatime. You must also submit an accurate timelapse or screen recording of active work. Idle time does NOT count!" },
  { q: "What if Hackatime didn't track some of my hours?", a: "Submit a screen recording as evidence. Reviewers will make a call, as we can't add hours without some proof." },
  { q: "Can I submit more than once?", a: "Yes. You can submit multiple projects and accumulate pixels across all of them." },
  { q: "Can I work on the same project across multiple submissions?", a: "Yes, as long as each submission represents real new hours and the project has meaningfully evolved." },
  { q: "What's the tutorial rule exactly?", a: "If you follow one of our tutorials (P5.js, ASCII, CSS), you must make at least one structural change and mention it in your artist statement. What counts as structural is at reviewers' discretion." },
  { q: "How long does shipping take?", a: "Expect 1–4 weeks for most prizes. Large-format prints may take longer." },
  { q: "I'm not in the US — can I still get prizes?", a: "Yes. We ship internationally for most prizes. Some items may have restrictions; check the prize page for details." },
  { q: "When do votes happen and how?", a: "Weekly, via Slack reactions in the Canvas channel. The piece with the most reactions gets printed in large format." },
  { q: "What happens to my pixel count after I redeem?", a: "Pixels are deducted when you redeem. You keep the remainder and can continue earning." },
  { q: "Who are the reviewers?", a: "So far, me!" },
]

export default function FAQ() {
  return (
    <section id="faq" className="section">
<div className="rule-item" style={{ justifyContent: 'space-between' }}>        <div>
          <p className="section-label">If you have questions...!</p>
          <h2 className="subtitle">FAQ</h2>
        </div>
        <img src={buttons} alt="" className="section-icon" />
      </div>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">
              <p>{item.q}</p>
              <span className="faq-indicator" />
            </summary>
            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}