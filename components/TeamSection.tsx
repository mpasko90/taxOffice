
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  const team = [
    {
      name: "Marta Mróz",
      role: "Założycielka i główna księgowa",
      education: "Absolwentka Uniwersytetu WSB Merito Wrocław - kierunek rachunkowość",
      experience: "Doświadczenie praktyczne od 2011 roku, własne biuro od 2018 roku",
      description: "Na co dzień doradza przedsiębiorcom, przeprowadza konsultacje oraz wspiera w zrozumieniu skomplikowanych przepisów podatkowych. W pracy ceni bezpośredni kontakt z klientami, szczerość i otwartość.",
      photo: "/photos/71.jpg",
      altText: "Marta Mróz księgowa Milicz"
    },
    {
      name: "Marlena",
      role: "Księgowa",
      education: "Magister finansów i rachunkowości - Uniwersytet WSB Merito Wrocław",
      experience: "Doświadczenie w księgowości od 2018 roku, tytuł magistra w 2022 roku",
      description: "Specjalizuje się w kompleksowej obsłudze księgowej firm, rozliczeniach kadrowo-płacowych oraz analizie przepisów prawa podatkowego i gospodarczego. Szczególną wagę przywiązuje do profesjonalizmu i rzetelności.",
      photo: "/photos/77.jpg",
      altText: "Marlena Cymbała księgowa biuro rachunkowe Milicz"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section id="o-nas" className="py-20 bg-gradient-to-br from-gray-50 via-indigo-50/30 to-blue-50/40 relative overflow-hidden">
      {/* Animowane tło */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-indigo-300/10 via-blue-400/10 to-purple-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-blue-300/10 via-cyan-400/10 to-teal-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-accent/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
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
            Poznaj nas bliżej
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Kto tworzy nasze biuro rachunkowe?
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
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
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden bg-white/80 backdrop-blur-sm">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 relative"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                      initial={{ scale: 0, rotate: -45 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      {/* Image border effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500"></div>
                      <div className="absolute inset-1 rounded-full border border-secondary/15 group-hover:border-secondary/30 transition-all duration-500"></div>
                      
                      <img 
                        src={member.photo} 
                        alt={member.altText}
                        className="w-full h-full object-cover relative z-10"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-2xl font-bold text-primary group-hover:text-primary/90 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      >
                        {member.role}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    <div>
                      <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors duration-300">Wykształcenie:</h4>
                      <p className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">{member.education}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/90 transition-colors duration-300">Doświadczenie:</h4>
                      <p className="text-gray-700 text-sm group-hover:text-gray-800 transition-colors duration-300">{member.experience}</p>
                    </div>

                    <div>
                      <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg backdrop-blur-sm border border-primary/10 relative overflow-hidden"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <p className="text-gray-600 italic relative z-10">
              Wspólnie tworzymy zespół, który łączy profesjonalizm z indywidualnym podejściem do każdego klienta.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
