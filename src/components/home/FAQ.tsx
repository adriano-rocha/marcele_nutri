// src/components/home/FAQ.tsx
import { FT, FB, faqs } from '../../data/nutriData';

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24"
      style={{ backgroundColor: "#d8dad6" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ ...FB, color: "#5e8c6a" }}
          >
            Dúvidas frequentes
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ ...FT, color: "#d18e8f" }}
          >
            Perguntas & Respostas
          </h2>
          <hr
            className="w-16 mx-auto mt-6"
            style={{ borderColor: "#d18e8f" }}
          />
        </div>

        <div
          className="rounded-2xl overflow-hidden shadow-sm"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d18e8f22",
          }}
        >
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="faq-item px-6"
            >
              <summary style={{ ...FB, color: "#372b2e" }}>
                {faq.pergunta}
              </summary>
              <p
                className="faq-answer"
                style={{ ...FB, color: "#372b2e" }}
              >
                {faq.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}