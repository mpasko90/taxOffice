"use client";

import Navigation from "@/components/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

const contactSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres email"),
  phone: z.string().min(9, "Podaj prawidłowy numer telefonu"),
  subject: z.string().min(5, "Temat musi mieć co najmniej 5 znaków"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Dane formularza:", data);
    toast.success("Wiadomość została wysłana! Odpowiemy w ciągu 24 godzin.");
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+48 791 188 166", "+48 882 188 166"],
      note: "Preferujemy kontakt mailowy"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["biuro@taxoffice.biz"],
      note: "Odpowiadamy w ciągu 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["Milicz", "Województwo dolnośląskie"],
      note: "Obsługa stacjonarna i online"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      details: ["Poniedziałek - Piątek", "9:00 - 15:00"],
      note: "Poza godzinami: skrzynka pocztowa"
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
              Skontaktuj się z nami
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Masz pytania? Chcesz nawiązać współpracę? Napisz lub zadzwoń - chętnie pomoże nasze biuro rachunkowe z Milicza
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Napisz do nas
                </h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Formularz kontaktowy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Imię i nazwisko *</Label>
                          <Input
                            id="name"
                            {...register("name")}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="subject">Temat *</Label>
                        <Input
                          id="subject"
                          {...register("subject")}
                          placeholder="Np. Konsultacja księgowa, oferta na księgowość"
                          className={errors.subject ? "border-red-500" : ""}
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Wiadomość *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          {...register("message")}
                          placeholder="Opisz swoje potrzeby lub zadaj pytanie..."
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Wyślij wiadomość
                      </Button>

                      <p className="text-sm text-gray-600 text-center">
                        * Pola wymagane. Odpowiadamy w ciągu 24 godzin w dni robocze.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Dane kontaktowe
                </h2>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-700">{detail}</p>
                            ))}
                            <p className="text-sm text-gray-500 mt-1">{info.note}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Śledź nas w mediach społecznościowych
                  </h3>
                  <div className="flex space-x-4">
                    <Link 
                      href="https://www.facebook.com/taxofficemilicz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </Link>
                    <Link 
                      href="https://www.instagram.com/taxofficemilicz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Często zadawane pytania
              </h2>
              <p className="text-xl text-gray-600">
                Odpowiedzi na najczęstsze pytania o nasze usługi
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Jak długo trwa pierwsza konsultacja?
                  </h3>
                  <p className="text-gray-600">
                    Pierwsza konsultacja trwa około 30-45 minut. To czas na poznanie Twojej sytuacji i przedstawienie oferty.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Czy obsługujecie firmy z całej Polski?
                  </h3>
                  <p className="text-gray-600">
                    Tak, obsługujemy firmy z całej Polski. Wszystkie formalności załatwiamy online, więc lokalizacja nie ma znaczenia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Jakie dokumenty potrzebuję do rozpoczęcia współpracy?
                  </h3>
                  <p className="text-gray-600">
                    Wystarczy umowa o świadczenie usług księgowych i podstawowe dane firmy. Wszystkie szczegóły omówimy podczas pierwszej konsultacji.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Czy oferujecie darmową konsultację?
                  </h3>
                  <p className="text-gray-600">
                    Tak, pierwsza konsultacja jest zawsze bezpłatna. To czas na poznanie się i omówienie Twoich potrzeb.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/faq">
                  Zobacz więcej pytań
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage; 