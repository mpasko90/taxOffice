import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Users, MessageSquare, Clock, Briefcase } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Prowadzenie księgowości",
      description: "Kompleksowa obsługa księgowa Twojego przedsiębiorstwa",
      details: "Księgi przychodów i rozchodów, ryczałt ewidencjonowany, terminowe rozliczenia podatkowe i reprezentacja przed urzędami.",
      price: "Od 150 zł/mies."
    },
    {
      icon: Users,
      title: "Kadry i płace",
      description: "Sprawna obsługa kadrowo-płacowa Twojej firmy",
      details: "Naliczanie wynagrodzeń, listy płac, deklaracje ZUS, ewidencja czasu pracy zgodnie z obowiązującym prawem.",
      price: "Od 50 zł/os./mies."
    },
    {
      icon: MessageSquare,
      title: "Konsultacje księgowe",
      description: "Indywidualne wsparcie w zagadnieniach podatkowych",
      details: "Optymalizacja podatkowa, analiza finansowa, interpretacja przepisów prawa podatkowego z dowolnego miejsca.",
      price: "170 zł/godz."
    },
    {
      icon: Clock,
      title: "Rozliczenia roczne PIT",
      description: "Profesjonalne przygotowanie zeznań podatkowych",
      details: "Prawidłowe rozliczenie przychodów, kosztów oraz ulg podatkowych. Reprezentacja przed urzędami skarbowymi.",
      price: "Od 100 zł"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0
    }
  };

  return (
    <section id="uslugi" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
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
            className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Poznaj naszą ofertę
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Oferujemy kompleksowe usługi księgowe dostosowane do potrzeb Twojego biznesu
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="text-center relative z-10">
                  <motion.div 
                    className="mx-auto mb-4 w-20 h-20 flex items-center justify-center relative overflow-hidden rounded-full"
                    variants={iconVariants}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Animowane tło gradientowe */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-secondary/15 to-accent/10 group-hover:from-primary/20 group-hover:via-secondary/25 group-hover:to-accent/20 transition-all duration-500"></div>
                    
                    {/* Świecące pierścienie */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500"></div>
                    <div className="absolute inset-2 rounded-full border border-secondary/15 group-hover:border-secondary/30 transition-all duration-500"></div>
                    
                    {/* Ikona */}
                    <service.icon className="h-10 w-10 text-primary group-hover:text-primary/90 group-hover:scale-110 transition-all duration-300 relative z-10 drop-shadow-sm" />
                    
                    {/* Dodatkowy efekt blasku */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                  <CardTitle className="text-xl mb-2 text-primary group-hover:text-primary/90 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.details}
                  </p>
                  <div className="mb-6">
                    <span className="text-2xl font-bold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {service.price}
                    </span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300" asChild>
                      <Link href="/kontakt">Zapytaj o szczegóły</Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="flex items-center justify-center mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden">
                {/* Animowane tło gradientowe dla ikony startowej */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/80 via-orange-300/60 to-yellow-200/80 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/50 to-orange-200/50"></div>
                
                {/* Świecący pierścień */}
                <div className="absolute inset-0 rounded-full border border-amber-300/50"></div>
                
                <Briefcase className="h-6 w-6 text-amber-600 relative z-10 drop-shadow-sm" />
                
                {/* Efekt blasku */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
              </div>
            </motion.div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-3">Opłata startowa</h3>
            <p className="text-amber-700 leading-relaxed">
              Przed nawiązaniem współpracy każdy nowy klient spotyka się z wykwalifikowaną księgową. 
              Koszt spotkania wynosi <strong className="text-amber-900">170,00 zł netto</strong> za każdą rozpoczętą godzinę.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
