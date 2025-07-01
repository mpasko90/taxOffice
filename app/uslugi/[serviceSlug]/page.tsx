import Link from "next/link";
import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Users, MessageSquare, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { type Metadata } from "next";

// Type-safe services object
const services = {
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
      "Naliczanie wynagrodzeń i składek",
      "Sporządzanie list płac",
      "Deklaracje ZUS i PIT-4R",
      "Ewidencja czasu pracy",
      "Umowy o pracę i zlecenia",
      "Reprezentacja przed ZUS"
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
      "Rozliczenie roczne PIT to obowiązek każdego podatnika, który może generować spory stres i niepewność.",
      "Nasze biuro rachunkowe w Miliczu oferuje profesjonalne wsparcie w zakresie przygotowania i złożenia deklaracji PIT-36, PIT-37 oraz innych zeznań podatkowych.",
      "Zapewniamy prawidłowe rozliczenie wszystkich przychodów, kosztów uzyskania przychodu oraz przysługujących ulg podatkowych.",
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
} as const;

type ServiceSlug = keyof typeof services;

interface PageProps {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = services[serviceSlug as ServiceSlug];
  
  if (!service) {
    return {
      title: 'Usługa nie znaleziona | Tax Office Marta Mróz Milicz'
    };
  }

  return {
    title: `${service.title} | Tax Office Marta Mróz Milicz`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = services[serviceSlug as ServiceSlug];

  if (!service) {
    return (
      <div>
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Usługa nie znaleziona</h1>
          <p>Przepraszamy, ale nie znaleziono takiej usługi.</p>
          <Link href="/uslugi">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Wróć do listy usług
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <ServiceIcon className="h-8 w-8 mr-3 text-primary" />
            <h1 className="text-3xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-4">{service.description}</p>
          <div className="text-2xl font-bold text-primary">{service.price}</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Opis usługi</h2>
                <div className="space-y-4">
                  {service.fullDescription.map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Korzyści</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Proces współpracy</h2>
            <ol className="list-decimal list-inside space-y-3">
              {service.process.map((step: string, index: number) => (
                <li key={index} className="text-gray-600">
                  <span className="ml-2">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Link href="/uslugi">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do listy usług
          </Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
