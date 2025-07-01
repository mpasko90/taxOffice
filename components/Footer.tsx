import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: "e-Urząd Skarbowy", url: "https://www.podatki.gov.pl/" },
    { name: "Generator mikrorachunku", url: "https://www.podatki.gov.pl/generator-mikrorachunku-podatkowego/" },
    { name: "Biała Lista VAT", url: "https://www.podatki.gov.pl/wykaz-podatnikow-vat/" },
    { name: "System VIES", url: "https://ec.europa.eu/taxation_customs/vies/" },
    { name: "ZUS", url: "https://www.zus.pl/" },
    { name: "CEIDG", url: "https://www.ceidg.gov.pl/" },
    { name: "e-SKŁADKA", url: "https://www.zus.pl/baza-wiedzy/biezace-wazne-informacje/skladki/platnosc-skladek/numer-rachunku-bankowego-zus" }
  ];

  const legalLinks = [
    { name: "Panel Sygnalisty", url: "/sygnalista", description: "Zgłaszanie naruszeń prawa" },
    { name: "Polityka Prywatności", url: "/polityka-prywatnosci" },
    { name: "Regulamin", url: "/regulamin" }
  ];

  return (
    <footer className="bg-primary text-light">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-heading">Tax Office</h3>
            <p className="mb-4 text-gray-300">
              Profesjonalne biuro rachunkowe w Miliczu. Księgowość, kadry i płace, 
              konsultacje księgowe. Obsługa firm z całej Polski online i stacjonarnie od 2018 roku.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">Milicz, Województwo dolnośląskie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <div className="text-gray-300">
                  <a href="tel:+48791188166" className="hover:text-white transition-colors">+48 791 188 166</a>
                  <span className="mx-2">|</span>
                  <a href="tel:+48882188166" className="hover:text-white transition-colors">+48 882 188 166</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <a href="mailto:biuro@taxoffice.biz" className="text-gray-300 hover:text-white transition-colors">
                  biuro@taxoffice.biz
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Strona główna</Link></li>
              <li><Link href="/uslugi" className="text-gray-300 hover:text-white transition-colors">Usługi</Link></li>
              <li><Link href="/o-nas" className="text-gray-300 hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
            
            <h4 className="text-xl font-semibold mb-4 mt-8">Usługi</h4>
            <ul className="space-y-2">
              <li><Link href="/uslugi/prowadzenie-ksiegowosci" className="text-gray-300 hover:text-white transition-colors">Księgowość</Link></li>
              <li><Link href="/uslugi/kadry-i-place" className="text-gray-300 hover:text-white transition-colors">Kadry i płace</Link></li>
              <li><Link href="/uslugi/konsultacje-ksiegowe" className="text-gray-300 hover:text-white transition-colors">Konsultacje</Link></li>
              <li><Link href="/uslugi/rozliczenia-roczne-pit" className="text-gray-300 hover:text-white transition-colors">Rozliczenia PIT</Link></li>
            </ul>
          </div>

          {/* Useful Links & Legal */}
          <div className="space-y-8">
            {/* Legal Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Informacje prawne</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.url}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex flex-col"
                    >
                      <span className="font-medium">{link.name}</span>
                      {link.description && (
                        <span className="text-xs text-gray-400 mt-1">{link.description}</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Przydatne linki</h4>
              <ul className="space-y-2">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="https://www.facebook.com/taxofficemilicz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/taxofficemilicz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Godziny pracy: Pon-Pt 9:00-15:00
              </p>
              <p className="text-gray-300 text-sm">
                © {currentYear} Tax Office Marta Mróz. Wszystkie prawa zastrzeżone.
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Posiadamy ubezpieczenie OC działalności księgowej
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
