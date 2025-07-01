'use client';

import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function SygnalistaPage() {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    date: "",
    name: "",
    email: "",
    phone: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">System zgłaszania nieprawidłowości</h1>
            <p className="mt-3 text-gray-600">
              Bezpieczna i poufna platforma do zgłaszania nadużyć i nieprawidłowości
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="type" className="block text-sm font-medium">
                    Rodzaj zgłoszenia
                  </label>
                  <select 
                    id="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Wybierz rodzaj zgłoszenia</option>
                    <option value="fraud">Oszustwo finansowe</option>
                    <option value="corruption">Korupcja</option>
                    <option value="discrimination">Dyskryminacja</option>
                    <option value="harassment">Mobbing</option>
                    <option value="other">Inne</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium">
                    Opis sytuacji
                  </label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Opisz szczegółowo zaistniałą sytuację..."
                    className="min-h-[150px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="block text-sm font-medium">
                    Data zdarzenia
                  </label>
                  <Input
                    type="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="evidence" className="block text-sm font-medium">
                    Załączniki (opcjonalnie)
                  </label>
                  <Input
                    type="file"
                    id="evidence"
                    multiple
                    className="cursor-pointer"
                  />
                  <p className="text-sm text-gray-500">
                    Możesz załączyć dokumenty, zdjęcia lub inne materiały potwierdzające zgłoszenie
                  </p>
                </div>

                <div className="space-y-4 border-t pt-4">
                  <h3 className="text-lg font-medium">Dane kontaktowe (opcjonalne)</h3>
                  <p className="text-sm text-gray-500">
                    Podanie danych kontaktowych nie jest wymagane, ale może pomóc w wyjaśnieniu sprawy.
                    Twoja tożsamość pozostanie chroniona.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Imię i nazwisko
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Adres email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jan.kowalski@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium">
                      Telefon kontaktowy
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+48 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                    Potwierdzam, że podane informacje są prawdziwe i jestem świadomy/a odpowiedzialności za składanie fałszywych zeznań
                  </label>
                </div>

                <Button type="submit" className="w-full">
                  Wyślij zgłoszenie
                </Button>
              </div>
            </div>
          </form>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-900 mb-2">
              Informacja o ochronie sygnalistów
            </h3>
            <p className="text-sm text-blue-700">
              Zgodnie z Dyrektywą UE 2019/1937 oraz polskim prawem, sygnaliści są objęci szczególną ochroną prawną.
              Zapewniamy poufność zgłoszenia oraz ochronę przed działaniami odwetowymi.
              Każde zgłoszenie zostanie dokładnie przeanalizowane przez niezależny zespół.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
