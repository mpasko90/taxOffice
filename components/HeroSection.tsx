
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Monitor, Phone } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateX: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05, 
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient-slow">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-accent/80 animate-gradient-flow-slow"></div>
        <div className="geometric-shapes-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 font-heading hero-text-glow"
          >
            Ty prowadzisz i rozwijasz swój biznes,<br />
            <motion.span 
              className="text-light hero-highlight"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              my zajmiemy się księgowością!
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Biuro rachunkowe z Milicza – odciążymy Cię z formalności i podatków
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-10 text-left"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Doświadczenie od 2018 roku",
                description: "Obsługujemy firmy z całej Polski"
              },
              {
                title: "Bezpieczeństwo podatkowe",
                description: "Zgodnie z prawem, z ubezpieczeniem OC"
              },
              {
                title: "Obsługa online i stacjonarna",
                description: "Nowoczesne rozwiązania"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-start space-x-3 glass-card-hero p-4 rounded-lg"
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <CheckCircle className="h-6 w-6 text-light flex-shrink-0 mt-1 animate-pulse-soft" />
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" className="bg-light text-primary hover:bg-light/90 button-glow" asChild>
                <Link href="/uslugi">Poznaj ofertę</Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary button-ghost shadow-lg backdrop-blur-sm bg-white/10" asChild>
                <Link href="/kontakt">Umów spotkanie</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-sm text-gray-300 mb-2">Działamy od 2018 roku • Obsługujemy klientów z całej Polski</p>
            <div className="flex justify-center space-x-8 text-sm text-gray-300 flex-wrap">
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="cursor-default flex items-center space-x-1"
              >
                <MapPin className="h-4 w-4" />
                <span>56-300 Milicz, ul. Kościelna 4</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="cursor-default flex items-center space-x-1"
              >
                <Monitor className="h-4 w-4" />
                <span>Obsługa online</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.1 }}
                className="cursor-default flex items-center space-x-1"
              >
                <Phone className="h-4 w-4" />
                <span>+48 791 188 166</span>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
