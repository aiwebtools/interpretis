
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What exactly does Interpretis AI do?",
    answer: "Interpretis is an AI tool that uncovers the etymological roots, historical depths, and symbolic layers of words, phrases, and concepts. It provides comprehensive analyses including linguistic origins, historical context, metaphorical significance, hidden meanings, and cultural relevance of any term you submit."
  },
  {
    question: "How accurate is the information provided by Interpretis?",
    answer: "Interpretis draws on extensive linguistic and historical databases to provide accurate information. However, for some obscure terms or when exploring speculative insights, it clearly labels when interpretations are subjective or theoretical rather than established fact."
  },
  {
    question: "Can I use Interpretis for academic research?",
    answer: "While Interpretis is a powerful tool for initial exploration and gaining insights, for academic research we recommend using it as a starting point and verifying information through peer-reviewed academic sources. It's excellent for generating ideas and connections that you can then investigate further."
  },
  {
    question: "What types of words or phrases can I analyze with Interpretis?",
    answer: "You can analyze virtually anything—individual words, idioms, phrases, cultural references, nursery rhymes, book titles, historical terms, modern slang, and more. The tool is designed to work with language from any time period and cultural context."
  },
  {
    question: "Is there a limit to how many queries I can make?",
    answer: "Interpretis is available as part of ChatGPT Plus subscription. There are no specific query limits beyond the normal usage patterns of ChatGPT."
  },
  {
    question: "Can Interpretis analyze terms in languages other than English?",
    answer: "Yes, Interpretis can analyze terms from many languages, though its explanations will be provided in English. Its capability varies by language, with strongest performance in major European and Asian languages."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="section" id="faq">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-interpretis-muted max-w-2xl mx-auto">
            Everything you need to know about Interpretis AI
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glassmorphic-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10 last:border-b-0">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-interpretis-accent1 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-interpretis-muted pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
