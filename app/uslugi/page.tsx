"use client";

import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, MessageSquare, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesPage = () => {
  const services = [
    {
      id: 'prowadzenie-ksiegowosci',
      icon: Calculator,
      title: "Prowadzenie księgowości",
      description: "Kompleksowa obsługa księgowa Twojego przedsiębiorstwa",
      details: "Księgi przychodów i rozchodów, ryczałt ewidencjonowany, terminowe rozliczenia podatkowe i reprezentacja przed urzędami.",
      price: "Od 150 zł/mies.",
      benefits: ["KPiR i ryczałt", "Terminowe rozliczenia", "Reprezentacja przed US", "Bieżące monitorowanie"]
    },
    {
      id: 'kadry-i-place',
      icon: Users,
      title: "Kadry i płace",
      description: "Sprawna obsługa kadrowo-płacowa Twojej firmy",
      details: "Naliczanie wynagrodzeń, listy płac, deklaracje ZUS, ewidencja czasu pracy zgodnie z obowiązującym prawem.",
      price: "Od 50 zł/os./mies.",
      benefits: ["Naliczanie wynagrodzeń", "Listy płac", "Deklaracje ZUS", "Ewidencja czasu pracy"]
    },
    {
      id: 'konsultacje-ksiegowe',
      icon: MessageSquare,
      title: "Konsultacje księgowe",
      description: "Indywidualne wsparcie w zagadnieniach podatkowych",
      details: "Optymalizacja podatkowa, analiza finansowa, interpretacja przepisów prawa podatkowego z dowolnego miejsca.",
      price: "170 zł/godz.",
      benefits: ["Optymalizacja podatkowa", "Analiza finansowa", "Interpretacja przepisów", "Konsultacje online"]
    },
    {
      id: 'rozliczenia-roczne-pit',
      icon: Clock,
      title: "Rozliczenia roczne PIT",
      description: "Profesjonalne przygotowanie zeznań podatkowych",
      details: "Prawidłowe rozliczenie przychodów, kosztów oraz ulg podatkowych. Reprezentacja przed urzędami skarbowymi.",
      price: "Od 100 zł",
      benefits: ["PIT-36, PIT-37", "Ulgi podatkowe", "Reprezentacja", "Terminowe składanie"]
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Profesjonalne usługi księgowe
              <span className="block text-2xl md:text-3xl font-normal mt-2 opacity-90">
                w Miliczu i całej Polsce
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 opacity-95 leading-relaxed">
              Kompleksowa obsługa księgowa, kadry i płace, konsultacje podatkowe. 
              Działamy od 2018 roku, łącząc doświadczenie z nowoczesnym podejściem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl" asChild>
                <Link href="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg" asChild>
                <a href="tel:+48791188166">
                  Zadzwoń: +48 791 188 166
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nasze usługi księgowe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferujemy pełen zakres usług księgowych dostosowanych do potrzeb Twojego biznesu
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-primary/5">
                  <CardHeader className="pb-4">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1 text-gray-900">{service.title}</CardTitle>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.details}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Co otrzymujesz:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                        <Link href={`/uslugi/${service.id}`}>
                          Szczegóły usługi
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href="/kontakt">Zapytaj o cenę</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                Rozpocznij współpracę
              </h3>
              <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                Przed nawiązaniem współpracy każdy nowy klient spotyka się z wykwalifikowaną księgową. 
                Koszt spotkania wynosi <strong>170,00 zł netto</strong> za każdą rozpoczętą godzinę.
              </p>
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Podczas pierwszego spotkania:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Analiza potrzeb Twojej firmy</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Wytłumaczenie przepisów podatkowych</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Symulacja podatkowa</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Indywidualna wycena usług</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                    <Link href="/kontakt">
                      Umów spotkanie
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Dlaczego warto wybrać nasze biuro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Doświadczenie, profesjonalizm i indywidualne podejście do każdego klienta
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Doświadczenie
                </h3>
                <p className="text-gray-600">
                  Działamy od 2018 roku, obsługując firmy z różnych branż
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Bezpośredni kontakt
                </h3>
                <p className="text-gray-600">
                  Masz bezpośredni kontakt z księgową, nie z call center
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Terminowość
                </h3>
                <p className="text-gray-600">
                  Wszystkie deklaracje składamy na czas, bez opóźnień
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage; 