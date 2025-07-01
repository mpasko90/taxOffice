
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Ile kosztują usługi biura?",
      answer: "Każdego klienta traktujemy indywidualnie, wobec czego również wyceny usług są indywidualne. Dostosowujemy się do wymagań i oczekiwań klienta. Jeśli chcesz zorientować się w naszych cenach, napisz do nas!"
    },
    {
      question: "Czy jest możliwa współpraca na odległość?",
      answer: "Tak, oczywiście. Nasze biuro znajduje się stacjonarnie w Miliczu (woj. dolnośląskie), ale mamy duże doświadczenie w pracy zdalnej z klientami z całej Polski. Obsługujemy m.in. firmy znajdujące się we Wrocławiu, Krakowie, Warszawie."
    },
    {
      question: "Jak mogę skontaktować się z biurem?",
      answer: "Można kontaktować się z nami telefonicznie +48 791 188 166 | +48 882 188 166 oraz e-mailowo: biuro@taxoffice.biz. Zdecydowanie preferujemy kontakt mailowy. Odpowiadamy na maila w ciągu max. 24h (nie licząc weekendów, świąt i dni wolnych od pracy)."
    },
    {
      question: "Co mam dostarczyć do biura, aby być rozliczonym?",
      answer: "Należy dostarczyć komplet dokumentów do 5. dnia miesiąca: wszystkie faktury sprzedaży, raport okresowy z kasy fiskalnej, wszystkie faktury zakupów/kosztów firmowych (opisane), wyciąg bankowy."
    },
    {
      question: "Czy dostanę przypomnienie o płatnościach?",
      answer: "Tak, przedsiębiorca jest zobowiązany w odpowiednich terminach płacić podatki i składki ZUS – przypomnienie wysyłamy e-mailem co miesiąc."
    },
    {
      question: "Jak zostanę poinformowany o podatku?",
      answer: "Podsumowanie przychodów i kosztów, bilans firmy oraz informację o podatku do zapłaty lub jego braku wysyłamy co miesiąc na e-maila i wiadomość na WhatsApp."
    },
    {
      question: "W jaki sposób biuro odpowiada za ewentualne pomyłki?",
      answer: "Nasze błędy poprawiamy od razu, kiedy tylko zostaną zauważone. Posiadamy ubezpieczenie OC i jeśli będzie taka potrzeba, otrzymasz odszkodowanie. Możesz czuć się spokojny i bezpieczny."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
      {/* Animowane tło */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/10 via-indigo-400/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 via-purple-400/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-12 h-12 border border-primary/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-8 h-8 border border-secondary/10 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Klienci pytają, my odpowiadamy
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Najczęściej zadawane pytania
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="border border-gray-200/60 rounded-lg px-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <AccordionTrigger className="text-left hover:no-underline relative z-10 group-hover:text-primary/90 transition-colors duration-300">
                    <span className="font-semibold text-primary">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pb-4 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg backdrop-blur-sm border border-primary/10 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="relative z-10">
              <p className="text-gray-600 mb-4">
                Masz inne pytania? Skontaktuj się z nami!
              </p>
              <div className="space-x-4">
                <motion.a 
                  href="mailto:biuro@taxoffice.biz" 
                  className="text-primary hover:underline transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  biuro@taxoffice.biz
                </motion.a>
                <span className="text-gray-400">|</span>
                <motion.a 
                  href="tel:+48791188166" 
                  className="text-primary hover:underline transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +48 791 188 166
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
