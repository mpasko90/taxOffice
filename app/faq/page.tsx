"use client";

import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      category: "Koszty i płatności",
      icon: "💰",
      questions: [
        {
          question: "Ile kosztują usługi biura rachunkowego w Miliczu?",
          answer: "Każdego klienta traktujemy indywidualnie, wobec czego również wyceny usług są indywidualne. Dostosowujemy się do wymagań i oczekiwań klienta. Przykładowe ceny: prowadzenie księgowości od 150 zł/mies., kadry i płace od 50 zł/os./mies., konsultacje 170 zł/godz. Jeśli chcesz zorientować się w naszych cenach, napisz do nas!"
        },
        {
          question: "Co to jest opłata startowa i ile wynosi?",
          answer: "Przed nawiązaniem współpracy każdy z nowych klientów spotyka się z wykwalifikowaną księgową. Koszt spotkania wynosi 170,00 zł netto za każdą rozpoczętą godzinę. Rezerwacja terminu to opłacenie pierwszej godziny. Podczas spotkania wytłumaczymy podatki, znajdziemy odpowiedzi na pytania i przeprowadzimy symulację podatkową."
        }
      ]
    },
    {
      category: "Współpraca",
      icon: "🤝",
      questions: [
        {
          question: "Czy jest możliwa współpraca na odległość z biurem w Miliczu?",
          answer: "Tak, oczywiście. Nasze biuro znajduje się stacjonarnie w Miliczu (woj. dolnośląskie), ale mamy duże doświadczenie w pracy zdalnej z klientami z całej Polski. Obsługujemy m.in. firmy znajdujące się we Wrocławiu, Krakowie, Warszawie. Korzystamy z nowoczesnych narzędzi zapewniających bezproblemową współpracę online."
        },
        {
          question: "Kiedy jest podpisywana umowa i co ona zawiera?",
          answer: "Umowę podpisujemy zazwyczaj na pierwszym spotkaniu z klientem, jeśli po przedstawieniu naszej oferty, każdy z nas jest chętny na współpracę. Jeśli chcesz najpierw w domu, na spokojnie przeczytać umowę przed podpisaniem – wystarczy napisać nam maila, wyślemy wzór umowy do zapoznania się. Poza umową o księgowość, podpisujemy umowę o przetwarzaniu danych osobowych."
        },
        {
          question: "Jak nawiązać współpracę z biurem?",
          answer: "To proste, napisz nam e-maila, że jesteś zainteresowany. Odezwiemy się najszybciej jak to możliwe. Możesz także zadzwonić pod numer +48 791 188 166 lub skorzystać z formularza kontaktowego na stronie."
        }
      ]
    },
    {
      category: "Dokumenty i terminy",
      icon: "📋",
      questions: [
        {
          question: "Co mam dostarczyć do biura, aby być rozliczonym?",
          answer: "Należy dostarczyć komplet dokumentów do 5. dnia miesiąca: wszystkie faktury sprzedaży, raport okresowy z kasy fiskalnej (jeśli posiadasz), wszystkie faktury zakupów/kosztów firmowych (opisane), wyciąg bankowy. Wtedy masz gwarancję na otrzymanie wyników podatkowych w odpowiednim terminie."
        },
        {
          question: "W jaki sposób mam dostarczać dokumenty?",
          answer: "Dokumenty można dostarczać na 4 sposoby: 1) można nas odwiedzić w biurze (pon-pt, 9:00-15:00), 2) poza godzinami pracy dokumenty można wrzucić do skrzynki przed biurem, 3) można wysłać pocztą/kurierem, 4) można wysłać na e-maila skan faktur lub czytelne zdjęcie, lub wrzucić na dysk Google i wysłać nam link."
        },
        {
          question: "Czy dostanę przypomnienie o płatnościach?",
          answer: "Tak, przedsiębiorca jest zobowiązany w odpowiednich terminach płacić podatki i składki ZUS – przypomnienie wysyłamy e-mailem co miesiąc."
        }
      ]
    },
    {
      category: "Komunikacja i wsparcie",
      icon: "💬",
      questions: [
        {
          question: "Jak mogę skontaktować się z biurem?",
          answer: "Można kontaktować się z nami telefonicznie +48 791 188 166 | +48 882 188 166 oraz e-mailowo: biuro@taxoffice.biz. Zdecydowanie preferujemy kontakt mailowy. Odpowiadamy na maila w ciągu max. 24h (nie licząc weekendów, świąt i dni wolnych od pracy)."
        },
        {
          question: "Jak zostanę poinformowany o podatku?",
          answer: "Podsumowanie przychodów i kosztów, bilans firmy oraz informację o podatku do zapłaty lub jego braku wysyłamy co miesiąc na e-maila i wiadomość na WhatsApp."
        },
        {
          question: "Czy mogę liczyć na pomoc podczas pierwszych miesięcy?",
          answer: "Tak, oczywiście. Konsultacje dla naszych klientów są bezpłatne nie tylko przez pierwsze miesiące, ale cały czas trwania umowy z nami. Kto pyta nie błądzi. 🙂 Czasem niewinna z pozoru czynność może spowodować nieodwracalne skutki. Dlatego, zanim podejmiesz konkretne decyzje – skontaktuj się z nami."
        }
      ]
    },
    {
      category: "Bezpieczeństwo",
      icon: "🛡️",
      questions: [
        {
          question: "W jaki sposób biuro odpowiada za ewentualne pomyłki?",
          answer: "Nasze błędy poprawiamy od razu, kiedy tylko zostaną zauważone. Posiadamy ubezpieczenie OC i jeśli będzie taka potrzeba, otrzymasz odszkodowanie. W przypadku ewentualnego błędu rachunkowego pokrywamy odsetki oraz ewentualne mandaty — Twoje finanse są z nami bezpieczne."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navigation />
        <div className="pt-20">
          <Breadcrumbs />
          
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90"></div>
            
            <div className="relative container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Masz pytania?
                <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                  Znajdź odpowiedzi tutaj
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-95">
                Klienci pytają, my odpowiadamy. Przeczytaj najczęściej zadawane pytania 
                dotyczące usług biura rachunkowego w Miliczu.
              </p>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {faqs.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-16">
                    <div className="text-center mb-12">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {category.category}
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </div>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem 
                          key={`${categoryIndex}-${index}`} 
                          value={`item-${categoryIndex}-${index}`} 
                          className="border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-r from-white to-gray-50"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <span className="font-semibold text-gray-900 pr-4 text-lg">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed pb-6 text-base">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Nie znalazłeś odpowiedzi na swoje pytanie?
              </h3>
              <p className="text-xl mb-12 max-w-3xl mx-auto opacity-95">
                Skontaktuj się z naszym biurem rachunkowym w Miliczu. 
                Chętnie odpowiemy na wszystkie pytania dotyczące księgowości, kadr, płac i rozliczeń podatkowych.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Phone className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Zadzwoń</h4>
                  <p className="text-sm opacity-90">+48 791 188 166</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Mail className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Napisz</h4>
                  <p className="text-sm opacity-90">biuro@taxoffice.biz</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <MessageCircle className="h-8 w-8 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Odpowiadamy</h4>
                  <p className="text-sm opacity-90">w ciągu 24h</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold" asChild>
                  <Link href="/kontakt">
                    Zadaj pytanie
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" asChild>
                  <a href="tel:+48791188166">Zadzwoń teraz</a>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
  );
};

export default FAQPage;
