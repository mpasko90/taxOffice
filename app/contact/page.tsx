"use client";

import React from "react";
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
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-4">Znajdź nas w social media</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.facebook.com/taxofficemilicz/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>Facebook</span>
                      </a>
                      <a 
                        href="https://www.instagram.com/taxofficemilicz/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-pink-600 hover:text-pink-800 transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                        <span>Instagram</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="mt-8 space-y-4">
                  <Button size="lg" className="w-full" asChild>
                    <a href="tel:+48791188166">
                      <Phone className="h-5 w-5 mr-2" />
                      Zadzwoń teraz
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="mailto:biuro@taxoffice.biz">
                      <Mail className="h-5 w-5 mr-2" />
                      Wyślij email
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Znajdziesz nas w Miliczu
              </h2>
              <div className="bg-gray-100 rounded-lg p-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.5083251480537!2d17.263436676620188!3d51.50993907181384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47055b54a9d57b9b%3A0x677fffb7f3e0a758!2sTax%20Office%20Marta%20Mr%C3%B3z%20-%20biuro%20rachunkowe!5e1!3m2!1spl!2spl!4v1750932458187!5m2!1spl!2spl" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Tax Office Marta Mróz - biuro rachunkowe w Miliczu"
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4">
                Tax Office Marta Mróz - biuro rachunkowe, Milicz, woj. dolnośląskie
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
