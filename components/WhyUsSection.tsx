
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, CheckCircle, Bell, MapPin, Shield } from "lucide-react";

const WhyUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Terminowość i dokładność",
      description: "Wspieramy Twój biznes, dbając o wszystkie kluczowe terminy. Przypominamy o ważnych datach i terminowo realizujemy powierzone zadania.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Indywidualne podejście",
      description: "Każdy biznes jest inny — i tak samo traktujemy naszych klientów. Dostosowujemy rozwiązania do specyfiki Twojej działalności.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: CheckCircle,
      title: "Spokój i bezpieczeństwo",
      description: "Twoje finanse są w dobrych rękach. Nasz zespół to doświadczone księgowe, które nieustannie poszerzają swoją wiedzę.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Bell,
      title: "Pełna transparentność",
      description: "Cenimy uczciwość i jasne zasady współpracy. Przedstawiamy przejrzysty cennik bez ukrytych kosztów i niejasności.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Nowoczesne rozwiązania",
      description: "Korzystamy z nowoczesnych narzędzi księgowych, które umożliwiają bezproblemową współpracę z klientami z całej Polski.",
      color: "from-teal-500 to-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1
    }
  };

  return (
    <section id="dlaczego-my" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Animowane tło */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-green-400/10 via-teal-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }}></div>
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
            className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dlaczego warto nam zaufać?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Przekonaj się, że o podatkach mówimy ludzkim językiem
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm h-full group relative overflow-hidden">
                {/* Animowane tło gradientowe */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {/* Animowane tło ikony */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-90`}></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                      <div className="absolute inset-0 rounded-xl border border-white/30"></div>
                      
                      <benefit.icon className="h-6 w-6 text-white relative z-10 drop-shadow-sm" />
                      
                      {/* Efekt błysku */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3 
                        className="text-lg font-semibold text-primary mb-3 group-hover:text-primary/90 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      >
                        {benefit.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      >
                        {benefit.description}
                      </motion.p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-sm border border-primary/10 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Animowane tło */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
            
            <motion.div
              className="flex items-center justify-center mb-6 relative z-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                <Shield className="h-8 w-8 text-white relative z-10 drop-shadow-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-semibold text-primary mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Ochrona Twoich finansów
            </motion.h3>
            <motion.p 
              className="text-gray-700 leading-relaxed text-lg relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Posiadamy ubezpieczenie OC działalności księgowej. W przypadku ewentualnego błędu 
              rachunkowego pokrywamy odsetki oraz ewentualne mandaty — Twoje finanse są z nami bezpieczne.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
