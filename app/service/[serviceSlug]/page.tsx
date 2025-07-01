"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Users, MessageSquare, Clock, CheckCircle, ArrowLeft } from "lucide-react";

const ServiceDetailPage = ({ params }: { params: { serviceSlug: string } }) => {
  const { serviceSlug } = params;

  const services: { [key: string]: any } = {
    'prowadzenie-ksiegowosci': {
      icon: Calculator,
      title: "Prowadzenie księgowości w Miliczu",
      description: "Kompleksowa obsługa księgowa Twojego przedsiębiorstwa",
      price: "Od 150 zł/mies.",
      fullDescription: [
        "Kompleksowa obsługa księgowa to fundament sprawnego i bezpiecznego funkcjonowania każdej firmy w Miliczu i okolicach.",
        "Oferujemy profesjonalne wsparcie w zakresie prowadzenia księgi przychodów i rozchodów oraz ryczałtu ewidencjonowanego.",
        "Nasz zespół doświadczonych księgowych zapewnia terminowe sporządzanie dokumentacji, bieżące rozliczenia podatkowe oraz reprezentację przed urzędami skarbowymi i ZUS.",
        "Działamy rzetelnie, przejrzyście i zawsze dostosowujemy zakres usług do indywidualnych potrzeb Twojej firmy."
      ],
      benefits: [
        "Księgi przychodów i rozchodów",
        "Ryczałt ewidencjonowany", 
        "Terminowe rozliczenia podatkowe",
        "Reprezentacja przed urzędami",
        "Bieżące monitorowanie przepisów",
        "Przypomnienia o terminach"
      ],
      process: [
        "Pierwsze spotkanie i analiza potrzeb",
        "Podpisanie umowy o współpracy",
        "Przekazanie dokumentów (do 5. dnia miesiąca)",
        "Prowadzenie księgowości zgodnie z prawem",
        "Miesięczne raportowanie i rozliczenia"
      ]
    },
    'kadry-i-place': {
      icon: Users,
      title: "Kadry i płace w Miliczu",
      description: "Sprawna obsługa kadrowo-płacowa Twojej firmy",
      price: "Od 50 zł/os./mies.",
      fullDescription: [
        "Sprawna obsługa kadr i płac to klucz do harmonijnego funkcjonowania firmy oraz satysfakcji Twoich pracowników.",
        "Nasze biuro rachunkowe w Miliczu oferuje kompleksowe wsparcie w zakresie naliczania wynagrodzeń, sporządzania list płac, przygotowywania deklaracji ZUS oraz prowadzenia ewidencji czasu pracy.",
        "Dbamy o pełną zgodność z obowiązującym prawem pracy, przepisami podatkowymi oraz aktualnymi regulacjami.",
        "Powierzając nam obsługę kadrowo-płacową, masz pewność, że wszystkie formalności zostaną załatwione terminowo i rzetelnie."
      ],
      benefits: [
        "Naliczanie wynagrodzeń",
        "Sporządzanie list płac",
        "Deklaracje ZUS",
        "Ewidencja czasu pracy",
        "Umowy o pracę i zlecenie",
        "Świadectwa pracy"
      ],
      process: [
        "Analiza struktury zatrudnienia",
        "Konfiguracja systemu płacowego",
        "Miesięczne naliczenia",
        "Przygotowanie dokumentów ZUS",
        "Raportowanie i archiwizacja"
      ]
    },
    'konsultacje-ksiegowe': {
      icon: MessageSquare,
      title: "Konsultacje księgowe online i w Miliczu",
      description: "Indywidualne wsparcie w zagadnieniach podatkowych",
      price: "170 zł/godz.",
      fullDescription: [
        "Potrzebujesz wsparcia w skomplikowanych zagadnieniach księgowych lub podatkowych? Nasze konsultacje księgowe to idealne rozwiązanie.",
        "Oferujemy pomoc w zakresie optymalizacji podatkowej, analizy finansowej oraz interpretacji i stosowania przepisów prawa podatkowego.",
        "Dzięki naszej wiedzy i doświadczeniu pomożemy Ci zminimalizować obciążenia podatkowe i podejmować świadome decyzje finansowe.",
        "Z konsultacji możesz skorzystać jednorazowo lub w ramach stałej obsługi księgowej - online lub stacjonarnie w Miliczu."
      ],
      benefits: [
        "Optymalizacja podatkowa",
        "Analiza finansowa",
        "Interpretacja przepisów",
        "Doradztwo strategiczne",
        "Konsultacje online",
        "Wsparcie w decyzjach biznesowych"
      ],
      process: [
        "Umówienie terminu konsultacji",
        "Przesłanie zagadnień do omówienia",
        "Przygotowanie się księgowej",
        "Spotkanie online lub stacjonarne",
        "Podsumowanie i rekomendacje"
      ]
    },
    'rozliczenia-roczne-pit': {
      icon: Clock,
      title: "Rozliczenia roczne PIT w Miliczu",
      description: "Profesjonalne przygotowanie zeznań podatkowych",
      price: "Od 100 zł",
      fullDescription: [
        "Sporządzanie rocznych zeznań podatkowych może być wyzwaniem, zwłaszcza w przypadku skomplikowanej sytuacji finansowej.",
        "Nasze biuro rachunkowe w Miliczu oferuje kompleksowe wsparcie w przygotowaniu i składaniu deklaracji rocznych PIT.",
        "Zadbamy o prawidłowe rozliczenie wszystkich przychodów, kosztów oraz ulg podatkowych, abyś mógł spać spokojnie.",
        "Dzięki naszej pomocy unikniesz stresu związanego z rozliczeniami oraz ryzyka błędów, które mogą prowadzić do nieprzyjemnych konsekwencji."
      ],
      benefits: [
        "Rozliczenie PIT-36, PIT-37",
        "Optymalizacja ulg podatkowych",
        "Reprezentacja przed US",
        "Bezpieczne rozliczenia",
        "Terminowe składanie deklaracji",
        "Doradztwo podatkowe"
      ],
      process: [
        "Zebranie dokumentów do rozliczenia",
        "Analiza sytuacji podatkowej",
        "Przygotowanie deklaracji PIT",
        "Weryfikacja i optymalizacja",
        "Złożenie w odpowiednim terminie"
      ]
    }
  };

  const service = services[serviceSlug || ''];

  if (!service) {
    return <div>Usługa nie została znaleziona</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Breadcrumbs />
        
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Powrót do usług
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mx-auto mb-6 p-4 bg-white/10 rounded-full w-20 h-20 flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                {service.title}
              </h1>
              <p className="text-xl mb-8">
                {service.description}
              </p>
              <div className="text-2xl font-bold mb-6">
                {service.price}
              </div>
              <Button size="lg" className="bg-light text-primary hover:bg-light/90" asChild>
                <Link href="/contact">Umów konsultację</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Description */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-6">Opis usługi</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {service.fullDescription.map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {/* Benefits */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-6">Co zyskujesz?</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Process */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-6">Jak przebiega współpraca?</h3>
                    <ol className="space-y-4">
                      {service.process.map((step: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Gotowy na współpracę?
                </h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Skontaktuj się z nami już dziś i umów bezpłatne spotkanie. Omówimy Twoje potrzeby 
                  i przedstawimy indywidualną ofertę dostosowaną do Twojego biznesu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/kontakt">Umów spotkanie</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/uslugi">Zobacz inne usługi</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
