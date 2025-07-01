"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Users, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  const team = [
    {
      name: "Marta Mróz",
      role: "Założycielka i główna księgowa",
      education: "Absolwentka Uniwersytetu WSB Merito Wrocław - kierunek rachunkowość",
      experience: "Doświadczenie praktyczne od 2011 roku, własne biuro od 2018 roku",
      description: "Na co dzień doradza przedsiębiorcom, przeprowadza konsultacje oraz wspiera w zrozumieniu skomplikowanych przepisów podatkowych. W pracy ceni bezpośredni kontakt z klientami, szczerość i otwartość.",
      personalInfo: "Prywatnie jest szczęśliwą żoną, a pasja do nieustannego doskonalenia usług i wdrażania nowych rozwiązań jest integralną częścią jej podejścia do prowadzenia biura.",
      photo: "/photos/IMG-20230921-WA0001.jpg",
      altText: "Marta Mróz księgowa Milicz"
    },
    {
      name: "Marlena",
      role: "Księgowa",
      education: "Magister finansów i rachunkowości - Uniwersytet WSB Merito Wrocław",
      experience: "Doświadczenie w księgowości od 2018 roku, tytuł magistra w 2022 roku",
      description: "Specjalizuje się w kompleksowej obsłudze księgowej firm, rozliczeniach kadrowo-płacowych oraz analizie przepisów prawa podatkowego i gospodarczego. Szczególną wagę przywiązuje do profesjonalizmu i rzetelności.",
      personalInfo: "Prywatnie — szczęśliwa żona, ceniąca równowagę między życiem zawodowym a prywatnym, co przekłada się na wysokie zaangażowanie i konsekwentny rozwój zawodowy.",
      photo: "/photos/IMG-20230921-WA0002.jpg",
      altText: "Marlena księgowa biuro rachunkowe Milicz"
    }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Rzetelna komunikacja",
      description: "Każdy klient otrzymuje komplet rzetelnych informacji przedstawionych w sposób klarowny i przystępny."
    },
    {
      icon: Lightbulb,
      title: "Nowoczesna obsługa",
      description: "Oferujemy możliwość spotkań online, wykorzystując bezpieczne i sprawdzone narzędzia komunikacyjne."
    },
    {
      icon: Clock,
      title: "Przejrzysta cenowa",
      description: "Nasze ceny są jasne i z góry określone — bez ukrytych kosztów czy niejasnych zapisów."
    },
    {
      icon: Shield,
      title: "Ochrona finansów",
      description: "Posiadamy ubezpieczenie OC działalności księgowej. Twoje finanse są z nami bezpieczne."
    },
    {
      icon: Users,
      title: "Szybki kontakt",
      description: "Odpowiadamy na wiadomości e-mail w ciągu 24 godzin w dni robocze i zawsze oddzwaniamy."
    },
    {
      icon: Heart,
      title: "Profesjonalizm",
      description: "Wyróżnia nas zaangażowanie, dokładność i pełen profesjonalizm potwierdzony opiniami klientów."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Breadcrumbs />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Poznaj nasze biuro rachunkowe
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Działamy od 2018 roku, łącząc doświadczenie z nowoczesnym podejściem do księgowości w Miliczu i całej Polsce
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Nasza misja
              </h2>
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <strong>„Ty prowadzisz i rozwijasz swój biznes, my zajmiemy się księgowością!"</strong>
                </p>
                <p>
                  Potrzebujesz księgowej, która odciąży Cię z formalności i znajomości prawa podatkowego? 
                  Zaufaj naszemu doświadczeniu i prowadź biznes świadomie i bez stresu.
                </p>
                <p>
                  Jesteśmy biurem rachunkowym z Milicza, działającym od 2018 roku. Oferujemy usługi księgowe, 
                  kadrowe, konsultacje księgowe oraz rozliczenia podatkowe.
                </p>
              </div>
            </div>

            {/* Mission Points */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Aktywne zaangażowanie
                </h3>
                <p className="text-gray-600">
                  w finanse Twojej firmy
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Zapewnienie bezpieczeństwa podatkowego
                </h3>
                <p className="text-gray-600">
                  zgodnie z obowiązującym prawem
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Wsparcie w decyzjach biznesowych
                </h3>
                <p className="text-gray-600">
                  poprzez dostarczanie informacji
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Dlaczego warto nam zaufać?
              </h2>
              <p className="text-xl text-gray-600">
                Przekonaj się, co nas wyróżnia na rynku usług księgowych w Miliczu
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section with actual photos */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Kto tworzy nasze biuro rachunkowe?
              </h2>
              <p className="text-xl text-gray-600">
                Poznaj zespół ekspertów księgowych z Milicza
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src={member.photo} 
                          alt={member.altText}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{member.name}</h3>
                        <p className="text-gray-600 font-medium">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Wykształcenie:</h4>
                        <p className="text-gray-700 text-sm">{member.education}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-1">Doświadczenie:</h4>
                        <p className="text-gray-700 text-sm">{member.experience}</p>
                      </div>

                      <div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {member.description}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-700 text-sm leading-relaxed italic">
                          {member.personalInfo}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 italic mb-6">
                Wspólnie tworzymy zespół, który łączy profesjonalizm z indywidualnym podejściem do każdego klienta.
              </p>
              <Button size="lg" asChild>
                <Link href="/kontakt">Poznaj nas osobiście</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Obsługujemy klientów z całej Polski
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Nasze biuro znajduje się stacjonarnie w Miliczu (woj. dolnośląskie), 
              ale mamy duże doświadczenie w pracy zdalnej z klientami z całej Polski.
            </p>
            <div className="flex justify-center space-x-8 mb-8 flex-wrap gap-4">
              <span className="text-lg font-semibold text-primary">📍 Wrocław</span>
              <span className="text-lg font-semibold text-primary">📍 Kraków</span>
              <span className="text-lg font-semibold text-primary">📍 Warszawa</span>
              <span className="text-lg font-semibold text-primary">📍 Milicz</span>
            </div>
            <p className="text-gray-600 mb-8">
              Korzystamy z nowoczesnych technologii zapewniając sprawną i wygodną księgowość online.
            </p>
            <Button size="lg" asChild>
              <Link href="/uslugi">Zobacz naszą ofertę</Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
